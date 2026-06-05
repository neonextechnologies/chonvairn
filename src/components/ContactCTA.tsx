import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, FileText } from 'lucide-react'

interface ContactCTAProps {
  title?: string
  titleTh?: string
}

export default function ContactCTA({
  title = 'Have a business process, web platform, or IT project that needs practical delivery?',
  titleTh = 'หากธุรกิจของคุณต้องการระบบ เว็บไซต์ เวิร์กโฟลว์ หรือโครงการ IT ที่ต้องการส่งมอบให้ใช้งานได้จริง สามารถพูดคุยเพื่อวิเคราะห์แนวทางร่วมกันได้',
}: ContactCTAProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #050B18 0%, #0A1020 50%, #050B18 100%)',
        }}
      />
      {/* Fine grid */}
      <div className="absolute inset-0 bg-grid-fine opacity-60" />
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(56,189,248,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        {/* Gold accent */}
        <div className="flex justify-center mb-6">
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent rounded-full" />
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#F8FAFC] leading-tight tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xl mx-auto mb-10">
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
