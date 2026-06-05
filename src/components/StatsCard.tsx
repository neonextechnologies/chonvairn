interface StatsCardProps {
  value: string
  label: string
  labelTh?: string
  accent?: 'cyan' | 'gold'
}

export default function StatsCard({ value, label, labelTh, accent = 'cyan' }: StatsCardProps) {
  const isCyan = accent === 'cyan'

  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-5 flex flex-col gap-2 transition-all duration-300 hover:-translate-y-0.5 ${
        isCyan
          ? 'bg-[#0A1525] border border-[#1A2535] hover:border-[#38BDF8]/25'
          : 'bg-[#0A1020] border border-[#D4AF37]/12 hover:border-[#D4AF37]/25'
      }`}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-20 h-20 rounded-full pointer-events-none"
        style={{
          background: isCyan
            ? 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-4 right-4 h-px"
        style={{
          background: isCyan
            ? 'linear-gradient(90deg, transparent, rgba(56,189,248,0.4), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)',
        }}
      />

      <div
        className={`text-3xl font-bold tracking-tight leading-none ${
          isCyan ? 'text-[#38BDF8]' : 'text-[#D4AF37]'
        }`}
      >
        {value}
      </div>

      <div>
        <p className="text-[#CBD5E1] text-sm font-medium leading-snug">{label}</p>
        {labelTh && <p className="text-[#94A3B8] text-xs mt-0.5 leading-snug">{labelTh}</p>}
      </div>
    </div>
  )
}
