import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

const deliveryPhases = [
  {
    step: '01',
    title: 'Understand',
    subtitle: 'Business Requirements Analysis',
    desc: 'Gather and analyze business processes, pain points, stakeholder needs, and existing system constraints before proposing any technical solution.',
    highlight: false,
  },
  {
    step: '02',
    title: 'Design',
    subtitle: 'Workflow & Solution Architecture',
    desc: 'Design workflows, system specifications, and solution architecture that directly address business needs — not generic templates.',
    highlight: false,
  },
  {
    step: '03',
    title: 'Coordinate',
    subtitle: 'Technical Team & Vendor Management',
    desc: 'Manage developers, vendors, and stakeholders through structured communication, task assignment, issue resolution, and progress tracking.',
    highlight: true,
  },
  {
    step: '04',
    title: 'Deliver',
    subtitle: 'UAT, Deployment & Post-launch',
    desc: 'Support user acceptance testing, manage deployment, address post-launch issues, and provide ongoing improvement advisory.',
    highlight: false,
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#050B18] overflow-hidden">
        <div className="absolute inset-0 bg-grid-fine opacity-50" />
        <div className="absolute inset-0 hero-radial" />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="eyebrow">Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mt-4 leading-tight tracking-tight">
              Consultative IT Delivery
              <br />
              <span className="text-gradient-cyan">for Business Outcomes</span>
            </h1>
            <div className="flex items-center gap-2 mt-6">
              <div className="w-10 h-px bg-[#38BDF8]/60 rounded-full" />
              <div className="w-4 h-px bg-[#D4AF37]/50 rounded-full" />
            </div>
            <p className="text-[#94A3B8] text-base leading-[1.85] mt-6 max-w-2xl">
              Every engagement begins with understanding the business context — not with prescribing
              a technology stack. From requirement analysis through deployment and post-launch
              improvement, the focus is on practical outcomes that reduce the gap between business
              users and technical teams.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="py-24"
        style={{ background: 'linear-gradient(180deg, #0A1525 0%, #050B18 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mb-14">
            <SectionHeader
              eyebrow="Core Capabilities"
              title="Areas of Expertise"
              titleTh="ความเชี่ยวชาญหลัก"
              align="left"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                titleTh={service.titleTh}
                description={service.description}
                bullets={service.bullets}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Phases */}
      <section className="py-24 bg-[#050B18]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mb-14">
            <SectionHeader
              eyebrow="Engagement Method"
              title="Project Delivery Phases"
              titleTh="ขั้นตอนการส่งมอบโครงการ"
              subtitle="A structured approach that ensures business alignment at every stage — not just at kick-off."
              align="left"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliveryPhases.map((phase) => (
              <div
                key={phase.step}
                className="relative rounded-2xl p-6 flex flex-col gap-4 overflow-hidden"
                style={{
                  background: phase.highlight ? 'rgba(212,175,55,0.03)' : '#0D1625',
                  border: `1px solid ${phase.highlight ? 'rgba(212,175,55,0.12)' : '#1A2535'}`,
                }}
              >
                {phase.highlight && (
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)' }}
                  />
                )}
                <div className="flex items-start justify-between">
                  <span
                    className="text-4xl font-bold select-none leading-none"
                    style={{ color: phase.highlight ? 'rgba(212,175,55,0.12)' : 'rgba(56,189,248,0.1)' }}
                  >
                    {phase.step}
                  </span>
                </div>
                <div>
                  <h3
                    className="font-bold text-base"
                    style={{ color: phase.highlight ? '#D4AF37' : '#F8FAFC' }}
                  >
                    {phase.title}
                  </h3>
                  <p
                    className="text-xs mt-0.5 font-medium"
                    style={{ color: phase.highlight ? 'rgba(212,175,55,0.6)' : '#38BDF8' }}
                  >
                    {phase.subtitle}
                  </p>
                </div>
                <p className="text-[#94A3B8] text-sm leading-relaxed flex-1">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section
        className="py-24"
        style={{ background: 'linear-gradient(180deg, #0A1525 0%, #050B18 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mb-12">
            <SectionHeader
              eyebrow="Consulting Philosophy"
              title="What Separates Delivery from Execution"
              titleTh="สิ่งที่ทำให้การส่งมอบต่างจากการแค่ทำตาม"
              align="left"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: 'Business Before Technology',
                desc: 'The right technology decision comes after understanding the business problem — not before. Requirements drive architecture.',
              },
              {
                title: 'Structured Communication',
                desc: 'Misaligned expectations between business users, developers, and vendors are the primary reason IT projects fail. Clear communication protocols prevent this.',
              },
              {
                title: 'Post-launch Accountability',
                desc: 'Delivery does not end at launch. A system is only successful when it works in production, gets adopted, and continues to improve.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ background: '#0D1625', border: '1px solid #1A2535' }}
              >
                <div className="w-6 h-px bg-gradient-to-r from-[#38BDF8]/60 to-transparent" />
                <h3 className="text-[#F8FAFC] font-semibold text-base leading-snug">{item.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 border-t border-[#0F1C2E]"
        style={{ background: '#050B18' }}
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent mx-auto mb-8" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-3 tracking-tight leading-tight">
            Let's turn your business requirements<br className="hidden md:block" /> into a practical digital solution.
          </h2>
          <p className="text-[#64748B] text-sm mb-10">
            เปลี่ยนความต้องการทางธุรกิจให้เป็นระบบดิจิทัลที่ใช้งานได้จริง
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              <MessageSquare className="w-4 h-4" />
              Request Consultation
            </Link>
            <Link to="/portfolio" className="btn-secondary">
              View Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
