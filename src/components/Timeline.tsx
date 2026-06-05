interface TimelineItem {
  id: string
  role: string
  company: string
  period: string
  type: string
  description: string
  highlights: string[]
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#38BDF8]/60 via-[#1F2937] to-transparent" />

      <div className="flex flex-col gap-8">
        {items.map((item) => (
          <div key={item.id} className="relative flex gap-6 md:gap-10 pl-12 md:pl-16">
            {/* Dot */}
            <div
              className={`absolute left-2 md:left-3.5 top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                item.type === 'current'
                  ? 'border-[#38BDF8] bg-[#38BDF8]/20'
                  : 'border-[#1F2937] bg-[#0B1220]'
              }`}
            >
              {item.type === 'current' && (
                <div className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
              )}
            </div>

            {/* Content */}
            <div className="card card-glow-hover flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-[#F8FAFC] font-semibold text-base">{item.role}</h3>
                    {item.type === 'current' && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-[#38BDF8] text-sm font-medium mt-0.5">{item.company}</p>
                </div>
                <span className="text-[#94A3B8] text-sm whitespace-nowrap flex-shrink-0">
                  {item.period}
                </span>
              </div>

              <p className="text-[#CBD5E1] text-sm leading-relaxed mb-3">{item.description}</p>

              <ul className="flex flex-col gap-1.5">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                    <span className="w-1 h-1 rounded-full bg-[#38BDF8] mt-1.5 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
