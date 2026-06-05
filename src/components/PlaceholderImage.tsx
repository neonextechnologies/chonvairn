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
    <div className="w-full h-full relative overflow-hidden">
      {/* Dark base */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #060D1C 0%, #0A1628 50%, #070E1C 100%)' }}
      />

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* Soft side glow */}
      <div
        className="absolute"
        style={{
          right: '-40px', top: '15%',
          width: '240px', height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(56,189,248,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.35), rgba(212,175,55,0.12), transparent)' }}
      />

      {/* Abstract dashboard SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 320 180"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Header bar */}
        <rect x="16" y="14" width="180" height="5" rx="2.5" fill="rgba(56,189,248,0.1)" />
        <rect x="16" y="14" width="70" height="5" rx="2.5" fill="rgba(56,189,248,0.2)" />
        <rect x="244" y="14" width="22" height="5" rx="2.5" fill="rgba(212,175,55,0.2)" />
        <rect x="272" y="14" width="14" height="5" rx="2.5" fill="rgba(56,189,248,0.1)" />
        <rect x="292" y="14" width="12" height="5" rx="2.5" fill="rgba(56,189,248,0.08)" />

        {/* Divider */}
        <line x1="16" y1="27" x2="304" y2="27" stroke="rgba(56,189,248,0.06)" strokeWidth="1" />

        {/* Left sidebar */}
        <rect x="16" y="35" width="5" height="5" rx="1.5" fill="rgba(56,189,248,0.3)" />
        <rect x="25" y="36" width="38" height="3" rx="1.5" fill="rgba(255,255,255,0.07)" />
        <rect x="16" y="46" width="5" height="5" rx="1.5" fill="rgba(255,255,255,0.06)" />
        <rect x="25" y="47" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />
        <rect x="16" y="57" width="5" height="5" rx="1.5" fill="rgba(255,255,255,0.06)" />
        <rect x="25" y="58" width="34" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />
        <rect x="16" y="68" width="5" height="5" rx="1.5" fill="rgba(212,175,55,0.25)" />
        <rect x="25" y="69" width="26" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />
        <line x1="72" y1="35" x2="72" y2="165" stroke="rgba(56,189,248,0.06)" strokeWidth="1" />

        {/* Stat cards */}
        <rect x="80" y="35" width="50" height="32" rx="4" fill="rgba(56,189,248,0.05)" stroke="rgba(56,189,248,0.1)" strokeWidth="0.75" />
        <rect x="86" y="41" width="18" height="3" rx="1.5" fill="rgba(255,255,255,0.09)" />
        <rect x="86" y="48" width="30" height="5" rx="2.5" fill="rgba(56,189,248,0.32)" />
        <rect x="86" y="56" width="13" height="2" rx="1" fill="rgba(56,189,248,0.15)" />

        <rect x="136" y="35" width="50" height="32" rx="4" fill="rgba(56,189,248,0.03)" stroke="rgba(56,189,248,0.08)" strokeWidth="0.75" />
        <rect x="142" y="41" width="18" height="3" rx="1.5" fill="rgba(255,255,255,0.07)" />
        <rect x="142" y="48" width="22" height="5" rx="2.5" fill="rgba(56,189,248,0.22)" />
        <rect x="142" y="56" width="16" height="2" rx="1" fill="rgba(56,189,248,0.1)" />

        <rect x="192" y="35" width="50" height="32" rx="4" fill="rgba(212,175,55,0.04)" stroke="rgba(212,175,55,0.1)" strokeWidth="0.75" />
        <rect x="198" y="41" width="18" height="3" rx="1.5" fill="rgba(255,255,255,0.07)" />
        <rect x="198" y="48" width="26" height="5" rx="2.5" fill="rgba(212,175,55,0.28)" />
        <rect x="198" y="56" width="15" height="2" rx="1" fill="rgba(212,175,55,0.13)" />

        {/* Chart panel */}
        <rect x="80" y="74" width="114" height="66" rx="4" fill="rgba(56,189,248,0.025)" stroke="rgba(56,189,248,0.07)" strokeWidth="0.75" />
        <rect x="86" y="80" width="38" height="3" rx="1.5" fill="rgba(255,255,255,0.09)" />
        <rect x="144" y="80" width="12" height="3" rx="1.5" fill="rgba(56,189,248,0.18)" />

        {[
          { x: 88, h: 20 }, { x: 97, h: 32 }, { x: 106, h: 16 }, { x: 115, h: 38 },
          { x: 124, h: 26 }, { x: 133, h: 34 }, { x: 142, h: 22 }, { x: 151, h: 42 },
          { x: 160, h: 28 }, { x: 169, h: 36 },
        ].map(({ x, h }, i) => (
          <rect
            key={i}
            x={x} y={132 - h} width="6" height={h} rx="2"
            fill={i === 7 ? 'rgba(212,175,55,0.4)' : i === 3 ? 'rgba(56,189,248,0.45)' : 'rgba(56,189,248,0.18)'}
          />
        ))}
        <polyline
          points="88,124 97,112 106,128 115,106 124,116 133,108 142,120 151,98 160,110 169,102"
          fill="none" stroke="rgba(56,189,248,0.35)" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"
        />
        <circle cx="151" cy="98" r="2.5" fill="rgba(212,175,55,0.65)" />
        <circle cx="169" cy="102" r="2" fill="rgba(56,189,248,0.75)" />
        <line x1="84" y1="134" x2="190" y2="134" stroke="rgba(56,189,248,0.06)" strokeWidth="0.75" />

        {/* Right panel */}
        <rect x="200" y="74" width="104" height="30" rx="4" fill="rgba(56,189,248,0.03)" stroke="rgba(56,189,248,0.07)" strokeWidth="0.75" />
        <rect x="208" y="81" width="28" height="3" rx="1.5" fill="rgba(255,255,255,0.09)" />
        <rect x="208" y="87" width="48" height="3" rx="1.5" fill="rgba(255,255,255,0.05)" />
        <rect x="208" y="93" width="36" height="3" rx="1.5" fill="rgba(56,189,248,0.18)" />

        {/* Progress bars */}
        <rect x="200" y="111" width="104" height="30" rx="4" fill="rgba(56,189,248,0.025)" stroke="rgba(56,189,248,0.06)" strokeWidth="0.75" />
        <rect x="208" y="117" width="88" height="2.5" rx="1.25" fill="rgba(255,255,255,0.04)" />
        <rect x="208" y="117" width="62" height="2.5" rx="1.25" fill="rgba(56,189,248,0.28)" />
        <rect x="208" y="123" width="88" height="2.5" rx="1.25" fill="rgba(255,255,255,0.04)" />
        <rect x="208" y="123" width="44" height="2.5" rx="1.25" fill="rgba(212,175,55,0.28)" />
        <rect x="208" y="129" width="88" height="2.5" rx="1.25" fill="rgba(255,255,255,0.04)" />
        <rect x="208" y="129" width="70" height="2.5" rx="1.25" fill="rgba(56,189,248,0.18)" />

        {/* Table rows */}
        <rect x="80" y="148" width="224" height="7" rx="3" fill="rgba(56,189,248,0.035)" />
        <rect x="80" y="148" width="58" height="7" rx="3" fill="rgba(56,189,248,0.09)" />
        <rect x="145" y="149" width="38" height="5" rx="2.5" fill="rgba(255,255,255,0.06)" />
        <rect x="190" y="149" width="28" height="5" rx="2.5" fill="rgba(56,189,248,0.16)" />
        <rect x="225" y="149" width="18" height="5" rx="2.5" fill="rgba(212,175,55,0.2)" />
        <rect x="80" y="158" width="224" height="7" rx="3" fill="rgba(255,255,255,0.01)" />
        <rect x="80" y="158" width="44" height="7" rx="3" fill="rgba(255,255,255,0.035)" />
        <rect x="145" y="159" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.045)" />
        <rect x="190" y="159" width="24" height="5" rx="2.5" fill="rgba(56,189,248,0.1)" />
      </svg>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 35%, rgba(6,13,28,0.55) 100%)' }}
      />

      {/* Center label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div
          className="flex flex-col items-center gap-1.5 px-5 py-3 rounded-xl"
          style={{
            background: 'rgba(6,13,28,0.8)',
            border: '1px solid rgba(56,189,248,0.1)',
          }}
        >
          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#38BDF8]/60">
            {category.split(' / ')[0]}
          </span>
          <span className="text-sm font-bold text-[#F8FAFC]/90 text-center leading-tight">
            {projectName}
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
