interface ClientBadgeProps {
  name: string
}

export default function ClientBadge({ name }: ClientBadgeProps) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-[#0F172A] text-[#CBD5E1] border border-[#1F2937] hover:border-[#38BDF8]/30 hover:text-[#F8FAFC] transition-all duration-200">
      {name}
    </span>
  )
}
