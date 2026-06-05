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
}

export default function ServiceCard({
  icon,
  title,
  titleTh,
  description,
  bullets,
  compact = false,
}: ServiceCardProps) {
  const Icon = iconMap[icon] || ClipboardList

  return (
    <div className="group card card-glow-hover flex flex-col gap-4 h-full">
      {/* Gold accent line */}
      <div className="w-6 h-0.5 bg-[#D4AF37] rounded-full" />

      {/* Icon + titles */}
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center group-hover:bg-[#38BDF8]/15 transition-colors">
          <Icon className="w-5 h-5 text-[#38BDF8]" />
        </div>
        <div>
          <h3 className="text-[#F8FAFC] font-semibold text-base leading-snug">{title}</h3>
          <p className="text-[#94A3B8] text-xs mt-0.5">{titleTh}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#CBD5E1] text-sm leading-relaxed">{description}</p>

      {/* Bullets */}
      {!compact && bullets && bullets.length > 0 && (
        <ul className="flex flex-col gap-1.5 mt-auto">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-xs text-[#94A3B8]">
              <span className="w-1 h-1 rounded-full bg-[#38BDF8] mt-1.5 flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
