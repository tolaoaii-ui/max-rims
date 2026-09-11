import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "rims");

const palettes = {
  chrome: { lip: ["#ffffff", "#cfd4dc", "#8b919a", "#f8fafc"], spoke: ["#f8fafc", "#9ca3af", "#e5e7eb"], barrel: "#0c0c10", cap: "#d4d4d8" },
  gold: { lip: ["#fff6c2", "#ffd700", "#b8860b", "#fff1a8"], spoke: ["#ffe566", "#c9a227", "#fff3b0"], barrel: "#100c04", cap: "#f5d76e" },
  blackGold: { lip: ["#f5d76e", "#111111", "#d4af37", "#1a1a1a"], spoke: ["#e6c35c", "#0a0a0a", "#f4e19a"], barrel: "#070707", cap: "#d4af37" },
  purple: { lip: ["#e0b0ff", "#7b2cbf", "#c77dff", "#240046"], spoke: ["#c77dff", "#3c096c", "#e0aaff"], barrel: "#120018", cap: "#9d4edd" },
  blackout: { lip: ["#4b5563", "#111827", "#9ca3af", "#030712"], spoke: ["#6b7280", "#111827", "#d1d5db"], barrel: "#050505", cap: "#374151" },
};

function gradStops(id, stops) {
  return `<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">${stops
    .map((c, i) => `<stop offset="${Math.round((i / (stops.length - 1)) * 100)}%" stop-color="${c}"/>`)
    .join("")}</linearGradient>`;
}

function spokes(count, inner, outer, width, fill) {
  const parts = [];
  for (let i = 0; i < count; i += 1) {
    const a = (Math.PI * 2 * i) / count - Math.PI / 2;
    const x1 = 200 + Math.cos(a) * inner;
    const y1 = 200 + Math.sin(a) * inner;
    const x2 = 200 + Math.cos(a) * outer;
    const y2 = 200 + Math.sin(a) * outer;
    parts.push(
      `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${fill}" stroke-width="${width}" stroke-linecap="round"/>`,
    );
  }
  return parts.join("");
}

