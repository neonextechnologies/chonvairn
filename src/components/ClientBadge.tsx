export default function ClientBadge({ name }: { name: string }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium text-[#94A3B8] transition-all duration-200 hover:text-[#CBD5E1] hover:border-[#38BDF8]/20"
      style={{ background: '#111827', border: '1px solid #1A2535' }}
    >
      {name}
    </span>
  )
}
