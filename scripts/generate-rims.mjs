import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "rims");

const palettes = {
  chrome: { lip: ["#ffffff", "#d7dce3", "#8d949e", "#f8fafc"], spoke: ["#f8fafc", "#a1a8b3", "#eceff3"], barrel: "#0b0b10", cap: "#d4d4d8" },
  gold: { lip: ["#fff6c2", "#ffd700", "#b8860b", "#fff1a8"], spoke: ["#ffe566", "#c9a227", "#fff3b0"], barrel: "#100c04", cap: "#f5d76e" },
  blackGold: { lip: ["#f5d76e", "#1a1a1a", "#d4af37", "#111"], spoke: ["#e6c35c", "#0a0a0a", "#f4e19a"], barrel: "#070707", cap: "#d4af37" },
  purple: { lip: ["#e0b0ff", "#7b2cbf", "#c77dff", "#240046"], spoke: ["#c77dff", "#3c096c", "#e0aaff"], barrel: "#120018", cap: "#9d4edd" },
  blackout: { lip: ["#6b7280", "#111827", "#9ca3af", "#030712"], spoke: ["#6b7280", "#111827", "#d1d5db"], barrel: "#050505", cap: "#374151" },
};

function gradStops(id, stops, vertical = false) {
  const axis = vertical
    ? `x1="0" y1="0" x2="0" y2="1"`
    : `x1="0" y1="0" x2="1" y2="1"`;
  return `<linearGradient id="${id}" ${axis}>${stops
    .map((c, i) => `<stop offset="${Math.round((i / (stops.length - 1)) * 100)}%" stop-color="${c}"/>`)
    .join("")}</linearGradient>`;
}

function wedgeSpokes(count, inner, outer, spread, fill) {
  const parts = [];
  for (let i = 0; i < count; i += 1) {
    const a = (Math.PI * 2 * i) / count - Math.PI / 2;
    const left = a - spread;
    const right = a + spread;
    const p = [
      [200 + Math.cos(left) * inner, 200 + Math.sin(left) * inner],
      [200 + Math.cos(right) * inner, 200 + Math.sin(right) * inner],
      [200 + Math.cos(right) * outer, 200 + Math.sin(right) * outer],
      [200 + Math.cos(left) * outer, 200 + Math.sin(left) * outer],
    ]
      .map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`)
      .join(" ");
    parts.push(`<polygon points="${p}" fill="${fill}"/>`);
  }
  return parts.join("");
}

function blades(count, inner, outer, fill) {
  const parts = [];
  for (let i = 0; i < count; i += 1) {
    const a = (Math.PI * 2 * i) / count - Math.PI / 2;
    const p = [
      [200 + Math.cos(a) * inner, 200 + Math.sin(a) * inner],
      [200 + Math.cos(a + 0.28) * inner, 200 + Math.sin(a + 0.28) * inner],
      [200 + Math.cos(a + 0.18) * outer, 200 + Math.sin(a + 0.18) * outer],
      [200 + Math.cos(a - 0.04) * outer, 200 + Math.sin(a - 0.04) * outer],
    ]
      .map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`)
      .join(" ");
    parts.push(`<polygon points="${p}" fill="${fill}"/>`);
  }
  return parts.join("");
}

function mesh(count, fill) {
  const rings = [58, 82, 106, 128];
  let out = "";
  for (const r of rings) {
    out += `<circle cx="200" cy="200" r="${r}" fill="none" stroke="${fill}" stroke-width="5"/>`;
  }
  out += wedgeSpokes(count, 48, 136, 0.06, fill);
  return out;
}

function lugs(n, r, color) {
  return Array.from({ length: n }, (_, i) => {
    const a = (Math.PI * 2 * i) / n - Math.PI / 2;
    return `<circle cx="${(200 + Math.cos(a) * r).toFixed(1)}" cy="${(200 + Math.sin(a) * r).toFixed(1)}" r="5" fill="${color}" stroke="#111" stroke-width="0.8"/>`;
  }).join("");
}