function blades(count, inner, outer, fill) {
  const parts = [];
  for (let i = 0; i < count; i += 1) {
    const a = (Math.PI * 2 * i) / count - Math.PI / 2;
    const a2 = a + 0.22;
    const a3 = a + 0.08;
    const p = [
      [200 + Math.cos(a) * inner, 200 + Math.sin(a) * inner],
      [200 + Math.cos(a2) * inner, 200 + Math.sin(a2) * inner],
      [200 + Math.cos(a3 + 0.12) * outer, 200 + Math.sin(a3 + 0.12) * outer],
      [200 + Math.cos(a3) * outer, 200 + Math.sin(a3) * outer],
    ]
      .map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`)
      .join(" ");
    parts.push(`<polygon points="${p}" fill="${fill}" opacity="0.95"/>`);
  }
  return parts.join("");
}

function lugs(n, r, color) {
  const parts = [];
  for (let i = 0; i < n; i += 1) {
    const a = (Math.PI * 2 * i) / n - Math.PI / 2;
    parts.push(
      `<circle cx="${(200 + Math.cos(a) * r).toFixed(1)}" cy="${(200 + Math.sin(a) * r).toFixed(1)}" r="4.2" fill="${color}" stroke="#111" stroke-width="0.6"/>`,
    );
  }
  return parts.join("");
}

function rimSvg({ id, palette, style, spokesCount, title }) {
  const p = palettes[palette];
  const lipId = `${id}-lip`;
  const spokeId = `${id}-spk`;
  const spokeFill = `url(#${spokeId})`;
  let face = "";
  if (style === "mesh") {
    face = spokes(spokesCount, 42, 138, 3.2, spokeFill);
  } else if (style === "wire") {
    face = spokes(spokesCount, 40, 140, 1.6, spokeFill);
  } else if (style === "blade") {
    face = blades(spokesCount, 44, 136, spokeFill);
  } else if (style === "spinner") {
    face = `${spokes(spokesCount, 48, 134, 16, spokeFill)}<circle cx="200" cy="200" r="72" fill="none" stroke="${p.cap}" stroke-width="10" opacity="0.55"/><circle cx="200" cy="200" r="58" fill="none" stroke="#fff" stroke-width="2" opacity="0.25"/>`;
  } else {
    face = spokes(spokesCount, 46, 136, 18, spokeFill);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" role="img" aria-label="${title}">
  <title>${title}</title>
  <defs>
    <radialGradient id="${id}-tire" cx="50%" cy="48%">
      <stop offset="74%" stop-color="#0a0a0a"/>
      <stop offset="86%" stop-color="#1f1f24"/>
      <stop offset="100%" stop-color="#050506"/>
    </radialGradient>
    ${gradStops(lipId, p.lip)}
    ${gradStops(spokeId, p.spoke)}
    <radialGradient id="${id}-cap" cx="35%" cy="30%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="55%" stop-color="${p.cap}"/>
      <stop offset="100%" stop-color="#222"/>
    </radialGradient>
  </defs>
  <rect width="400" height="400" fill="#050505"/>
  <circle cx="200" cy="200" r="196" fill="url(#${id}-tire)"/>
  <circle cx="200" cy="200" r="168" fill="none" stroke="#222" stroke-width="10"/>
  <circle cx="200" cy="200" r="156" fill="url(#${lipId})"/>
  <circle cx="200" cy="200" r="142" fill="${p.barrel}"/>
  <circle cx="200" cy="200" r="140" fill="none" stroke="#000" stroke-width="3" opacity="0.5"/>
  ${face}
  <circle cx="200" cy="200" r="40" fill="url(#${id}-cap)"/>
  <circle cx="200" cy="200" r="16" fill="#111"/>
  <text x="200" y="205" text-anchor="middle" font-family="Arial Black, sans-serif" font-size="9" fill="#f5d76e">MR</text>
  ${lugs(5, 28, p.cap)}
</svg>
`;
}

const specs = [
  { file: "spinner-chrome.svg", id: "sp1", palette: "chrome", style: "spinner", spokesCount: 7, title: "Oaktown spinner chrome rim" },
  { file: "scraper-20.svg", id: "sc20", palette: "chrome", style: "spoke", spokesCount: 5, title: "Scraper 20 chrome rim" },
  { file: "scraper-22.svg", id: "sc22", palette: "chrome", style: "spoke", spokesCount: 6, title: "Scraper 22 chrome rim" },
  { file: "scraper-24.svg", id: "sc24", palette: "gold", style: "spoke", spokesCount: 5, title: "Scraper 24 gold lip rim" },
  { file: "scraper-26.svg", id: "sc26", palette: "chrome", style: "blade", spokesCount: 6, title: "Scraper 26 donk rim" },
  { file: "mesh-chrome.svg", id: "mesh", palette: "chrome", style: "mesh", spokesCount: 16, title: "Ghost ride mesh chrome rim" },
  { file: "gold-lip.svg", id: "gl", palette: "gold", style: "spoke", spokesCount: 10, title: "Gold lip multi-spoke rim" },
  { file: "five-chrome.svg", id: "five", palette: "chrome", style: "spoke", spokesCount: 5, title: "Five spoke chrome rim" },
  { file: "polish-concave.svg", id: "pol", palette: "chrome", style: "blade", spokesCount: 5, title: "Polish concave rim" },
  { file: "flake-gold.svg", id: "flk", palette: "gold", style: "mesh", spokesCount: 20, title: "Gold flake mesh rim" },
  { file: "deep-lip.svg", id: "lip", palette: "purple", style: "spoke", spokesCount: 8, title: "Purple deep lip rim" },
  { file: "blade-black.svg", id: "bld", palette: "blackGold", style: "blade", spokesCount: 7, title: "Black gold blade rim" },
  { file: "wire-chrome.svg", id: "wire", palette: "chrome", style: "wire", spokesCount: 36, title: "Wire chrome rim" },
  { file: "split-gold.svg", id: "spl", palette: "blackGold", style: "spoke", spokesCount: 12, title: "Split spoke black gold rim" },
  { file: "blackout.svg", id: "blk", palette: "blackout", style: "spoke", spokesCount: 5, title: "Blackout rim" },
  { file: "forged-concave.svg", id: "frg", palette: "gold", style: "blade", spokesCount: 8, title: "Forged concave gold rim" },
  { file: "impala-mesh.svg", id: "imp", palette: "chrome", style: "mesh", spokesCount: 14, title: "Impala mesh chrome rim" },
  { file: "purple-thizz.svg", id: "thz", palette: "purple", style: "spinner", spokesCount: 8, title: "Thizz purple spinner rim" },
];

for (const spec of specs) {
  writeFileSync(join(outDir, spec.file), rimSvg(spec));
}

console.log(`Wrote ${specs.length} rim SVGs to ${outDir}`);
