import { useState } from 'react'
import { Mail, MapPin, ExternalLink, Send, CircleCheck as CheckCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const projectTypes = [
  'IT Project Management',
  'Digital Transformation',
  'Web Application',
  'Workflow Automation',
  'CRM / CMS / Admin Panel',
  'AI-enabled Business Solution',
  'Hosting / Infrastructure',
  'HR / Recruitment',
  'Other',
]

interface FormState {
  name: string
  email: string
  company: string
  projectType: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate form submission — connect to backend or email service as needed
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[#050B18] overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#38BDF8]/5 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#38BDF8] text-sm font-semibold tracking-widest uppercase">Contact</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mt-3 leading-tight">
              Let's Discuss
              <br />
              <span className="text-gradient-cyan">Practical Digital Solutions</span>
            </h1>
            <div className="flex gap-2 mt-4">
              <div className="w-8 h-0.5 bg-[#38BDF8] rounded-full" />
              <div className="w-3 h-0.5 bg-[#D4AF37] rounded-full" />
            </div>
            <p className="text-[#CBD5E1] text-base leading-relaxed mt-6">
              Whether you are looking for an IT Project Manager, a digital transformation consultant,
              or a practical technology partner — I am open to discussing suitable opportunities.
            </p>
            <p className="text-[#94A3B8] text-sm mt-3">
              พูดคุยเรื่องระบบ งานดิจิทัล เวิร์กโฟลว์ หรือโครงการ IT ของคุณ
              <br />
              ไม่ว่าจะเป็นโอกาสด้านงานประจำ ที่ปรึกษาโครงการ หรือการพัฒนาระบบสำหรับธุรกิจ
              สามารถติดต่อเพื่อพูดคุยแนวทางที่เหมาะสมได้
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 bg-[#0B1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="flex flex-col gap-8">
              <SectionHeader
                eyebrow="Get in Touch"
                title="Contact Information"
                titleTh="ช่องทางติดต่อ"
                align="left"
              />

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:me@chonvarin.com"
                  className="flex items-center gap-4 p-4 card card-glow-hover group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <p className="text-[#94A3B8] text-xs mb-0.5">Email</p>
                    <p className="text-[#F8FAFC] text-sm font-medium group-hover:text-[#38BDF8] transition-colors">
                      me@chonvarin.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.chonvarin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 card card-glow-hover group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <p className="text-[#94A3B8] text-xs mb-0.5">LinkedIn</p>
                    <p className="text-[#F8FAFC] text-sm font-medium group-hover:text-[#38BDF8] transition-colors">
                      linkedin.chonvarin.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://chonvarin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 card card-glow-hover group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <p className="text-[#94A3B8] text-xs mb-0.5">Portfolio</p>
                    <p className="text-[#F8FAFC] text-sm font-medium group-hover:text-[#38BDF8] transition-colors">
                      chonvarin.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 card">
                  <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <p className="text-[#94A3B8] text-xs mb-0.5">Location</p>
                    <p className="text-[#F8FAFC] text-sm font-medium">Pathum Thani, Thailand</p>
                  </div>
                </div>
              </div>

              {/* Response note */}
              <div className="border border-[#D4AF37]/20 bg-[#D4AF37]/5 rounded-xl p-4">
                <p className="text-[#D4AF37] text-xs font-semibold mb-1">Response Time</p>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  Messages are typically responded to within 1–2 business days. For urgent matters, email
                  is the most reliable channel.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div>
              {submitted ? (
                <div className="card-elevated rounded-2xl p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-[#F8FAFC] font-bold text-xl mb-2">Message Sent</h3>
                    <p className="text-[#CBD5E1] text-sm leading-relaxed">
                      Thank you for reaching out. I will review your message and respond within 1–2
                      business days.
                    </p>
                    <p className="text-[#94A3B8] text-xs mt-2">
                      ขอบคุณที่ติดต่อมา จะตอบกลับภายใน 1–2 วันทำการ
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setForm({ name: '', email: '', company: '', projectType: '', message: '' })
                    }}
                    className="btn-ghost text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-elevated rounded-2xl p-6 md:p-8 flex flex-col gap-5">
                  <div>
                    <h2 className="text-[#F8FAFC] font-bold text-xl">Send a Message</h2>
                    <p className="text-[#94A3B8] text-sm mt-1">ส่งข้อความหรือรายละเอียดโครงการของคุณ</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#CBD5E1] text-sm font-medium mb-1.5">
                        Name <span className="text-[#38BDF8]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full bg-[#111827] border border-[#1F2937] rounded-lg px-4 py-2.5 text-[#F8FAFC] text-sm placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#CBD5E1] text-sm font-medium mb-1.5">
                        Email <span className="text-[#38BDF8]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full bg-[#111827] border border-[#1F2937] rounded-lg px-4 py-2.5 text-[#F8FAFC] text-sm placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#CBD5E1] text-sm font-medium mb-1.5">Company / Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company or organization name"
                      className="w-full bg-[#111827] border border-[#1F2937] rounded-lg px-4 py-2.5 text-[#F8FAFC] text-sm placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[#CBD5E1] text-sm font-medium mb-1.5">
                      Project Type / Inquiry
                    </label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="w-full bg-[#111827] border border-[#1F2937] rounded-lg px-4 py-2.5 text-sm text-[#F8FAFC] focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/30 transition-colors appearance-none"
                    >
                      <option value="" className="text-[#94A3B8]">Select a type...</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#CBD5E1] text-sm font-medium mb-1.5">
                      Message <span className="text-[#38BDF8]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe your project, requirements, or inquiry..."
                      className="w-full bg-[#111827] border border-[#1F2937] rounded-lg px-4 py-2.5 text-[#F8FAFC] text-sm placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8]/30 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#050B18]/30 border-t-[#050B18] rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
