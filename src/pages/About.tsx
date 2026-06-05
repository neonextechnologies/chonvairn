import SectionHeader from '../components/SectionHeader'
import Timeline from '../components/Timeline'
import ContactCTA from '../components/ContactCTA'
import { experiences, education } from '../data/resume'
import { Building2, Target, Layers, Users, ChartBar as BarChart3, Bot, FileCheck, Headphones, GraduationCap } from 'lucide-react'

const philosophy = [
  { icon: Target, title: 'Practical System Delivery', desc: 'Focus on delivering systems that business users can actually use, not just technically completed projects.' },
  { icon: Layers, title: 'Business-Technology Alignment', desc: 'Every technical decision must connect back to a real business need and measurable outcome.' },
  { icon: FileCheck, title: 'Clear Requirement Analysis', desc: 'Invest time upfront to understand the real problem before designing or building any solution.' },
  { icon: BarChart3, title: 'Workflow-First Thinking', desc: 'Design the workflow before selecting the technology, not the other way around.' },
  { icon: Headphones, title: 'Long-term Support Mindset', desc: 'A system is only valuable if it continues to work and improve after initial delivery.' },
  { icon: Bot, title: 'AI-enabled Productivity', desc: 'Leverage AI tools and automation to reduce repetitive work and accelerate practical delivery.' },
  { icon: FileCheck, title: 'Professional Documentation', desc: 'Clear documentation reduces misunderstandings, supports UAT, and enables long-term maintenance.' },
  { icon: Users, title: 'UAT & Post-launch Support', desc: 'Delivery does not end at launch. Support through UAT and post-launch improvement is essential.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-[#050B18]">
        <div className="absolute inset-0 bg-grid-fine opacity-60" />
        <div className="absolute inset-0 hero-radial" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="eyebrow">About</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mt-4 leading-tight tracking-tight">
              Business Understanding
              <br />
              <span className="text-gradient-cyan">meets Technical Delivery</span>
            </h1>
            <div className="flex items-center gap-2 mt-5">
              <div className="w-10 h-0.5 bg-[#38BDF8] rounded-full" />
              <div className="w-3 h-0.5 bg-[#D4AF37] rounded-full" />
            </div>
            <p className="text-[#CBD5E1] text-base leading-[1.85] mt-6">
              Chonvarin combines more than 20 years of progressive IT experience with a consultative approach
              that bridges business operations, technical teams, workflow design, and practical system
              implementation. From IT support to developer to co-founder to IT Project Manager and
              Founder / CEO — every stage of this career has been built on understanding both the business
              side and the technology side, and connecting the two.
            </p>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-24" style={{ background: 'linear-gradient(180deg, #0A1525 0%, #050B18 100%)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mb-12">
            <SectionHeader
              eyebrow="Career Journey"
              title="Professional Timeline"
              titleTh="เส้นทางอาชีพ"
              subtitle="A progressive IT career from IT Support to IT Project Manager to Founder / CEO."
              align="left"
            />
          </div>
          <Timeline items={experiences} />
        </div>
      </section>

      {/* Working Philosophy */}
      <section className="py-24 bg-[#050B18]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mb-12">
            <SectionHeader
              eyebrow="Working Philosophy"
              title="Principles That Guide Delivery"
              titleTh="หลักการทำงาน"
              align="center"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {philosophy.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title}
                  className="group rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 hover:border-[#38BDF8]/20 hover:-translate-y-0.5"
                  style={{ background: '#0D1625', border: '1px solid #1A2535' }}>
                  <div className="icon-box group-hover:bg-[#38BDF8]/12 group-hover:border-[#38BDF8]/25 transition-colors">
                    <Icon className="w-4 h-4 text-[#38BDF8]" />
                  </div>
                  <div className="w-5 h-px bg-gradient-to-r from-[#D4AF37]/60 to-transparent rounded-full" />
                  <h3 className="text-[#CBD5E1] font-semibold text-sm">{item.title}</h3>
                  <p className="text-[#94A3B8] text-xs leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24" style={{ background: 'linear-gradient(180deg, #0A1525 0%, #050B18 100%)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mb-12">
            <SectionHeader eyebrow="Education" title="Academic Background" titleTh="ประวัติการศึกษา" align="left" />
          </div>
          <div className="flex flex-col gap-4 max-w-3xl">
            {education.map((edu) => (
              <div key={edu.id}
                className="rounded-2xl p-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3"
                style={{ background: '#0D1625', border: '1px solid #1A2535' }}>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <GraduationCap className="w-4 h-4 text-[#38BDF8]" />
                    <h3 className="text-[#F8FAFC] font-semibold text-base">{edu.degree}</h3>
                    {edu.status === 'candidate' && <span className="badge-cyan">In Progress</span>}
                    {edu.status === 'completed' && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/8 text-emerald-400 border border-emerald-500/15">
                        Completed
                      </span>
                    )}
                  </div>
                  <p className="text-[#38BDF8] text-sm">{edu.field}</p>
                  {edu.fieldTh && <p className="text-[#94A3B8] text-xs">{edu.fieldTh}</p>}
                  {edu.institution && (
                    <p className="text-[#CBD5E1] text-sm mt-0.5">
                      {edu.institution}
                      {edu.institutionTh && <span className="text-[#94A3B8] ml-2">({edu.institutionTh})</span>}
                    </p>
                  )}
                </div>
                <span className="text-[#94A3B8] text-sm whitespace-nowrap flex-shrink-0">{edu.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-24 bg-[#050B18]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <div
              className="relative overflow-hidden rounded-2xl p-8 md:p-10"
              style={{ background: '#0A1020', border: '1px solid rgba(212,175,55,0.15)' }}
            >
              {/* Gold glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)' }}
              />
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.4), rgba(212,175,55,0.1), transparent)' }}
              />

              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.12em] uppercase">
                    Founder Profile
                  </span>
                </div>
                <div className="w-8 h-px bg-gradient-to-r from-[#D4AF37]/70 to-transparent mb-5" />
                <h2 className="text-[#F8FAFC] font-bold text-2xl md:text-3xl mb-1.5">
                  Neonex Technologies Co., Ltd.
                </h2>
                <p className="text-[#38BDF8] text-sm mb-5">Founder / CEO · 2025 – Present</p>
                <p className="text-[#CBD5E1] text-base leading-[1.85] mb-4">
                  Chonvarin founded Neonex Technologies to provide practical IT solutions, digital
                  transformation services, workflow automation, hosting infrastructure, and AI-enabled
                  business systems for SME and enterprise clients. The company builds on 20+ years of
                  project delivery experience, combining consultative advisory with hands-on technical capability.
                </p>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  ชนม์วรินทร์ก่อตั้ง Neonex Technologies เพื่อให้บริการ IT Solution, Digital Transformation,
                  Workflow Automation, Hosting Infrastructure และ AI-enabled Business System
                  สำหรับลูกค้า SME และองค์กร โดยต่อยอดจากประสบการณ์การส่งมอบโครงการมากกว่า 20 ปี
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
