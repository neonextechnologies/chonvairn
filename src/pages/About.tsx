import SectionHeader from '../components/SectionHeader'
import Timeline from '../components/Timeline'
import ContactCTA from '../components/ContactCTA'
import { experiences, education } from '../data/resume'
import { Building2, Target, Layers, Users, ChartBar as BarChart3, Bot, FileCheck, Headphones as HeadphonesIcon } from 'lucide-react'

const philosophy = [
  { icon: Target, title: 'Practical System Delivery', desc: 'Focus on delivering systems that business users can actually use, not just technically completed projects.' },
  { icon: Layers, title: 'Business-Technology Alignment', desc: 'Every technical decision must connect back to a real business need and measurable outcome.' },
  { icon: FileCheck, title: 'Clear Requirement Analysis', desc: 'Invest time upfront to understand the real problem before designing or building any solution.' },
  { icon: BarChart3, title: 'Workflow-First Thinking', desc: 'Design the workflow before selecting the technology, not the other way around.' },
  { icon: HeadphonesIcon, title: 'Long-term Support Mindset', desc: 'A system is only valuable if it continues to work and improve after initial delivery.' },
  { icon: Bot, title: 'AI-enabled Productivity', desc: 'Leverage AI tools and automation to reduce repetitive work and accelerate practical delivery.' },
  { icon: FileCheck, title: 'Professional Documentation', desc: 'Clear documentation reduces misunderstandings, supports UAT, and enables long-term maintenance.' },
  { icon: Users, title: 'UAT & Post-launch Support', desc: 'Delivery does not end at launch. Support through UAT and post-launch improvement is essential.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-[#050B18]">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#38BDF8]/5 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#38BDF8] text-sm font-semibold tracking-widest uppercase">About</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mt-3 leading-tight">
              Business Understanding
              <br />
              <span className="text-gradient-cyan">meets Technical Delivery</span>
            </h1>
            <div className="flex gap-2 mt-4">
              <div className="w-8 h-0.5 bg-[#38BDF8] rounded-full" />
              <div className="w-3 h-0.5 bg-[#D4AF37] rounded-full" />
            </div>
            <p className="text-[#CBD5E1] text-base leading-relaxed mt-6">
              Chonvarin combines more than 20 years of progressive IT experience with a consultative approach
              that bridges business operations, technical teams, workflow design, and practical system
              implementation. From IT support to developer to co-founder to IT Project Manager and Founder /
              CEO, every stage of this career has been built on understanding both the business side and the
              technology side — and connecting the two.
            </p>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-[#0B1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeader
              eyebrow="Career Journey"
              title="Professional Timeline"
              titleTh="เส้นทางอาชีพ"
              subtitle="A progressive IT career spanning 25 years, from IT Support to IT Project Manager to Founder / CEO."
              align="left"
            />
          </div>
          <Timeline items={experiences} />
        </div>
      </section>

      {/* Working Philosophy */}
      <section className="py-20 bg-[#050B18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div key={item.title} className="card card-glow-hover flex flex-col gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#38BDF8]" />
                  </div>
                  <div className="w-5 h-0.5 bg-[#D4AF37] rounded-full" />
                  <h3 className="text-[#F8FAFC] font-semibold text-sm">{item.title}</h3>
                  <p className="text-[#94A3B8] text-xs leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-[#0B1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeader
              eyebrow="Education"
              title="Academic Background"
              titleTh="ประวัติการศึกษา"
              align="left"
            />
          </div>
          <div className="flex flex-col gap-5 max-w-3xl">
            {education.map((edu) => (
              <div key={edu.id} className="card flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-[#F8FAFC] font-semibold text-base">{edu.degree}</h3>
                    {edu.status === 'candidate' && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20">
                        In Progress
                      </span>
                    )}
                    {edu.status === 'completed' && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Completed
                      </span>
                    )}
                  </div>
                  <p className="text-[#38BDF8] text-sm">{edu.field}</p>
                  {edu.fieldTh && <p className="text-[#94A3B8] text-xs">{edu.fieldTh}</p>}
                  {edu.institution && (
                    <p className="text-[#CBD5E1] text-sm mt-1">
                      {edu.institution}
                      {edu.institutionTh && (
                        <span className="text-[#94A3B8] ml-2">({edu.institutionTh})</span>
                      )}
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
      <section className="py-20 bg-[#050B18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="card-elevated rounded-2xl p-8 border border-[#D4AF37]/15 relative overflow-hidden">
              {/* Gold glow */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#D4AF37]/4 blur-2xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-[#D4AF37]" />
                  <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wider">Founder Profile</span>
                </div>
                <div className="w-8 h-0.5 bg-[#D4AF37] rounded-full mb-5" />
                <h2 className="text-[#F8FAFC] font-bold text-2xl mb-2">Neonex Technologies Co., Ltd.</h2>
                <p className="text-[#38BDF8] text-sm mb-4">Founder / CEO · 2025 – Present</p>
                <p className="text-[#CBD5E1] text-base leading-relaxed mb-4">
                  Chonvarin founded Neonex Technologies to provide practical IT solutions, digital transformation
                  services, workflow automation, hosting infrastructure, and AI-enabled business systems for SME
                  and enterprise clients. The company builds on 20+ years of project delivery experience, combining
                  consultative advisory with hands-on technical capability.
                </p>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  ชนม์วรินทร์ก่อตั้ง Neonex Technologies เพื่อให้บริการ IT Solution, Digital Transformation,
                  Workflow Automation, Hosting Infrastructure และ AI-enabled Business System
                  สำหรับลูกค้า SME และองค์กร
                  โดยต่อยอดจากประสบการณ์การส่งมอบโครงการมากกว่า 20 ปี
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
