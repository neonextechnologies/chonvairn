import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, FileText } from 'lucide-react'

interface ContactCTAProps {
  title?: string
  titleTh?: string
  subtitle?: string
  subtitleTh?: string
}

export default function ContactCTA({
  title = 'Have a business process, web platform, or IT project that needs practical delivery?',
  titleTh = 'หากธุรกิจของคุณต้องการระบบ เว็บไซต์ เวิร์กโฟลว์ หรือโครงการ IT ที่ต้องการส่งมอบให้ใช้งานได้จริง สามารถพูดคุยเพื่อวิเคราะห์แนวทางร่วมกันได้',
}: ContactCTAProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B18] via-[#0B1220] to-[#050B18]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#38BDF8]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Gold accent line */}
        <div className="flex justify-center mb-6">
          <div className="w-8 h-0.5 bg-[#D4AF37] rounded-full" />
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#F8FAFC] leading-tight mb-3">
          {title}
        </h2>
        <p className="text-[#94A3B8] text-base leading-relaxed max-w-2xl mx-auto mb-8">
          {titleTh}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link to="/contact" className="btn-primary">
            <MessageSquare className="w-4 h-4" />
            Discuss a Project
          </Link>
          <Link to="/contact" className="btn-secondary">
            Contact Me
          </Link>
          <Link to="/resume" className="btn-ghost">
            <FileText className="w-4 h-4" />
            View Resume
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
