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
    <section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
      {/* Layered dark background */}
      <div className="absolute inset-0 bg-[#050B18]" />
      <div className="absolute inset-0 bg-grid-fine" />
      <div className="absolute inset-0 hero-radial" />

      {/* Ambient side glows */}
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.04) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(14,165,233,0.03) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Text ── */}
          <div className="flex flex-col gap-7 order-2 lg:order-1">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#38BDF8]/70 rounded-full" />
              <span className="eyebrow">Professional Profile · chonvarin.com</span>
            </div>

            {/* Name */}
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                <span className="text-[#F8FAFC]">Chonvarin</span>
                <br />
                <span className="text-gradient-cyan">Methachotwatcharakul</span>
              </h1>
              <p className="text-[#94A3B8] text-lg">ชนม์วรินทร์ เมธาโชติวัชรากุล</p>
            </div>

            {/* Position pills */}
            <div className="flex flex-wrap gap-2">
              {[
                'IT Project Manager',
                'Digital Transformation',
                'AI-enabled IT Solution',
                'Workflow Automation',
              ].map((tag) => (
                <span key={tag} className="badge-muted text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>

            {/* Statement */}
            <div
              className="rounded-xl p-5"
              style={{
                background: 'linear-gradient(135deg, rgba(56,189,248,0.05) 0%, rgba(56,189,248,0.02) 100%)',
                border: '1px solid rgba(56,189,248,0.1)',
              }}
            >
              <p className="text-[#CBD5E1] text-base font-medium leading-relaxed">
                "Bridging business needs, technology, workflow, and practical project delivery."
              </p>
              <p className="text-[#94A3B8] text-sm mt-2 leading-relaxed">
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
              <Link to="/contact" className="btn-ghost">
                <Mail className="w-4 h-4" />
                Contact Me
              </Link>
            </div>

            {/* Audience CTA groups */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t"
              style={{ borderColor: 'rgba(56,189,248,0.08)' }}
            >
              <div className="flex flex-col gap-2">
                <p className="eyebrow text-[10px]">For HR / Recruiters</p>
                <div className="flex flex-wrap gap-2">
                  <Link to="/resume" className="btn-ghost text-xs py-2 px-3">
                    <FileText className="w-3 h-3" /> View Resume
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="eyebrow text-[10px]">For Business Clients</p>
                <div className="flex flex-wrap gap-2">
                  <Link to="/portfolio" className="btn-ghost text-xs py-2 px-3">
                    <Briefcase className="w-3 h-3" /> Portfolio
                  </Link>
                  <Link to="/contact" className="btn-ghost text-xs py-2 px-3">
                    <Mail className="w-3 h-3" /> Discuss
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── Profile photo ── */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Outer ambient glow */}
              <div
                className="absolute -inset-8 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)',
                }}
              />

              {/* Rotating border ring */}
              <div
                className="absolute -inset-2 rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, rgba(56,189,248,0.4) 0%, transparent 40%, rgba(212,175,55,0.3) 60%, transparent 80%, rgba(56,189,248,0.2) 100%)',
                  borderRadius: '50%',
                }}
              />

              {/* Inner dark ring */}
              <div className="absolute -inset-1 rounded-full bg-[#050B18]" />

              {/* Photo container */}
              <div
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden"
                style={{ border: '2px solid rgba(56,189,248,0.15)' }}
              >
                <img
                  src="/images/chonvarin-profile.jpg"
                  alt="Chonvarin Methachotwatcharakul — IT Project Manager"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const el = e.currentTarget
                    el.style.display = 'none'
                    if (el.parentElement) {
                      el.parentElement.style.background =
                        'linear-gradient(135deg, #0F172A 0%, #0B1220 100%)'
                    }
                  }}
                />
              </div>

              {/* Floating badge — bottom right */}
              <div
                className="absolute -bottom-1 -right-2 rounded-xl px-4 py-2.5"
                style={{
                  background: '#0A1525',
                  border: '1px solid rgba(56,189,248,0.2)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.6)',
                }}
              >
                <p className="text-[#38BDF8] text-sm font-bold leading-none">20+ Years</p>
                <p className="text-[#94A3B8] text-xs mt-0.5">IT Experience</p>
              </div>

              {/* Floating badge — top left */}
              <div
                className="absolute -top-1 -left-4 rounded-xl px-4 py-2.5"
                style={{
                  background: '#0A1020',
                  border: '1px solid rgba(212,175,55,0.18)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.6)',
                }}
              >
                <p className="text-[#D4AF37] text-xs font-bold leading-none">IT Project Manager</p>
                <p className="text-[#94A3B8] text-xs mt-0.5">Digital Transformation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050B18] to-transparent pointer-events-none" />
    </section>
  )
}

/* ─── Stats Snapshot ─── */
function SnapshotSection() {
  return (
    <section
      className="py-10 relative"
      style={{ background: 'linear-gradient(180deg, #050B18 0%, #0A1525 100%)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(56,189,248,0.12), transparent)',
        }}
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
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
    </section>
  )
}

