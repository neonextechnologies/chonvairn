import {
  ClipboardList,
  TrendingUp,
  Code2,
  Workflow,
  Brain,
  Server,
  Users,
  type LucideProps,
} from 'lucide-react'

const iconMap: Record<string, React.FC<LucideProps>> = {
  ClipboardList,
  TrendingUp,
  Code2,
  Workflow,
  Brain,
  Server,
  Users,
}

interface ServiceCardProps {
  icon: string
  title: string
  titleTh: string
  description: string
  bullets?: string[]
  compact?: boolean
  index?: number
}

export default function ServiceCard({
  icon,
  title,
  titleTh,
  description,
  bullets,
  compact = false,
  index = 0,
}: ServiceCardProps) {
  const Icon = iconMap[icon] || ClipboardList
  const num = String(index + 1).padStart(2, '0')

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#0D1625] border border-[#1A2535] p-6 flex flex-col gap-4 h-full transition-all duration-300 hover:border-[#38BDF8]/25 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.5), transparent)',
        }}
      />

      {/* Number */}
      <div className="flex items-start justify-between">
        <span className="text-[#38BDF8]/15 font-bold text-4xl leading-none tabular-nums select-none">
          {num}
        </span>
        {/* Gold bottom accent */}
        <div className="w-5 h-0.5 bg-gradient-to-r from-[#D4AF37]/70 to-transparent rounded-full mt-3" />
      </div>

      {/* Icon + titles */}
      <div className="flex items-start gap-4">
        <div className="icon-box group-hover:bg-[#38BDF8]/12 group-hover:border-[#38BDF8]/25 transition-colors duration-200">
          <Icon className="w-5 h-5 text-[#38BDF8]" />
        </div>
        <div>
          <h3 className="text-[#F8FAFC] font-semibold text-sm leading-snug">{title}</h3>
          <p className="text-[#94A3B8] text-xs mt-0.5">{titleTh}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#94A3B8] text-sm leading-relaxed">{description}</p>

      {/* Bullets */}
      {!compact && bullets && bullets.length > 0 && (
        <ul className="flex flex-col gap-2 mt-auto pt-3 border-t border-[#1A2535]">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-[#38BDF8]/60 flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
