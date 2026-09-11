export function GoldChain({ className = "" }: { className?: string }) {
  return (
    <div className={`h-2 w-full chain-border ${className}`} aria-hidden="true" />
  );
}

export function ChainRule() {
  return (
    <svg viewBox="0 0 600 24" className="h-6 w-full text-gold" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, i) => (
        <ellipse
          key={i}
          cx={18 + i * 33}
          cy="12"
          rx="11"
          ry="7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          opacity={0.85}
        />
      ))}
    </svg>
  );
}