/* ─── Professional Summary ─── */
function SummarySection() {
  return (
    <section className="py-24 bg-[#050B18]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
          <div className="lg:col-span-2">
            <SectionHeader
              eyebrow="Professional Summary"
              title="Delivering Practical IT Solutions"
              titleTh="ส่งมอบ IT Solution ที่ใช้งานได้จริง"
              align="left"
            />
          </div>
          <div className="lg:col-span-3 flex flex-col gap-5">
            <p className="text-[#CBD5E1] text-base leading-[1.8]">
              Chonvarin is an IT Project Manager and AI-enabled IT Solution Specialist with more than
              20 years of experience across IT support, software development, web applications, custom
              business applications, IT infrastructure, hosting environments, and digital transformation.
              His strength is consultative project delivery: analyzing business needs, translating them
              into system requirements, designing workflows and solutions, coordinating technical teams,
              and delivering practical systems that reduce the gap between business users and technical teams.
            </p>
            <div
              className="rounded-xl p-5"
              style={{
                background: 'rgba(56,189,248,0.03)',
                borderLeft: '2px solid rgba(56,189,248,0.3)',
                paddingLeft: '20px',
              }}
            >
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                ชนม์วรินทร์เป็นผู้จัดการโครงการ IT และผู้เชี่ยวชาญด้าน AI-enabled IT Solution
                ที่มีประสบการณ์มากกว่า 20 ปี ครอบคลุมงาน IT Support, Software Development, Web Application,
                Custom Business Application, IT Infrastructure, Hosting Environment และ Digital Transformation
                จุดแข็งคือการทำงานแบบ Consultative Project Delivery
              </p>
            </div>
            <div className="flex gap-3 pt-2">
              <Link to="/about" className="btn-secondary text-sm">
                Full Profile
                <ArrowRight className="w-4 h-4" />
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
            eyebrow="What I Do"
            title="Services & Expertise"
            titleTh="บริการและความเชี่ยวชาญ"
            subtitle="End-to-end IT project delivery, digital transformation consulting, workflow automation, and AI-enabled business solutions."
            align="center"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
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
            View All Services
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
            subtitle="Professional experience references across multiple industries in Thailand."
            align="center"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {clientGroups.map((group) => (
            <div
              key={group.group}
              className="rounded-2xl p-5"
              style={{
                background: '#0A1020',
                border: '1px solid rgba(56,189,248,0.08)',
              }}
            >
              <p className="eyebrow text-[10px] mb-3">{group.group}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.clients.map((client) => (
                  <ClientBadge key={client} name={client} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-[#94A3B8]/40 text-xs mt-8 max-w-xl mx-auto">
          Client names shown as professional experience references. Case studies and logos can be
          added later where permission is available.
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
            eyebrow="How I Work"
            title="Project Delivery Method"
            titleTh="กระบวนการส่งมอบโครงการ"
            subtitle="A structured consultative approach from business need to post-launch support."
            subtitleTh="จากความต้องการทางธุรกิจ สู่การวิเคราะห์ ออกแบบระบบ ประสานทีมพัฒนา ทดสอบ ส่งมอบ และปรับปรุงหลังใช้งานจริง"
            align="center"
          />
        </div>

        {/* Desktop horizontal */}
        <div className="hidden lg:flex items-center justify-between overflow-x-auto pb-2 gap-1">
          {processSteps.map((step, index) => (
            <div key={step.step} className="flex items-center flex-shrink-0">
              <div
                className={`flex flex-col items-center gap-2.5 px-3 py-4 rounded-2xl w-[110px] transition-all duration-200 hover:-translate-y-0.5 ${
                  step.highlight
                    ? 'bg-[#D4AF37]/5 border border-[#D4AF37]/15'
                    : 'bg-[#0A1525] border border-[#1A2535]'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold ${
                    step.highlight
                      ? 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/25'
                      : 'bg-[#38BDF8]/8 text-[#38BDF8] border border-[#38BDF8]/15'
                  }`}
                >
                  {step.step}
                </div>
                <div className="text-center">
                  <p className="text-[#CBD5E1] text-xs font-semibold leading-tight">{step.en}</p>
                  <p className="text-[#94A3B8] text-[10px] mt-0.5 leading-tight">{step.th}</p>
                </div>
              </div>
              {index < processSteps.length - 1 && (
                <ChevronRight className="w-4 h-4 text-[#38BDF8]/20 mx-0.5 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="lg:hidden relative">
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{
              background: 'linear-gradient(180deg, rgba(56,189,248,0.5), rgba(56,189,248,0.05))',
            }}
          />
          <div className="flex flex-col gap-4">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6 pl-14 relative">
                <div
                  className={`absolute left-2.5 w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                    step.highlight
                      ? 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/25'
                      : 'bg-[#38BDF8]/8 text-[#38BDF8] border border-[#38BDF8]/15'
                  }`}
                >
                  {step.step}
                </div>
                <div className="card-hover rounded-xl p-3.5 flex-1">
                  <p className="text-[#CBD5E1] text-sm font-semibold">{step.en}</p>
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
