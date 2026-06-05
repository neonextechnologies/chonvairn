interface StatsCardProps {
  value: string
  label: string
  labelTh?: string
  accent?: 'cyan' | 'gold'
}

export default function StatsCard({ value, label, labelTh, accent = 'cyan' }: StatsCardProps) {
  const valueColor = accent === 'gold' ? 'text-[#D4AF37]' : 'text-[#38BDF8]'
  const borderColor = accent === 'gold' ? 'border-[#D4AF37]/20' : 'border-[#38BDF8]/20'
  const glowColor = accent === 'gold' ? 'bg-[#D4AF37]/5' : 'bg-[#38BDF8]/5'

  return (
    <div
      className={`card card-glow-hover flex flex-col gap-2 text-center border ${borderColor} ${glowColor}`}
    >
      <div className={`text-3xl font-bold tracking-tight ${valueColor}`}>{value}</div>
      <div>
        <p className="text-[#F8FAFC] text-sm font-medium leading-snug">{label}</p>
        {labelTh && <p className="text-[#94A3B8] text-xs mt-0.5">{labelTh}</p>}
      </div>
    </div>
  )
}