function rimSvg({ id, palette, style, spokesCount, title }) {
  const p = palettes[palette];
  const lipId = `${id}-lip`;
  const spokeId = `${id}-spk`;
  const spokeFill = `url(#${spokeId})`;
  let face = "";
  if (style === "mesh") face = mesh(spokesCount, spokeFill);
  else if (style === "wire") face = `${mesh(12, spokeFill)}${wedgeSpokes(36, 50, 136, 0.02, spokeFill)}`;
  else if (style === "blade") face = blades(spokesCount, 46, 136, spokeFill);
  else if (style === "spinner") {
    face = `${wedgeSpokes(spokesCount, 50, 134, 0.16, spokeFill)}<circle cx="200" cy="200" r="74" fill="none" stroke="${p.cap}" stroke-width="12" opacity="0.7"/><circle cx="200" cy="200" r="60" fill="none" stroke="#fff" stroke-width="2" opacity="0.3"/>`;
  } else {
    face = wedgeSpokes(spokesCount, 48, 136, 0.2, spokeFill);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" role="img" aria-label="${title}">
  <title>${title}</title>
  <defs>
    <radialGradient id="${id}-bg" cx="50%" cy="45%">
      <stop offset="0%" stop-color="#1a1424"/>
      <stop offset="100%" stop-color="#050506"/>
    </radialGradient>
    <radialGradient id="${id}-tire" cx="50%" cy="48%">
      <stop offset="70%" stop-color="#070707"/>
      <stop offset="84%" stop-color="#1c1c20"/>
      <stop offset="92%" stop-color="#0a0a0a"/>
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
  <rect width="400" height="400" fill="url(#${id}-bg)"/>
  <circle cx="200" cy="200" r="196" fill="url(#${id}-tire)"/>
  <circle cx="200" cy="200" r="176" fill="none" stroke="#2a2a2e" stroke-width="8"/>
  <circle cx="200" cy="200" r="158" fill="url(#${lipId})"/>
  <circle cx="200" cy="200" r="144" fill="${p.barrel}"/>
  <circle cx="200" cy="200" r="142" fill="none" stroke="#000" stroke-width="3" opacity="0.55"/>
  ${face}
  <circle cx="200" cy="200" r="44" fill="url(#${id}-cap)"/>
  <circle cx="200" cy="200" r="18" fill="#111"/>
  <text x="200" y="206" text-anchor="middle" font-family="Arial Black, sans-serif" font-size="10" fill="#f5d76e">MR</text>
  ${lugs(5, 30, p.cap)}
</svg>
`;
}

const specs = [
  { file: "spinner-chrome.svg", id: "sp1", palette: "chrome", style: "spinner", spokesCount: 7, title: "Oaktown spinner chrome rim" },
  { file: "scraper-20.svg", id: "sc20", palette: "chrome", style: "spoke", spokesCount: 5, title: "Scraper 20 chrome rim" },
  { file: "scraper-22.svg", id: "sc22", palette: "chrome", style: "spoke", spokesCount: 6, title: "Scraper 22 chrome rim" },
  { file: "scraper-24.svg", id: "sc24", palette: "gold", style: "spoke", spokesCount: 5, title: "Scraper 24 gold lip rim" },
  { file: "scraper-26.svg", id: "sc26", palette: "chrome", style: "blade", spokesCount: 6, title: "Scraper 26 donk rim" },
  { file: "mesh-chrome.svg", id: "mesh", palette: "chrome", style: "mesh", spokesCount: 10, title: "Ghost ride mesh chrome rim" },
  { file: "gold-lip.svg", id: "gl", palette: "gold", style: "spoke", spokesCount: 10, title: "Gold lip multi-spoke rim" },
  { file: "five-chrome.svg", id: "five", palette: "chrome", style: "spoke", spokesCount: 5, title: "Five spoke chrome rim" },
  { file: "polish-concave.svg", id: "pol", palette: "chrome", style: "blade", spokesCount: 5, title: "Polish concave rim" },
  { file: "flake-gold.svg", id: "flk", palette: "gold", style: "mesh", spokesCount: 12, title: "Gold flake mesh rim" },
  { file: "deep-lip.svg", id: "lip", palette: "purple", style: "spoke", spokesCount: 8, title: "Purple deep lip rim" },
  { file: "blade-black.svg", id: "bld", palette: "blackGold", style: "blade", spokesCount: 7, title: "Black gold blade rim" },
  { file: "wire-chrome.svg", id: "wire", palette: "chrome", style: "wire", spokesCount: 36, title: "Wire chrome rim" },
  { file: "split-gold.svg", id: "spl", palette: "blackGold", style: "spoke", spokesCount: 12, title: "Split spoke black gold rim" },
  { file: "blackout.svg", id: "blk", palette: "blackout", style: "spoke", spokesCount: 5, title: "Blackout rim" },
  { file: "forged-concave.svg", id: "frg", palette: "gold", style: "blade", spokesCount: 8, title: "Forged concave gold rim" },
  { file: "impala-mesh.svg", id: "imp", palette: "chrome", style: "mesh", spokesCount: 10, title: "Impala mesh chrome rim" },
  { file: "purple-thizz.svg", id: "thz", palette: "purple", style: "spinner", spokesCount: 8, title: "Thizz purple spinner rim" },
];

for (const spec of specs) {
  writeFileSync(join(outDir, spec.file), rimSvg(spec));
}

console.log(`Wrote ${specs.length} rim SVGs to ${outDir}`);
