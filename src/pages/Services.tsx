import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[#050B18] overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#38BDF8]/5 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#38BDF8] text-sm font-semibold tracking-widest uppercase">Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mt-3 leading-tight">
              Practical IT Solutions
              <br />
              <span className="text-gradient-cyan">for Business Outcomes</span>
            </h1>
            <div className="flex gap-2 mt-4">
              <div className="w-8 h-0.5 bg-[#38BDF8] rounded-full" />
              <div className="w-3 h-0.5 bg-[#D4AF37] rounded-full" />
            </div>
            <p className="text-[#CBD5E1] text-base leading-relaxed mt-6">
              End-to-end IT project management, digital transformation consulting, workflow automation,
              web application development, infrastructure advisory, and AI-enabled business solutions —
              delivered with a consultative approach that bridges business operations and technical teams.
            </p>
            <p className="text-[#94A3B8] text-sm mt-3">
              บริการครบวงจรตั้งแต่การจัดการโครงการ IT, ที่ปรึกษา Digital Transformation, Workflow Automation,
              พัฒนา Web Application, ให้คำปรึกษาด้าน Infrastructure และ AI-enabled Business Solution
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#0B1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionHeader
              eyebrow="Core Services"
              title="What I Offer"
              titleTh="บริการหลัก"
              align="center"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                titleTh={service.titleTh}
                description={service.description}
                bullets={service.bullets}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Approach */}
      <section className="py-20 bg-[#050B18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              eyebrow="Approach"
              title="Consultative Delivery"
              titleTh="แนวทางการทำงานแบบ Consultative"
              subtitle="Every engagement starts with understanding the business before designing any solution."
              align="center"
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Understand',
                  desc: 'Analyze business processes, pain points, and requirements before proposing any technical solution.',
                },
                {
                  step: '02',
                  title: 'Design',
                  desc: 'Design workflows, solution architecture, and system specifications that align with real business needs.',
                },
                {
                  step: '03',
                  title: 'Deliver',
                  desc: 'Coordinate development, support UAT, manage deployment, and provide post-launch improvement.',
                },
              ].map((item) => (
                <div key={item.step} className="card text-center flex flex-col items-center gap-3">
                  <span className="text-3xl font-bold text-[#38BDF8]/30">{item.step}</span>
                  <div className="w-5 h-0.5 bg-[#D4AF37] rounded-full" />
                  <h3 className="text-[#F8FAFC] font-semibold">{item.title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-20 bg-[#0B1220]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-5">
            <div className="w-8 h-0.5 bg-[#D4AF37] rounded-full" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-3">
            Let's turn your business requirements into a practical digital solution.
          </h2>
          <p className="text-[#94A3B8] text-base mb-8 max-w-xl mx-auto">
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
