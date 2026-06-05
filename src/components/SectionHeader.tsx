interface SectionHeaderProps {
  eyebrow?: string
  title: string
  titleTh?: string
  subtitle?: string
  subtitleTh?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  titleTh,
  subtitle,
  subtitleTh,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-[#38BDF8] text-sm font-semibold tracking-widest uppercase">
          {eyebrow}
        </span>
      )}
      <div className={`flex flex-col gap-1 ${align === 'center' ? 'items-center' : 'items-start'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] leading-tight">{title}</h2>
        {titleTh && (
          <p className="text-base text-[#94A3B8] font-normal mt-0.5">{titleTh}</p>
        )}
      </div>
      {(subtitle || subtitleTh) && (
        <div className={`mt-1 max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle && <p className="text-[#CBD5E1] text-base leading-relaxed">{subtitle}</p>}
          {subtitleTh && (
            <p className="text-[#94A3B8] text-sm leading-relaxed mt-1">{subtitleTh}</p>
          )}
        </div>
      )}
      <div className={`flex gap-2 mt-1 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="w-8 h-0.5 bg-[#38BDF8] rounded-full" />
        <div className="w-3 h-0.5 bg-[#D4AF37] rounded-full" />
      </div>
    </div>
  )
}
