import { useState } from 'react'

interface PlaceholderImageProps {
  src: string
  projectName: string
  category: string
  className?: string
  alt?: string
}

function PremiumPlaceholder({ projectName, category }: { projectName: string; category: string }) {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[#070E1C]">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #070E1C 0%, #0A1525 40%, #0D1A2E 70%, #070E1C 100%)',
        }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radial cyan glow center-right */}
      <div
        className="absolute"
        style={{
          right: '-60px',
          top: '20%',
          width: '260px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(56,189,248,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Gold top accent line */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.5) 30%, rgba(212,175,55,0.2) 70%, transparent 100%)',
        }}
      />

      {/* Abstract dashboard SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-100"
        viewBox="0 0 320 180"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top bar / header */}
        <rect x="16" y="14" width="200" height="6" rx="3" fill="rgba(56,189,248,0.12)" />
        <rect x="16" y="14" width="80" height="6" rx="3" fill="rgba(56,189,248,0.22)" />
        <rect x="240" y="14" width="24" height="6" rx="3" fill="rgba(212,175,55,0.25)" />
        <rect x="270" y="14" width="16" height="6" rx="3" fill="rgba(56,189,248,0.12)" />
        <rect x="292" y="14" width="16" height="6" rx="3" fill="rgba(56,189,248,0.12)" />

        {/* Divider */}
        <line x1="16" y1="28" x2="304" y2="28" stroke="rgba(56,189,248,0.08)" strokeWidth="1" />

        {/* Left sidebar */}
        <rect x="16" y="36" width="6" height="6" rx="1.5" fill="rgba(56,189,248,0.35)" />
        <rect x="26" y="37" width="40" height="4" rx="2" fill="rgba(255,255,255,0.08)" />

        <rect x="16" y="48" width="6" height="6" rx="1.5" fill="rgba(255,255,255,0.07)" />
        <rect x="26" y="49" width="32" height="4" rx="2" fill="rgba(255,255,255,0.05)" />

        <rect x="16" y="60" width="6" height="6" rx="1.5" fill="rgba(255,255,255,0.07)" />
        <rect x="26" y="61" width="36" height="4" rx="2" fill="rgba(255,255,255,0.05)" />

        <rect x="16" y="72" width="6" height="6" rx="1.5" fill="rgba(212,175,55,0.3)" />
        <rect x="26" y="73" width="28" height="4" rx="2" fill="rgba(255,255,255,0.05)" />

        {/* Vertical sidebar divider */}
        <line x1="76" y1="36" x2="76" y2="164" stroke="rgba(56,189,248,0.07)" strokeWidth="1" />

        {/* Stat cards row */}
        <rect x="84" y="36" width="52" height="34" rx="5" fill="rgba(56,189,248,0.06)" stroke="rgba(56,189,248,0.12)" strokeWidth="0.75" />
        <rect x="90" y="42" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
        <rect x="90" y="49" width="32" height="5" rx="2.5" fill="rgba(56,189,248,0.35)" />
        <rect x="90" y="57" width="14" height="2.5" rx="1.25" fill="rgba(56,189,248,0.18)" />

        <rect x="142" y="36" width="52" height="34" rx="5" fill="rgba(56,189,248,0.04)" stroke="rgba(56,189,248,0.1)" strokeWidth="0.75" />
        <rect x="148" y="42" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
        <rect x="148" y="49" width="24" height="5" rx="2.5" fill="rgba(56,189,248,0.25)" />
        <rect x="148" y="57" width="18" height="2.5" rx="1.25" fill="rgba(56,189,248,0.12)" />

        <rect x="200" y="36" width="52" height="34" rx="5" fill="rgba(212,175,55,0.05)" stroke="rgba(212,175,55,0.12)" strokeWidth="0.75" />
        <rect x="206" y="42" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
        <rect x="206" y="49" width="28" height="5" rx="2.5" fill="rgba(212,175,55,0.3)" />
        <rect x="206" y="57" width="16" height="2.5" rx="1.25" fill="rgba(212,175,55,0.15)" />

        {/* Chart area */}
        <rect x="84" y="78" width="120" height="68" rx="5" fill="rgba(56,189,248,0.03)" stroke="rgba(56,189,248,0.08)" strokeWidth="0.75" />

        {/* Chart header */}
        <rect x="90" y="84" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
        <rect x="150" y="84" width="14" height="3" rx="1.5" fill="rgba(56,189,248,0.2)" />
        <rect x="168" y="84" width="10" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />

        {/* Bar chart */}
        {[
          { x: 92, h: 22, fill: 'rgba(56,189,248,0.2)' },
          { x: 102, h: 34, fill: 'rgba(56,189,248,0.32)' },
          { x: 112, h: 18, fill: 'rgba(56,189,248,0.2)' },
          { x: 122, h: 40, fill: 'rgba(56,189,248,0.5)' },
          { x: 132, h: 28, fill: 'rgba(56,189,248,0.3)' },
          { x: 142, h: 36, fill: 'rgba(56,189,248,0.38)' },
          { x: 152, h: 24, fill: 'rgba(56,189,248,0.22)' },
          { x: 162, h: 44, fill: 'rgba(212,175,55,0.45)' },
          { x: 172, h: 30, fill: 'rgba(56,189,248,0.28)' },
          { x: 182, h: 38, fill: 'rgba(56,189,248,0.36)' },
        ].map(({ x, h, fill }, i) => (
          <rect key={i} x={x} y={136 - h} width="7" height={h} rx="2" fill={fill} />
        ))}

        {/* Line chart overlay */}
        <polyline
          points="92,126 102,114 112,130 122,108 132,118 142,110 152,122 162,100 172,112 182,104"
          fill="none"
          stroke="rgba(56,189,248,0.4)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Line chart dot highlights */}
        <circle cx="162" cy="100" r="2.5" fill="rgba(212,175,55,0.7)" />
        <circle cx="182" cy="104" r="2" fill="rgba(56,189,248,0.8)" />

        {/* X-axis line */}
        <line x1="88" y1="138" x2="198" y2="138" stroke="rgba(56,189,248,0.08)" strokeWidth="0.75" />

        {/* Right panel */}
        <rect x="210" y="78" width="94" height="30" rx="5" fill="rgba(56,189,248,0.04)" stroke="rgba(56,189,248,0.08)" strokeWidth="0.75" />
        <rect x="218" y="85" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.1)" />
        <rect x="218" y="91" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
        <rect x="218" y="97" width="38" height="3" rx="1.5" fill="rgba(56,189,248,0.2)" />

        {/* Progress bars */}
        <rect x="210" y="115" width="94" height="30" rx="5" fill="rgba(56,189,248,0.03)" stroke="rgba(56,189,248,0.07)" strokeWidth="0.75" />
        <rect x="218" y="121" width="78" height="2.5" rx="1.25" fill="rgba(255,255,255,0.05)" />
        <rect x="218" y="121" width="58" height="2.5" rx="1.25" fill="rgba(56,189,248,0.3)" />
        <rect x="218" y="127" width="78" height="2.5" rx="1.25" fill="rgba(255,255,255,0.05)" />
        <rect x="218" y="127" width="42" height="2.5" rx="1.25" fill="rgba(212,175,55,0.3)" />
        <rect x="218" y="133" width="78" height="2.5" rx="1.25" fill="rgba(255,255,255,0.05)" />
        <rect x="218" y="133" width="66" height="2.5" rx="1.25" fill="rgba(56,189,248,0.2)" />

        {/* Bottom table rows */}
        <rect x="84" y="152" width="220" height="7" rx="3" fill="rgba(56,189,248,0.04)" />
        <rect x="84" y="152" width="60" height="7" rx="3" fill="rgba(56,189,248,0.1)" />
        <rect x="150" y="153" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.07)" />
        <rect x="197" y="153" width="30" height="5" rx="2.5" fill="rgba(56,189,248,0.18)" />
        <rect x="234" y="153" width="20" height="5" rx="2.5" fill="rgba(212,175,55,0.22)" />
        <rect x="260" y="153" width="16" height="5" rx="2.5" fill="rgba(255,255,255,0.06)" />

        <rect x="84" y="162" width="220" height="7" rx="3" fill="rgba(255,255,255,0.015)" />
        <rect x="84" y="162" width="44" height="7" rx="3" fill="rgba(255,255,255,0.04)" />
        <rect x="150" y="163" width="32" height="5" rx="2.5" fill="rgba(255,255,255,0.05)" />
        <rect x="197" y="163" width="26" height="5" rx="2.5" fill="rgba(56,189,248,0.12)" />
      </svg>

      {/* Overlay gradient to frame content center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(7,14,28,0.5) 100%)',
        }}
      />

      {/* Center label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10">
        <div
          className="flex flex-col items-center gap-1.5 px-5 py-3 rounded-xl"
          style={{
            background: 'rgba(7,14,28,0.75)',
            border: '1px solid rgba(56,189,248,0.12)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span
            className="text-[11px] font-semibold tracking-widest uppercase"
            style={{ color: 'rgba(56,189,248,0.7)' }}
          >
            {category.split(' / ')[0]}
          </span>
          <span className="text-sm font-bold text-white/90 text-center leading-tight">
            {projectName}
          </span>
          <span
            className="text-[10px] text-center"
            style={{ color: 'rgba(212,175,55,0.5)' }}
          >
            Project preview image will be updated
          </span>
        </div>
      </div>
    </div>
  )
}

export default function PlaceholderImage({
  src,
  projectName,
  category,
  className = '',
  alt,
}: PlaceholderImageProps) {
  const [error, setError] = useState(false)

  if (!error) {
    return (
      <img
        src={src}
        alt={alt || projectName}
        className={className}
        onError={() => setError(true)}
      />
    )
  }

  return (
    <div className={className}>
      <PremiumPlaceholder projectName={projectName} category={category} />
    </div>
  )
}
