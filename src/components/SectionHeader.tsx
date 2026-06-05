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
  const isCenter = align === 'center'

  return (
    <div className={`flex flex-col gap-4 ${isCenter ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${isCenter ? 'justify-center' : ''}`}>
          <div className="w-6 h-px bg-[#38BDF8]/60 rounded-full" />
          <span className="eyebrow">{eyebrow}</span>
          <div className="w-6 h-px bg-[#38BDF8]/60 rounded-full" />
        </div>
      )}

      <div className={`flex flex-col gap-1.5 ${isCenter ? 'items-center' : 'items-start'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] leading-tight tracking-tight">
          {title}
        </h2>
        {titleTh && (
          <p className="text-[#94A3B8] text-sm font-normal">{titleTh}</p>
        )}
      </div>

      {(subtitle || subtitleTh) && (
        <div className={`mt-1 ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle && (
            <p className="text-[#CBD5E1] text-base leading-relaxed">{subtitle}</p>
          )}
          {subtitleTh && (
            <p className="text-[#94A3B8] text-sm leading-relaxed mt-1.5">{subtitleTh}</p>
          )}
        </div>
      )}

      {/* Accent mark */}
      <div className={`flex items-center gap-1.5 ${isCenter ? 'justify-center' : ''}`}>
        <div className="w-10 h-0.5 bg-[#38BDF8] rounded-full" />
        <div className="w-3 h-0.5 bg-[#D4AF37] rounded-full" />
        <div className="w-1.5 h-0.5 bg-[#38BDF8]/30 rounded-full" />
      </div>
    </div>
  )
}
