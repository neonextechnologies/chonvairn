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
        <div className="absolute inset-0 bg-grid-fine opacity-60" />
        <div className="absolute inset-0 hero-radial" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="eyebrow">Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mt-4 leading-tight tracking-tight">
              Practical IT Solutions
              <br />
              <span className="text-gradient-cyan">for Business Outcomes</span>
            </h1>
            <div className="flex items-center gap-2 mt-5">
              <div className="w-10 h-0.5 bg-[#38BDF8] rounded-full" />
              <div className="w-3 h-0.5 bg-[#D4AF37] rounded-full" />
            </div>
            <p className="text-[#CBD5E1] text-base leading-[1.85] mt-6">
              End-to-end IT project management, digital transformation consulting, workflow
              automation, web application development, infrastructure advisory, and AI-enabled
              business solutions — delivered with a consultative approach that bridges business
              operations and technical teams.
            </p>
            <p className="text-[#94A3B8] text-sm leading-relaxed mt-3">
              บริการครบวงจรด้าน IT Project Management, Digital Transformation, Workflow Automation,
              Web Application, Infrastructure Advisory และ AI-enabled Business Solution
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24" style={{ background: 'linear-gradient(180deg, #0A1525 0%, #050B18 100%)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mb-14">
            <SectionHeader eyebrow="Core Services" title="What I Offer" titleTh="บริการหลัก" align="center" />
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

      {/* Delivery Approach */}
      <section className="py-24 bg-[#050B18]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mb-14">
            <SectionHeader
              eyebrow="Approach"
              title="Consultative Delivery"
              titleTh="แนวทางการทำงานแบบ Consultative"
              subtitle="Every engagement starts with understanding the business before designing any solution."
              align="center"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
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
              <div key={item.step}
                className="relative rounded-2xl p-6 text-center flex flex-col items-center gap-4 overflow-hidden"
                style={{ background: '#0D1625', border: '1px solid #1A2535' }}>
                {/* Glow */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)' }}
                />
                <span className="text-4xl font-bold text-[#38BDF8]/15 select-none">{item.step}</span>
                <div className="w-5 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
                <h3 className="text-[#CBD5E1] font-semibold text-base">{item.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-[#1A2535]"
        style={{ background: 'linear-gradient(180deg, #0A1525 0%, #050B18 100%)' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <div className="flex justify-center mb-5">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-3 tracking-tight">
            Let's turn your business requirements into a practical digital solution.
          </h2>
          <p className="text-[#94A3B8] text-sm mb-8">
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
