import { Link } from 'react-router-dom'
import {
  Download,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  FileText,
  Briefcase,
  GraduationCap,
} from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Timeline from '../components/Timeline'
import { experiences, education, competencies, achievements } from '../data/resume'

const iconSvgs: Record<string, string> = {
  ClipboardList: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  MessageSquare: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  Workflow: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
  Code2: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  Brain: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
}

function InlineIcon({ name, className }: { name: string; className?: string }) {
  const d = iconSvgs[name]
  if (!d) return null
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d={d} />
    </svg>
  )
}

export default function Resume() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="relative pt-32 pb-16 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #050B18 0%, #0A1525 100%)' }}>
        <div className="absolute inset-0 bg-grid-fine opacity-60" />
        <div
          className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 65%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            {/* ── Name & contact ── */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <span className="eyebrow">Resume / CV</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] tracking-tight">
                  Chonvarin Methachotwatcharakul
                </h1>
                <p className="text-[#94A3B8] text-base mt-1">ชนม์วรินทร์ เมธาโชติวัชรากุล</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-0.5 bg-[#38BDF8] rounded-full" />
                <div className="w-3 h-0.5 bg-[#D4AF37] rounded-full" />
              </div>
              <p className="text-[#CBD5E1] text-base font-medium">
                IT Project Manager · Consultative Solution Delivery · Digital Transformation ·
                AI-enabled IT Solution Specialist
              </p>

              {/* Contact row */}
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {[
                  { icon: <Phone className="w-3.5 h-3.5" />, href: 'tel:0619866168', label: '061-9866168' },
                  { icon: <Mail className="w-3.5 h-3.5" />, href: 'mailto:me@chonvarin.com', label: 'me@chonvarin.com' },
                  { icon: <ExternalLink className="w-3.5 h-3.5" />, href: 'https://linkedin.chonvarin.com', label: 'LinkedIn', ext: true },
                  { icon: <MapPin className="w-3.5 h-3.5" />, href: null, label: 'Pathum Thani, Thailand' },
                ].map((item) =>
                  item.href ? (
                    <a key={item.label} href={item.href}
                      target={item.ext ? '_blank' : undefined}
                      rel={item.ext ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-1.5 text-[#94A3B8] text-sm hover:text-[#38BDF8] transition-colors"
                    >
                      {item.icon} {item.label}
                    </a>
                  ) : (
                    <span key={item.label} className="flex items-center gap-1.5 text-[#94A3B8] text-sm">
                      {item.icon} {item.label}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* ── Download card ── */}
            <div className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: '#0A1020', border: '1px solid rgba(56,189,248,0.1)' }}>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#38BDF8]" />
                  <p className="text-[#F8FAFC] font-semibold text-sm">Download Resume</p>
                </div>
                <span className="badge-gold">2025</span>
              </div>
              <p className="text-[#94A3B8] text-xs leading-relaxed">
                PDF and DOCX available for HR review, recruitment, and professional reference.
                <br />
                <span className="text-[#94A3B8]/60">มีไฟล์ PDF และ DOCX สำหรับ HR ใช้ตรวจสอบประวัติ</span>
              </p>
              <div className="flex flex-col gap-2">
                <a href="/downloads/chonvarin-resume.pdf" download className="btn-primary w-full justify-center text-sm py-2.5">
                  <Download className="w-4 h-4" /> Download PDF
                </a>
                <a href="/downloads/chonvarin-resume.docx" download className="btn-secondary w-full justify-center text-sm py-2.5">
                  <Download className="w-4 h-4" /> Download DOCX
                </a>
                <a href="https://linkedin.chonvarin.com" target="_blank" rel="noopener noreferrer" className="btn-ghost w-full justify-center text-sm">
                  <ExternalLink className="w-4 h-4" /> View LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Achievements ─── */}
      <section className="py-16 bg-[#050B18]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mb-10">
            <SectionHeader eyebrow="Impact" title="Selected Achievements" align="left" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((item) => (
              <div key={item.id}
                className="rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 hover:border-[#38BDF8]/20 hover:-translate-y-0.5"
                style={{ background: '#0D1625', border: '1px solid #1A2535' }}>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-[#38BDF8] tracking-tight leading-none">{item.stat}</span>
                  <span className="text-[#94A3B8] text-sm pb-0.5">{item.unit}</span>
                </div>
                <div className="w-6 h-px bg-gradient-to-r from-[#D4AF37]/60 to-transparent rounded-full" />
                <p className="text-[#94A3B8] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Professional Summary ─── */}
      <section className="py-16" style={{ background: 'linear-gradient(180deg, #0A1525 0%, #050B18 100%)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <SectionHeader eyebrow="Summary" title="Professional Summary" align="left" />
            <div className="mt-8 flex flex-col gap-4">
              <p className="text-[#CBD5E1] text-base leading-[1.85]">
                IT Project Manager and AI-enabled IT Solution Specialist with 20+ years of progressive
                experience spanning IT support, web development, custom business application development,
                IT infrastructure, hosting environments, and digital transformation. Career path from
                IT Support → Developer → Co-founder → IT Project Manager → Founder/CEO demonstrates
                deep cross-functional understanding of both business operations and technical delivery.
              </p>
              <p className="text-[#CBD5E1] text-base leading-[1.85]">
                Core strength is consultative project delivery: gathering and analyzing business requirements,
                translating them into system specifications, designing workflows and solution architecture,
                coordinating technical teams, managing UAT and deployment, and providing post-implementation
                support. Proven ability to reduce the gap between business users and technical teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Competencies ─── */}
      <section className="py-16 bg-[#050B18]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mb-10">
            <SectionHeader eyebrow="Competencies" title="Core Competencies" titleTh="ความสามารถหลัก" align="left" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {competencies.map((group) => (
              <div key={group.group}
                className="rounded-2xl p-5 flex flex-col gap-4"
                style={{ background: '#0A1020', border: '1px solid #1A2535' }}>
                <div className="flex items-center gap-3">
                  <div className="icon-box-sm">
                    <InlineIcon name={group.icon} className="w-4 h-4 text-[#38BDF8]" />
                  </div>
                  <p className="text-[#CBD5E1] font-semibold text-sm">{group.group}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tech-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Experience ─── */}
      <section className="py-16" style={{ background: 'linear-gradient(180deg, #0A1525 0%, #050B18 100%)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mb-10">
            <SectionHeader eyebrow="Experience" title="Professional Experience" titleTh="ประสบการณ์การทำงาน" align="left" />
          </div>
          <Timeline items={experiences} />
        </div>
      </section>

      {/* ─── Key Projects ─── */}
      <section className="py-16 bg-[#050B18]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mb-10">
            <SectionHeader eyebrow="Key Projects" title="Selected IT Products" align="left" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'LineCRM', desc: 'CRM solution integrated with LINE for customer data management, communication, and sales follow-up workflow.', tech: 'Laravel · LINE API · MySQL' },
              { name: 'MayaCMS', desc: 'Content management system for organizations to manage web content, news, articles, and pages systematically.', tech: 'PHP · Laravel · MySQL' },
              { name: 'MayaPanelGenerator', desc: 'Admin panel generation system to standardize CRUD and backend management workflows across projects.', tech: 'PHP · CodeIgniter · MySQL' },
            ].map((project, i) => (
              <div key={project.name}
                className="rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 hover:border-[#38BDF8]/20 hover:-translate-y-0.5"
                style={{ background: '#0D1625', border: '1px solid #1A2535' }}>
                <div className="flex items-start justify-between">
                  <span className="text-[#38BDF8]/15 font-bold text-3xl leading-none select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-5 h-px bg-gradient-to-l from-[#D4AF37]/60 to-transparent mt-2" />
                </div>
                <h3 className="text-[#F8FAFC] font-semibold text-base">{project.name}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed flex-1">{project.desc}</p>
                <p className="text-[#38BDF8]/60 text-xs pt-3 border-t border-[#1A2535]">{project.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Education ─── */}
      <section className="py-16" style={{ background: 'linear-gradient(180deg, #0A1525 0%, #050B18 100%)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mb-10">
            <SectionHeader eyebrow="Education" title="Academic Background" titleTh="การศึกษา" align="left" />
          </div>
          <div className="flex flex-col gap-4 max-w-2xl">
            {education.map((edu) => (
              <div key={edu.id}
                className="rounded-2xl p-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3"
                style={{ background: '#0D1625', border: '1px solid #1A2535' }}>
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1.5">
                    <GraduationCap className="w-4 h-4 text-[#38BDF8]" />
                    <span className="text-[#F8FAFC] font-semibold text-sm">{edu.degree}</span>
                    {edu.status === 'candidate' && <span className="badge-cyan">In Progress</span>}
                    {edu.status === 'completed' && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/8 text-emerald-400 border border-emerald-500/15">
                        Completed
                      </span>
                    )}
                  </div>
                  <p className="text-[#38BDF8] text-sm">{edu.field}</p>
                  {edu.fieldTh && <p className="text-[#94A3B8] text-xs mt-0.5">{edu.fieldTh}</p>}
                  {edu.institution && <p className="text-[#CBD5E1] text-sm mt-1.5">{edu.institution}</p>}
                </div>
                <span className="text-[#94A3B8] text-sm flex-shrink-0 whitespace-nowrap">{edu.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section className="py-14 bg-[#050B18] border-t border-[#1A2535]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-[#CBD5E1] text-base mb-2">
            Whether you are looking for an IT Project Manager, a digital transformation consultant,
            or a practical technology partner, I am open to discussing suitable opportunities.
          </p>
          <p className="text-[#94A3B8] text-sm mb-8">
            ไม่ว่าจะเป็นโอกาสด้านงานประจำ ที่ปรึกษาโครงการ หรือการพัฒนาระบบสำหรับธุรกิจ
            สามารถติดต่อเพื่อพูดคุยแนวทางที่เหมาะสมได้
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="/downloads/chonvarin-resume.pdf" download className="btn-primary text-sm">
              <Download className="w-4 h-4" /> Download Resume PDF
            </a>
            <Link to="/contact" className="btn-secondary text-sm">
              <Mail className="w-4 h-4" /> Contact Me
            </Link>
            <Link to="/portfolio" className="btn-ghost text-sm">
              <Briefcase className="w-4 h-4" /> View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
