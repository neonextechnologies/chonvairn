import { Link } from 'react-router-dom'
import { Download, Mail, Phone, MapPin, ExternalLink, FileText, Briefcase, GraduationCap, Globe, CircleCheck as CheckCircle2, Star } from 'lucide-react'
import Timeline from '../components/Timeline'
import { experiences, education, competencies, achievements } from '../data/resume'

// Inline SVG icons for competency groups (lucide paths)
const iconPaths: Record<string, string> = {
  ClipboardList:
    'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  MessageSquare:
    'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  Workflow:
    'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
  Code2: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  Brain:
    'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
}

function CompIcon({ name }: { name: string }) {
  const d = iconPaths[name]
  if (!d) return null
  return (
    <svg
      className="w-4 h-4 text-[#38BDF8]"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d={d} />
    </svg>
  )
}

const contactItems = [
  { icon: <Phone className="w-3.5 h-3.5" />, href: 'tel:0619866168', label: '061-986-6168', ext: false },
  { icon: <Mail className="w-3.5 h-3.5" />, href: 'mailto:me@chonvarin.com', label: 'me@chonvarin.com', ext: false },
  { icon: <ExternalLink className="w-3.5 h-3.5" />, href: 'https://linkedin.chonvarin.com', label: 'LinkedIn', ext: true },
  { icon: <Globe className="w-3.5 h-3.5" />, href: 'https://chonvarin.com', label: 'chonvarin.com', ext: true },
  { icon: <MapPin className="w-3.5 h-3.5" />, href: null, label: 'Pathum Thani, Thailand', ext: false },
]

// Download file paths — place files at:
//   public/downloads/chonvarin-resume.pdf
//   public/downloads/chonvarin-resume.docx
const downloadPdf = '/downloads/chonvarin-resume.pdf'
const downloadDocx = '/downloads/chonvarin-resume.docx'

