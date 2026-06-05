import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Download,
  Mail,
  FileText,
  Briefcase,
  ChevronRight,
} from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import PortfolioCard from '../components/PortfolioCard'
import StatsCard from '../components/StatsCard'
import ClientBadge from '../components/ClientBadge'
import ContactCTA from '../components/ContactCTA'
import { services } from '../data/services'
import { projects } from '../data/portfolio'
import { clientGroups, stats, processSteps } from '../data/clients'

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#050B18]" />
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute inset-0 hero-glow" />

      {/* Ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#38BDF8]/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[#0EA5E9]/3 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Eyebrow badge */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-[#38BDF8] rounded-full" />
              <span className="text-[#38BDF8] text-sm font-semibold tracking-widest uppercase">
                Professional Profile
              </span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-tight tracking-tight">
                Chonvarin
                <br />
                <span className="text-gradient-cyan">Methachotwatcharakul</span>
              </h1>
              <p className="text-[#94A3B8] text-lg mt-2">ชนม์วรินทร์ เมธาโชติวัชรากุล</p>
            </div>

            {/* Subtitle */}
            <div className="flex flex-col gap-1">
              <p className="text-[#CBD5E1] text-base md:text-lg font-medium leading-relaxed">
                IT Project Manager · Consultative Solution Delivery
                <br />
                Digital Transformation · AI-enabled IT Solution Specialist
              </p>
              <p className="text-[#94A3B8] text-sm leading-relaxed mt-1">
                ผู้จัดการโครงการ IT · ที่ปรึกษา Digital Transformation · ผู้เชี่ยวชาญ AI-enabled
                IT Solution และ Workflow Automation
              </p>
            </div>

            {/* Hero statement */}
            <div className="border-l-2 border-[#38BDF8] pl-4 py-1">
              <p className="text-[#F8FAFC] text-base font-medium italic">
                "Bridging business needs, technology, workflow, and practical project delivery."
              </p>
              <p className="text-[#94A3B8] text-sm mt-1">
                เชื่อมโยงความต้องการทางธุรกิจ เทคโนโลยี เวิร์กโฟลว์ และการส่งมอบโครงการให้ใช้งานได้จริง
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link to="/portfolio" className="btn-primary">
                <Briefcase className="w-4 h-4" />
                View Portfolio
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/resume" className="btn-secondary">
                <FileText className="w-4 h-4" />
                View Resume
              </Link>
            </div>

            {/* Audience CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#1F2937]">
              <div className="flex flex-col gap-2">
                <p className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider">
                  For HR / Recruiters
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link to="/resume" className="btn-ghost text-xs px-3 py-1.5">
                    <FileText className="w-3 h-3" />
                    View Resume
                  </Link>
                  <a
                    href="/downloads/chonvarin-resume.pdf"
                    download
                    className="btn-ghost text-xs px-3 py-1.5"
                  >
                    <Download className="w-3 h-3" />
                    Download CV
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider">
                  For Business Clients
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link to="/portfolio" className="btn-ghost text-xs px-3 py-1.5">
                    <Briefcase className="w-3 h-3" />
                    View Portfolio
                  </Link>
                  <Link to="/contact" className="btn-ghost text-xs px-3 py-1.5">
                    <Mail className="w-3 h-3" />
                    Discuss Project
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-[#38BDF8]/5 blur-2xl" />
              {/* Border ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#38BDF8]/40 via-transparent to-[#D4AF37]/20 rounded-[50%]" />

              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-[#1F2937]">
                <img
                  src="/images/chonvarin-profile.jpg"
                  alt="Chonvarin Methachotwatcharakul"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = 'none'
                    target.parentElement!.classList.add(
                      'bg-gradient-to-br',
                      'from-[#0F172A]',
                      'to-[#0B1220]',
                      'flex',
                      'items-center',
                      'justify-center'
                    )
                  }}
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-[#0F172A] border border-[#1F2937] rounded-xl px-3 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
                <p className="text-[#38BDF8] text-xs font-bold">20+ Years</p>
                <p className="text-[#94A3B8] text-xs">IT Experience</p>
              </div>

              {/* Gold badge */}
              <div className="absolute -top-2 -left-2 bg-[#0F172A] border border-[#D4AF37]/20 rounded-xl px-3 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
                <p className="text-[#D4AF37] text-xs font-bold">Founder / CEO</p>
                <p className="text-[#94A3B8] text-xs">Neonex Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050B18] to-transparent" />
    </section>
  )
}

