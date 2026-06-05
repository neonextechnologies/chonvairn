import { useState } from 'react'
import { Monitor } from 'lucide-react'

interface PlaceholderImageProps {
  src: string
  projectName: string
  category: string
  className?: string
  alt?: string
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
    <div
      className={`relative overflow-hidden flex flex-col items-center justify-center ${className}`}
      style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #0B1220 50%, #050B18 100%)',
      }}
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(56,189,248,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Cyan glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#38BDF8]/5 blur-3xl pointer-events-none" />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      {/* Abstract dashboard shapes */}
      <div className="absolute top-4 left-4 right-4 flex gap-2 opacity-20">
        <div className="flex-1 h-2 bg-[#38BDF8] rounded-full" />
        <div className="w-16 h-2 bg-[#38BDF8]/60 rounded-full" />
        <div className="w-8 h-2 bg-[#D4AF37]/60 rounded-full" />
      </div>
      <div className="absolute top-8 left-4 right-4 flex gap-2 opacity-10">
        <div className="flex-1 h-1.5 bg-[#CBD5E1] rounded-full" />
        <div className="w-20 h-1.5 bg-[#CBD5E1] rounded-full" />
      </div>

      {/* Abstract chart shapes */}
      <div className="absolute bottom-8 left-4 right-4 flex items-end gap-1.5 opacity-15">
        {[40, 65, 45, 80, 55, 70, 50, 90, 60, 75].map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-[#38BDF8] rounded-t"
            style={{ height: `${h * 0.4}px` }}
          />
        ))}
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-3">
        <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center">
          <Monitor className="w-6 h-6 text-[#38BDF8]/60" />
        </div>
        <div>
          <p className="text-[#F8FAFC] font-semibold text-sm leading-tight">{projectName}</p>
          <p className="text-[#94A3B8] text-xs mt-1">{category}</p>
        </div>
        <p className="text-[#94A3B8]/60 text-xs border-t border-[#1F2937] pt-2 mt-1">
          Project preview image will be updated
        </p>
      </div>
    </div>
  )
}