export default function Resume() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          HEADER — Name, title, contact, downloads
      ══════════════════════════════════════════════ */}
      <section
        className="relative pt-28 pb-0 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #060D1C 0%, #0A1525 100%)' }}
      >
        <div className="absolute inset-0 bg-grid-fine opacity-40" />
        {/* Subtle top-right glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[340px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(56,189,248,0.06) 0%, transparent 65%)' }}
        />

        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* ── Identity ── */}
          <div className="pt-6 pb-8 border-b border-[#1A2535]">
            <span className="eyebrow">Resume / CV</span>

            <h1 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] tracking-tight mt-3">
              Chonvarin Methachotwatcharakul
            </h1>
            <p className="text-[#64748B] text-sm mt-0.5 font-medium">
              ชนม์วรินทร์ เมธาโชติวัชรากุล
            </p>

            <p className="text-[#94A3B8] text-base mt-3 font-medium leading-relaxed">
              IT Project Manager &nbsp;·&nbsp; Digital Transformation Consultant &nbsp;·&nbsp;
              AI-enabled IT Solution Specialist
            </p>

            {/* Contact row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
              {contactItems.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.ext ? '_blank' : undefined}
                    rel={item.ext ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-1.5 text-[#94A3B8] text-sm hover:text-[#38BDF8] transition-colors"
                  >
                    {item.icon}
                    {item.label}
                  </a>
                ) : (
                  <span
                    key={item.label}
                    className="flex items-center gap-1.5 text-[#64748B] text-sm"
                  >
                    {item.icon}
                    {item.label}
                  </span>
                )
              )}
            </div>
          </div>

          {/* ── Download bar ── */}
          <div className="py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            {/* Note */}
            <div className="flex-1 min-w-0">
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                <FileText className="w-3.5 h-3.5 inline mr-1.5 text-[#38BDF8] align-text-top" />
                PDF and DOCX versions are available for HR review, recruitment screening, and professional reference.
              </p>
              <p className="text-[#64748B] text-xs mt-0.5">
                มีไฟล์ PDF และ DOCX สำหรับ HR ใช้ตรวจสอบประวัติ พิจารณางาน และใช้อ้างอิงทางวิชาชีพ
              </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap gap-2 flex-shrink-0">
              <a
                href={downloadPdf}
                download
                className="btn-primary text-sm py-2.5 px-5"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
              <a
                href={downloadDocx}
                download
                className="btn-secondary text-sm py-2.5 px-5"
              >
                <Download className="w-4 h-4" />
                Download DOCX
              </a>
              <a
                href="https://linkedin.chonvarin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm py-2.5 px-4"
              >
                <ExternalLink className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://chonvarin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm py-2.5 px-4"
              >
                <Globe className="w-4 h-4" />
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PROFESSIONAL SUMMARY
      ══════════════════════════════════════════════ */}
      <section className="py-14 bg-[#050B18]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 rounded-full bg-[#38BDF8]" />
            <h2 className="text-[#F8FAFC] font-bold text-lg tracking-tight">Professional Summary</h2>
          </div>

          <div
            className="rounded-2xl p-6 md:p-8"
            style={{ background: '#0A1020', border: '1px solid #1A2535' }}
          >
            <p className="text-[#CBD5E1] text-base leading-[1.9]">
              IT Project Manager and AI-enabled IT Solution Specialist with{' '}
              <strong className="text-[#F8FAFC] font-semibold">20+ years of progressive experience</strong>{' '}
              spanning IT support, web development, custom business application development, IT
              infrastructure, hosting environments, and digital transformation. Career path from IT
              Support → Developer → Co-founder → IT Project Manager → Founder/CEO demonstrates deep
              cross-functional understanding of both business operations and technical delivery.
            </p>
            <p className="text-[#CBD5E1] text-base leading-[1.9] mt-4">
              Core strength is{' '}
              <strong className="text-[#F8FAFC] font-semibold">consultative project delivery</strong>:
              gathering and analyzing business requirements, translating them into system
              specifications, designing workflows and solution architecture, coordinating technical
              teams, managing UAT and deployment, and providing post-implementation support. Proven
              ability to reduce the gap between business users and technical teams.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SELECTED ACHIEVEMENTS
      ══════════════════════════════════════════════ */}
      <section
        className="py-14"
        style={{ background: 'linear-gradient(180deg, #0A1525 0%, #050B18 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 rounded-full bg-[#D4AF37]" />
            <h2 className="text-[#F8FAFC] font-bold text-lg tracking-tight">Selected Achievements</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="rounded-xl p-4 flex flex-col gap-2 text-center transition-all duration-200 hover:border-[#38BDF8]/20 hover:-translate-y-0.5"
                style={{ background: '#0D1625', border: '1px solid #1A2535' }}
              >
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-bold text-[#38BDF8] leading-none tracking-tight">
                    {item.stat}
                  </span>
                  <span className="text-[#94A3B8] text-xs">{item.unit}</span>
                </div>
                <div className="w-8 h-px mx-auto bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
                <p className="text-[#94A3B8] text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CORE COMPETENCIES
      ══════════════════════════════════════════════ */}
      <section className="py-14 bg-[#050B18]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 rounded-full bg-[#38BDF8]" />
            <h2 className="text-[#F8FAFC] font-bold text-lg tracking-tight">Core Competencies</h2>
            <span className="text-[#64748B] text-sm">ความสามารถหลัก</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {competencies.map((group) => (
              <div
                key={group.group}
                className="rounded-xl p-5 flex flex-col gap-4 transition-all duration-200 hover:border-[#38BDF8]/15"
                style={{ background: '#0A1020', border: '1px solid #1A2535' }}
              >
                {/* Group header */}
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(56,189,248,0.08)',
                      border: '1px solid rgba(56,189,248,0.15)',
                    }}
                  >
                    <CompIcon name={group.icon} />
                  </div>
                  <p className="text-[#CBD5E1] font-semibold text-sm">{group.group}</p>
                </div>
                {/* Skills as readable list */}
                <ul className="flex flex-col gap-1.5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                      <CheckCircle2 className="w-3 h-3 text-[#38BDF8]/50 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PROFESSIONAL EXPERIENCE
      ══════════════════════════════════════════════ */}
      <section
        className="py-14"
        style={{ background: 'linear-gradient(180deg, #0A1525 0%, #050B18 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-5 rounded-full bg-[#38BDF8]" />
            <h2 className="text-[#F8FAFC] font-bold text-lg tracking-tight">Professional Experience</h2>
            <span className="text-[#64748B] text-sm">ประสบการณ์การทำงาน</span>
          </div>
          <Timeline items={experiences} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TECHNICAL SKILLS
      ══════════════════════════════════════════════ */}
      <section className="py-14 bg-[#050B18]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 rounded-full bg-[#38BDF8]" />
            <h2 className="text-[#F8FAFC] font-bold text-lg tracking-tight">Technical Skills</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                category: 'Languages & Frameworks',
                skills: ['PHP', 'JavaScript', 'TypeScript', 'Golang', 'Laravel', 'CodeIgniter', 'Next.js', 'AdonisJS'],
              },
              {
                category: 'Infrastructure & Hosting',
                skills: ['Linux', 'Ubuntu', 'Proxmox', 'Virtualization', 'VPS', 'Hosting Environment', 'DNS', 'SSL'],
              },
              {
                category: 'Tools & Platforms',
                skills: ['MySQL', 'PostgreSQL', 'LINE API', 'REST API', 'Git', 'Docker', 'Notion', 'Jira'],
              },
              {
                category: 'AI & Automation',
                skills: ['AI-enabled Solutions', 'Workflow Automation', 'Claude AI', 'OpenAI API', 'Prompt Engineering', 'AI-assisted Dev'],
              },
            ].map((group) => (
              <div
                key={group.category}
                className="rounded-xl p-5"
                style={{ background: '#0A1020', border: '1px solid #1A2535' }}
              >
                <p className="text-[#CBD5E1] text-sm font-semibold mb-3">{group.category}</p>
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

      {/* ══════════════════════════════════════════════
          KEY PRODUCTS
      ══════════════════════════════════════════════ */}
      <section
        className="py-14"
        style={{ background: 'linear-gradient(180deg, #0A1525 0%, #050B18 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 rounded-full bg-[#D4AF37]" />
            <h2 className="text-[#F8FAFC] font-bold text-lg tracking-tight">Selected IT Products</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                num: '01',
                name: 'LineCRM',
                desc: 'CRM integrated with LINE for customer data management, communication, and sales follow-up workflow.',
                tech: ['Laravel', 'LINE API', 'MySQL'],
              },
              {
                num: '02',
                name: 'MayaCMS',
                desc: 'Content management system for organizations to manage web content, news, articles, and pages systematically.',
                tech: ['PHP', 'Laravel', 'MySQL'],
              },
              {
                num: '03',
                name: 'MayaPanelGenerator',
                desc: 'Admin panel generation system to standardize CRUD and backend management workflows across projects.',
                tech: ['PHP', 'CodeIgniter', 'MySQL'],
              },
            ].map((project) => (
              <div
                key={project.name}
                className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 hover:border-[#38BDF8]/20 hover:-translate-y-0.5"
                style={{ background: '#0D1625', border: '1px solid #1A2535' }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="text-3xl font-bold select-none leading-none"
                    style={{ color: 'rgba(56,189,248,0.12)' }}
                  >
                    {project.num}
                  </span>
                  <Star className="w-3.5 h-3.5 text-[#D4AF37]/40 mt-1" />
                </div>
                <h3 className="text-[#F8FAFC] font-semibold text-base -mt-1">{project.name}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1A2535]">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          EDUCATION
      ══════════════════════════════════════════════ */}
      <section className="py-14 bg-[#050B18]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 rounded-full bg-[#38BDF8]" />
            <h2 className="text-[#F8FAFC] font-bold text-lg tracking-tight">Education</h2>
            <span className="text-[#64748B] text-sm">การศึกษา</span>
          </div>

          <div className="flex flex-col gap-3 max-w-2xl">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="rounded-xl p-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3"
                style={{ background: '#0A1020', border: '1px solid #1A2535' }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1.5">
                    <GraduationCap className="w-4 h-4 text-[#38BDF8] flex-shrink-0" />
                    <span className="text-[#F8FAFC] font-semibold text-sm">{edu.degree}</span>
                    {edu.status === 'candidate' && (
                      <span className="badge-cyan">In Progress</span>
                    )}
                    {edu.status === 'completed' && (
                      <span
                        className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium text-emerald-400"
                        style={{
                          background: 'rgba(52,211,153,0.08)',
                          border: '1px solid rgba(52,211,153,0.15)',
                        }}
                      >
                        Completed
                      </span>
                    )}
                  </div>
                  <p className="text-[#38BDF8] text-sm">{edu.field}</p>
                  {edu.fieldTh && (
                    <p className="text-[#64748B] text-xs mt-0.5">{edu.fieldTh}</p>
                  )}
                  {edu.institution && (
                    <p className="text-[#CBD5E1] text-sm mt-1.5">{edu.institution}</p>
                  )}
                </div>
                <span className="text-[#64748B] text-sm flex-shrink-0 whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════════ */}
      <section
        className="py-16 border-t border-[#1A2535]"
        style={{ background: 'linear-gradient(180deg, #0A1525 0%, #050B18 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8"
            style={{ background: '#0A1020', border: '1px solid rgba(56,189,248,0.08)' }}>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <h2 className="text-[#F8FAFC] font-bold text-xl tracking-tight">
                Open to the right opportunity
              </h2>
              <p className="text-[#CBD5E1] text-sm leading-relaxed mt-2">
                Whether you are looking for an IT Project Manager, a digital transformation
                consultant, or a practical technology partner, I am open to discussing suitable
                opportunities.
              </p>
              <p className="text-[#64748B] text-xs mt-1.5">
                ไม่ว่าจะเป็นโอกาสด้านงานประจำ ที่ปรึกษาโครงการ หรือการพัฒนาระบบ
                สามารถติดต่อเพื่อพูดคุยแนวทางที่เหมาะสมได้
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 flex-shrink-0">
              <a
                href={downloadPdf}
                download
                className="btn-primary text-sm justify-center"
              >
                <Download className="w-4 h-4" />
                Download Resume PDF
              </a>
              <a
                href={downloadDocx}
                download
                className="btn-secondary text-sm justify-center"
              >
                <Download className="w-4 h-4" />
                Download Resume DOCX
              </a>
              <Link to="/contact" className="btn-ghost text-sm justify-center">
                <Mail className="w-4 h-4" />
                Contact Me
              </Link>
              <Link to="/portfolio" className="btn-ghost text-sm justify-center">
                <Briefcase className="w-4 h-4" />
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
