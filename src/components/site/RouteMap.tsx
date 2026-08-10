/** Decorative animated logistics network. Not operational route data. */
export function RouteMap({ className }: { className?: string }) {
  const nodes = [
    { x: 120, y: 150 },
    { x: 300, y: 110 },
    { x: 430, y: 190 },
    { x: 585, y: 130 },
    { x: 700, y: 215 },
    { x: 845, y: 160 },
    { x: 520, y: 275 },
    { x: 245, y: 250 },
  ];
  const paths = [
    "M120 150 C 210 90, 250 90, 300 110",
    "M300 110 C 360 130, 390 170, 430 190",
    "M430 190 C 500 140, 540 120, 585 130",
    "M585 130 C 640 160, 660 195, 700 215",
    "M700 215 C 760 200, 800 170, 845 160",
    "M245 250 C 350 300, 450 300, 520 275",
    "M520 275 C 580 260, 640 240, 700 215",
    "M120 150 C 140 200, 190 235, 245 250",
  ];

  return (
    <svg
      viewBox="0 0 960 380"
      className={className}
      role="img"
      aria-label="Decorative illustration of a connected logistics network"
    >
      <defs>
        <linearGradient id="routeGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
          <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {paths.map((d, i) => (
        <g key={d}>
          <path d={d} fill="none" stroke="var(--hairline-navy)" strokeWidth="1" />
          <path
            d={d}
            fill="none"
            stroke="url(#routeGrad)"
            strokeWidth="1.6"
            strokeDasharray="26 174"
            style={{ animation: `dash ${7 + i}s linear infinite`, animationDelay: `${i * -0.9}s` }}
          />
        </g>
      ))}

      {nodes.map((n, i) => (
        <g key={`${n.x}-${n.y}`}>
          <circle
            cx={n.x}
            cy={n.y}
            r="3.5"
            fill="var(--accent)"
            opacity="0.5"
            style={{
              transformOrigin: `${n.x}px ${n.y}px`,
              animation: "ping-soft 3.6s cubic-bezier(0,0,0.2,1) infinite",
              animationDelay: `${i * 0.45}s`,
            }}
          />
          <circle cx={n.x} cy={n.y} r="3" fill="var(--on-navy)" />
          <text
            x={n.x + 10}
            y={n.y - 8}
            fill="var(--on-navy-muted)"
            fontSize="8"
            letterSpacing="1.6"
            fontFamily="var(--font-display)"
          >
            {`0${i + 1}`}
          </text>
        </g>
      ))}
    </svg>
  );
}