function SnapshotSection() {
  return (
    <section className="py-16 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat) => (
            <StatsCard
              key={stat.value + stat.label}
              value={stat.value}
              label={stat.label}
              labelTh={stat.labelTh}
              accent={stat.accent as 'cyan' | 'gold'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function SummarySection() {
  return (
    <section className="py-20 bg-[#050B18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader
              eyebrow="Professional Summary"
              title="Delivering Practical IT Solutions"
              titleTh="ส่งมอบ IT Solution ที่ใช้งานได้จริง"
              align="left"
            />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[#CBD5E1] text-base leading-relaxed">
              Chonvarin is an IT Project Manager and AI-enabled IT Solution Specialist with more than
              20 years of experience across IT support, software development, web applications,
              custom business applications, IT infrastructure, hosting environments, and digital
              transformation. His strength is consultative project delivery: analyzing business
              needs, translating them into system requirements, designing workflows and solutions,
              coordinating technical teams, and delivering practical systems that reduce the gap
              between business users and technical teams.
            </p>
            <p className="text-[#94A3B8] text-sm leading-relaxed border-l border-[#1F2937] pl-4">
              ชนม์วรินทร์เป็นผู้จัดการโครงการ IT และผู้เชี่ยวชาญด้าน AI-enabled IT Solution
              ที่มีประสบการณ์มากกว่า 20 ปี
              ครอบคลุมงาน IT Support, Software Development, Web Application, Custom Business
              Application, IT Infrastructure, Hosting Environment และ Digital Transformation
              จุดแข็งคือการทำงานแบบ Consultative Project Delivery
            </p>
            <div className="flex gap-3 pt-2">
              <Link to="/about" className="btn-secondary text-sm">
                Read Full Profile
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesPreviewSection() {
  return (
    <section className="py-20 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            eyebrow="What I Do"
            title="Services & Expertise"
            titleTh="บริการและความเชี่ยวชาญ"
            subtitle="End-to-end IT project delivery, digital transformation consulting, workflow automation, and AI-enabled business solutions."
            align="center"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              titleTh={service.titleTh}
              description={service.description}
              compact
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/services" className="btn-secondary">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function PortfolioPreviewSection() {
  const featured = projects.filter((p) => p.featured).slice(0, 4)

  return (
    <section className="py-20 bg-[#050B18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Selected Work"
            title="Portfolio Preview"
            titleTh="ตัวอย่างผลงาน"
            subtitle="Selected IT solutions across CRM, CMS, admin panel generation, web application development, and digital transformation."
            align="center"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/portfolio" className="btn-primary">
            View Full Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ClientsSection() {
  return (
    <section className="py-20 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Enterprise Experience"
            title="Client Industries"
            titleTh="ประสบการณ์กับลูกค้าองค์กร"
            subtitle="Professional experience references across multiple industries in Thailand."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientGroups.map((group) => (
            <div key={group.group} className="card-elevated rounded-xl p-5">
              <p className="text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3">
                {group.group}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.clients.map((client) => (
                  <ClientBadge key={client} name={client} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#94A3B8]/60 text-xs mt-8 max-w-xl mx-auto">
          Client names are shown as professional experience references. Official case studies and
          logos can be added later where permission is available.
        </p>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="py-20 bg-[#050B18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeader
            eyebrow="How I Work"
            title="Project Delivery Method"
            titleTh="กระบวนการส่งมอบโครงการ"
            subtitle="A structured consultative approach from business need to post-launch support."
            subtitleTh="จากความต้องการทางธุรกิจ สู่การวิเคราะห์ ออกแบบระบบ ประสานทีมพัฒนา ทดสอบ ส่งมอบ และปรับปรุงหลังใช้งานจริง"
            align="center"
          />
        </div>

        {/* Desktop horizontal flow */}
        <div className="hidden lg:flex items-start gap-0 overflow-x-auto pb-4">
          {processSteps.map((step, index) => (
            <div key={step.step} className="flex items-start flex-shrink-0">
              <div className="flex flex-col items-center gap-2 px-4 py-3 w-36">
                {/* Step circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                    step.highlight
                      ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]'
                      : 'border-[#38BDF8] bg-[#38BDF8]/10 text-[#38BDF8]'
                  }`}
                >
                  {step.step}
                </div>
                <div className="text-center">
                  <p className="text-[#F8FAFC] text-xs font-semibold leading-tight">{step.en}</p>
                  <p className="text-[#94A3B8] text-xs mt-0.5 leading-tight">{step.th}</p>
                </div>
              </div>
              {index < processSteps.length - 1 && (
                <div className="flex items-center mt-5">
                  <ChevronRight className="w-5 h-5 text-[#38BDF8]/40 flex-shrink-0" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#38BDF8]/60 via-[#1F2937] to-transparent" />
          <div className="flex flex-col gap-5">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6 pl-14 relative">
                <div
                  className={`absolute left-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
                    step.highlight
                      ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]'
                      : 'border-[#38BDF8] bg-[#38BDF8]/10 text-[#38BDF8]'
                  }`}
                >
                  {step.step}
                </div>
                <div className="card p-3 flex-1">
                  <p className="text-[#F8FAFC] text-sm font-semibold">{step.en}</p>
                  <p className="text-[#94A3B8] text-xs mt-0.5">{step.th}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ResumePreviewSection() {
  return (
    <section className="py-20 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader
              eyebrow="Resume Summary"
              title="Professional Overview"
              titleTh="ภาพรวมวิชาชีพ"
              align="left"
            />
            <div className="mt-8 flex flex-col gap-3">
              {[
                'IT Project Manager with 20+ years of progressive experience',
                'End-to-end project delivery from requirement to post-launch',
                'Consultative approach: business need → system requirement → delivery',
                'Team coordination up to 5 technical members',
                '14+ enterprise and corporate clients across Thailand',
                'Founder / CEO of Neonex Technologies Co., Ltd.',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-2 flex-shrink-0" />
                  <p className="text-[#CBD5E1] text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-elevated rounded-xl p-6 flex flex-col gap-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-[#F8FAFC] font-bold text-lg">Download Resume</h3>
                <p className="text-[#94A3B8] text-sm mt-0.5">
                  Available for HR review, recruitment screening, and professional reference.
                </p>
                <p className="text-[#94A3B8] text-xs mt-1">
                  มีไฟล์ PDF และ DOCX สำหรับ HR ใช้ตรวจสอบประวัติ พิจารณางาน และใช้อ้างอิงทางวิชาชีพ
                </p>
              </div>
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 flex-shrink-0">
                Updated 2025
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {/* PDF download — add file to /public/downloads/chonvarin-resume.pdf */}
              <a
                href="/downloads/chonvarin-resume.pdf"
                download
                className="btn-primary w-full justify-center text-sm"
              >
                <Download className="w-4 h-4" />
                Download Resume PDF
              </a>
              {/* DOCX download — add file to /public/downloads/chonvarin-resume.docx */}
              <a
                href="/downloads/chonvarin-resume.docx"
                download
                className="btn-secondary w-full justify-center text-sm"
              >
                <Download className="w-4 h-4" />
                Download Resume DOCX
              </a>
              <Link to="/resume" className="btn-ghost w-full justify-center text-sm">
                <FileText className="w-4 h-4" />
                View Online Resume
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <SnapshotSection />
      <SummarySection />
      <ServicesPreviewSection />
      <PortfolioPreviewSection />
      <ClientsSection />
      <ProcessSection />
      <ResumePreviewSection />
      <ContactCTA />
    </>
  )
}
