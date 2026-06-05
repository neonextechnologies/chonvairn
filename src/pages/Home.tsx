import { Link } from 'react-router-dom'
import {
  ArrowRight,
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

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[#050B18]" />
      <div className="absolute inset-0 bg-grid-fine" />
      <div className="absolute inset-0 hero-radial" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Text ── */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-[#38BDF8]/60 rounded-full" />
              <span className="text-[#38BDF8] text-xs font-semibold tracking-[0.18em] uppercase">
                Senior IT Project Manager · Digital Transformation Consultant
              </span>
            </div>

            {/* Name */}
            <div className="flex flex-col gap-3">
              <h1 className="text-5xl md:text-[3.5rem] font-bold tracking-tight leading-[1.05]">
                <span className="text-[#F8FAFC]">Chonvarin</span>
                <br />
                <span className="text-gradient-cyan">Methachotwatcharakul</span>
              </h1>
              <p className="text-[#475569] text-base">ชนม์วรินทร์ เมธาโชติวัชรากุล</p>
            </div>

            {/* Statement */}
            <p className="text-[#94A3B8] text-lg leading-[1.75] max-w-lg">
              20+ years delivering end-to-end IT projects — from business requirement analysis
              to workflow design, technical team coordination, and post-launch improvement.
            </p>

            {/* Divider */}
            <div className="w-12 h-px bg-gradient-to-r from-[#D4AF37]/60 to-transparent" />

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
              <Link to="/contact" className="btn-ghost">
                <Mail className="w-4 h-4" />
                Contact Me
              </Link>
            </div>
          </div>

          {/* ── Profile photo ── */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Outer ambient glow */}
              <div
                className="absolute -inset-10 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)',
                }}
              />

              {/* Border ring */}
              <div
                className="absolute -inset-[3px] rounded-full pointer-events-none"
                style={{
                  background: 'conic-gradient(from 180deg, rgba(56,189,248,0.35) 0%, transparent 35%, rgba(212,175,55,0.25) 55%, transparent 75%, rgba(56,189,248,0.2) 100%)',
                }}
              />
              <div className="absolute -inset-[2px] rounded-full bg-[#050B18]" />

              {/* Photo */}
              <div
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden"
                style={{ border: '1px solid rgba(56,189,248,0.12)' }}
              >
                <img
                  src="/images/chonvarin-profile.jpg"
                  alt="Chonvarin Methachotwatcharakul — IT Project Manager"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const el = e.currentTarget
                    el.style.display = 'none'
                    if (el.parentElement) {
                      el.parentElement.style.background = 'linear-gradient(135deg, #0F172A 0%, #0B1220 100%)'
                    }
                  }}
                />
              </div>

              {/* Badge — bottom right */}
              <div
                className="absolute -bottom-2 -right-3 rounded-xl px-4 py-2.5"
                style={{
                  background: '#0A1525',
                  border: '1px solid rgba(56,189,248,0.18)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                }}
              >
                <p className="text-[#38BDF8] text-sm font-bold leading-none">20+ Years</p>
                <p className="text-[#64748B] text-xs mt-0.5">IT Experience</p>
              </div>

              {/* Badge — top left */}
              <div
                className="absolute -top-2 -left-5 rounded-xl px-4 py-2.5"
                style={{
                  background: '#0A1020',
                  border: '1px solid rgba(212,175,55,0.15)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                }}
              >
                <p className="text-[#D4AF37] text-xs font-semibold leading-none">IT Project Manager</p>
                <p className="text-[#64748B] text-xs mt-0.5">Digital Transformation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050B18] to-transparent pointer-events-none" />
    </section>
  )
}

/* ─── Stats Snapshot ─── */
function SnapshotSection() {
  return (
    <section className="py-12 bg-[#050B18]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{ background: '#0A1020', border: '1px solid #1A2535' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
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
      </div>
    </section>
  )
}

/* ─── Professional Summary ─── */
function SummarySection() {
  return (
    <section className="py-24 bg-[#050B18]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <span className="eyebrow">Professional Profile</span>
            <h2 className="text-[#F8FAFC] font-bold text-2xl md:text-3xl mt-4 leading-tight tracking-tight">
              Business-aligned<br />IT Delivery
            </h2>
            <div className="w-8 h-px bg-gradient-to-r from-[#D4AF37]/60 to-transparent mt-5" />
          </div>
          <div className="lg:col-span-3 flex flex-col gap-5">
            <p className="text-[#CBD5E1] text-base leading-[1.85]">
              Chonvarin is an IT Project Manager and Digital Transformation Consultant with more
              than 20 years of progressive experience. His approach is consistently consultative:
              understand the business context first, then design workflows, coordinate technical
              teams, and deliver systems that people actually use.
            </p>
            <p className="text-[#94A3B8] text-sm leading-[1.85]">
              From large enterprises — SCG, Tesco Lotus, Thai Honda, Thanachart Bank — to SME
              clients, the core principle remains the same: reduce the gap between business
              requirements and practical technology delivery.
            </p>
            <div className="flex gap-3 pt-2">
              <Link to="/about" className="btn-secondary text-sm">
                Full Profile
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/resume" className="btn-ghost text-sm">
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Services Preview ─── */
function ServicesPreviewSection() {
  return (
    <section
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #0A1525 0%, #070F1E 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-14">
          <SectionHeader
            eyebrow="Capabilities"
            title="Services & Expertise"
            titleTh="บริการและความเชี่ยวชาญ"
            subtitle="Consultative IT project delivery, digital transformation advisory, workflow automation, and AI-enabled business solutions."
            align="center"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.slice(0, 4).map((service, i) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              titleTh={service.titleTh}
              description={service.description}
              index={i}
              compact
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/services" className="btn-secondary">
            All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Portfolio Preview ─── */
function PortfolioPreviewSection() {
  const featured = projects.filter((p) => p.featured).slice(0, 4)
  return (
    <section className="py-24 bg-[#050B18]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-14">
          <SectionHeader
            eyebrow="Selected Work"
            title="Case Studies"
            titleTh="ตัวอย่างผลงานและโครงการ"
            subtitle="IT solutions across CRM, CMS, admin system generation, web application development, and digital transformation."
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

/* ─── Clients ─── */
function ClientsSection() {
  return (
    <section
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #0A1525 0%, #070F1E 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-14">
          <SectionHeader
            eyebrow="Enterprise Experience"
            title="Client Industries"
            titleTh="ประสบการณ์กับลูกค้าองค์กร"
            subtitle="Professional IT project delivery experience across multiple industries in Thailand."
            align="center"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {clientGroups.map((group) => (
            <div
              key={group.group}
              className="rounded-2xl p-5"
              style={{ background: '#0A1020', border: '1px solid #1A2535' }}
            >
              <p className="text-[#475569] text-[10px] font-semibold tracking-[0.12em] uppercase mb-3">
                {group.group}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.clients.map((client) => (
                  <ClientBadge key={client} name={client} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[#334155] text-xs mt-8 max-w-xl mx-auto">
          Client names shown as professional experience references.
        </p>
      </div>
    </section>
  )
}

/* ─── Process ─── */
function ProcessSection() {
  return (
    <section className="py-24 bg-[#050B18]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-14">
          <SectionHeader
            eyebrow="Delivery Method"
            title="How I Work"
            titleTh="กระบวนการส่งมอบโครงการ"
            subtitle="A structured consultative approach from business need to post-launch support."
            align="center"
          />
        </div>

        {/* Desktop horizontal */}
        <div className="hidden lg:flex items-center justify-between pb-2 gap-1">
          {processSteps.map((step, index) => (
            <div key={step.step} className="flex items-center flex-shrink-0">
              <div
                className={`flex flex-col items-center gap-2.5 px-3 py-4 rounded-2xl w-[110px] transition-all duration-200 hover:-translate-y-0.5 ${
                  step.highlight
                    ? 'bg-[#D4AF37]/5 border border-[#D4AF37]/12'
                    : 'bg-[#0A1525] border border-[#1A2535]'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold ${
                    step.highlight
                      ? 'bg-[#D4AF37]/8 text-[#D4AF37] border border-[#D4AF37]/20'
                      : 'bg-[#38BDF8]/6 text-[#38BDF8] border border-[#38BDF8]/12'
                  }`}
                >
                  {step.step}
                </div>
                <div className="text-center">
                  <p className="text-[#CBD5E1] text-xs font-semibold leading-tight">{step.en}</p>
                  <p className="text-[#475569] text-[10px] mt-0.5 leading-tight">{step.th}</p>
                </div>
              </div>
              {index < processSteps.length - 1 && (
                <ChevronRight className="w-4 h-4 text-[#1E3148] mx-0.5 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="lg:hidden relative">
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, rgba(56,189,248,0.3), rgba(56,189,248,0.03))' }}
          />
          <div className="flex flex-col gap-3">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6 pl-14 relative">
                <div
                  className={`absolute left-2.5 w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                    step.highlight
                      ? 'bg-[#D4AF37]/8 text-[#D4AF37] border border-[#D4AF37]/20'
                      : 'bg-[#38BDF8]/6 text-[#38BDF8] border border-[#38BDF8]/12'
                  }`}
                >
                  {step.step}
                </div>
                <div className="rounded-xl p-3.5 flex-1" style={{ background: '#0A1525', border: '1px solid #1A2535' }}>
                  <p className="text-[#CBD5E1] text-sm font-semibold">{step.en}</p>
                  <p className="text-[#475569] text-xs mt-0.5">{step.th}</p>
                </div>
              </div>
            ))}
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
      <ContactCTA />
    </>
  )
}
