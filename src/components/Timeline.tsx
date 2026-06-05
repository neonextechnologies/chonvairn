interface TimelineItem {
  id: string
  role: string
  company: string
  period: string
  type: string
  description: string
  highlights: string[]
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      {/* Vertical track */}
      <div
        className="absolute left-5 md:left-6 top-3 bottom-3 w-px"
        style={{
          background:
            'linear-gradient(180deg, rgba(56,189,248,0.5) 0%, rgba(56,189,248,0.15) 60%, transparent 100%)',
        }}
      />

      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <div key={item.id} className="relative flex gap-8 md:gap-10 pl-14 md:pl-16">
            {/* Dot */}
            <div
              className={`absolute left-[14px] md:left-[18px] top-[22px] w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                item.type === 'current'
                  ? 'border-[#38BDF8] bg-[#050B18]'
                  : 'border-[#2A3441] bg-[#050B18]'
              }`}
            >
              {item.type === 'current' && (
                <div className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              )}
            </div>

            {/* Card */}
            <div className="card-hover flex-1 rounded-2xl group">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-[#F8FAFC] font-semibold text-base">{item.role}</h3>
                    {item.type === 'current' && (
                      <span className="badge-cyan">Current</span>
                    )}
                  </div>
                  <p className="text-[#38BDF8] text-sm font-medium">{item.company}</p>
                </div>
                <span className="text-[#94A3B8] text-sm whitespace-nowrap flex-shrink-0 mt-0.5">
                  {item.period}
                </span>
              </div>

              <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">{item.description}</p>

              <ul className="flex flex-col gap-2">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#38BDF8]/50 flex-shrink-0" />
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
