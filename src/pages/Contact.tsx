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

const inputClass =
  'w-full rounded-xl px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#94A3B8]/40 transition-all duration-200 outline-none focus:ring-1 focus:ring-[#38BDF8]/30 focus:border-[#38BDF8]/40'
const inputStyle = {
  background: '#111827',
  border: '1px solid #1A2535',
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', company: '', projectType: '', message: '',
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
    // Connect to backend or email service as needed
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[#050B18] overflow-hidden">
        <div className="absolute inset-0 bg-grid-fine opacity-60" />
        <div className="absolute inset-0 hero-radial" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="eyebrow">Contact</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mt-4 leading-tight tracking-tight">
              Let's Discuss
              <br />
              <span className="text-gradient-cyan">Practical Digital Solutions</span>
            </h1>
            <div className="flex items-center gap-2 mt-5">
              <div className="w-10 h-0.5 bg-[#38BDF8] rounded-full" />
              <div className="w-3 h-0.5 bg-[#D4AF37] rounded-full" />
            </div>
            <p className="text-[#CBD5E1] text-base leading-[1.85] mt-6">
              Whether you are looking for an IT Project Manager, a digital transformation
              consultant, or a practical technology partner — I am open to discussing suitable
              opportunities.
            </p>
            <p className="text-[#94A3B8] text-sm leading-relaxed mt-3">
              พูดคุยเรื่องระบบ งานดิจิทัล เวิร์กโฟลว์ หรือโครงการ IT ของคุณ
              <br />
              ไม่ว่าจะเป็นโอกาสด้านงานประจำ ที่ปรึกษาโครงการ หรือการพัฒนาระบบสำหรับธุรกิจ
              สามารถติดต่อเพื่อพูดคุยแนวทางที่เหมาะสมได้
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #0A1525 0%, #050B18 100%)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* ── Contact info ── */}
            <div className="flex flex-col gap-8">
              <SectionHeader
                eyebrow="Get in Touch"
                title="Contact Information"
                titleTh="ช่องทางติดต่อ"
                align="left"
              />

              <div className="flex flex-col gap-3">
                {[
                  { icon: <Mail className="w-5 h-5 text-[#38BDF8]" />, label: 'Email', value: 'me@chonvarin.com', href: 'mailto:me@chonvarin.com' },
                  { icon: <ExternalLink className="w-5 h-5 text-[#38BDF8]" />, label: 'LinkedIn', value: 'linkedin.chonvarin.com', href: 'https://linkedin.chonvarin.com', ext: true },
                  { icon: <ExternalLink className="w-5 h-5 text-[#38BDF8]" />, label: 'Portfolio', value: 'chonvarin.com', href: 'https://chonvarin.com', ext: true },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.ext ? '_blank' : undefined}
                    rel={item.ext ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 hover:border-[#38BDF8]/25 hover:-translate-y-0.5"
                    style={{ background: '#0D1625', border: '1px solid #1A2535' }}
                  >
                    <div className="icon-box group-hover:bg-[#38BDF8]/12 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[#94A3B8] text-xs mb-0.5">{item.label}</p>
                      <p className="text-[#CBD5E1] text-sm font-medium group-hover:text-[#38BDF8] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}

                <div className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{ background: '#0D1625', border: '1px solid #1A2535' }}>
                  <div className="icon-box">
                    <MapPin className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <p className="text-[#94A3B8] text-xs mb-0.5">Location</p>
                    <p className="text-[#CBD5E1] text-sm font-medium">Pathum Thani, Thailand</p>
                  </div>
                </div>
              </div>

              {/* Response time note */}
              <div className="rounded-2xl p-5"
                style={{ background: 'rgba(212,175,55,0.04)', border: '1px solid rgba(212,175,55,0.15)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <p className="text-[#D4AF37] text-xs font-semibold tracking-wide">Response Time</p>
                </div>
                <p className="text-[#CBD5E1] text-sm leading-relaxed">
                  Messages are typically responded to within 1–2 business days. For urgent matters,
                  email is the most reliable channel.
                </p>
              </div>
            </div>

            {/* ── Form ── */}
            <div>
              {submitted ? (
                <div className="rounded-2xl p-10 flex flex-col items-center text-center gap-5"
                  style={{ background: '#0A1020', border: '1px solid rgba(52,211,153,0.15)' }}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)' }}>
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-[#F8FAFC] font-bold text-xl mb-2">Message Sent</h3>
                    <p className="text-[#CBD5E1] text-sm leading-relaxed">
                      Thank you for reaching out. I will review your message and respond within
                      1–2 business days.
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
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl p-6 md:p-8 flex flex-col gap-5"
                  style={{ background: '#0A1020', border: '1px solid rgba(56,189,248,0.08)' }}
                >
                  <div>
                    <h2 className="text-[#F8FAFC] font-bold text-xl tracking-tight">Send a Message</h2>
                    <p className="text-[#94A3B8] text-sm mt-1">
                      ส่งข้อความหรือรายละเอียดโครงการของคุณ
                    </p>
                  </div>

                  <div
                    className="h-px"
                    style={{ background: 'rgba(56,189,248,0.06)' }}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#CBD5E1] text-xs font-medium mb-2 tracking-wide uppercase">
                        Name <span className="text-[#38BDF8]">*</span>
                      </label>
                      <input
                        type="text" name="name" value={form.name} onChange={handleChange}
                        required placeholder="Your name"
                        className={inputClass} style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-[#CBD5E1] text-xs font-medium mb-2 tracking-wide uppercase">
                        Email <span className="text-[#38BDF8]">*</span>
                      </label>
                      <input
                        type="email" name="email" value={form.email} onChange={handleChange}
                        required placeholder="your@email.com"
                        className={inputClass} style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#CBD5E1] text-xs font-medium mb-2 tracking-wide uppercase">
                      Company / Organization
                    </label>
                    <input
                      type="text" name="company" value={form.company} onChange={handleChange}
                      placeholder="Company or organization name"
                      className={inputClass} style={inputStyle}
                    />
                  </div>

                  <div>
                    <label className="block text-[#CBD5E1] text-xs font-medium mb-2 tracking-wide uppercase">
                      Project Type / Inquiry
                    </label>
                    <select
                      name="projectType" value={form.projectType} onChange={handleChange}
                      className={`${inputClass} appearance-none`} style={inputStyle}
                    >
                      <option value="">Select a type...</option>
                      {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#CBD5E1] text-xs font-medium mb-2 tracking-wide uppercase">
                      Message <span className="text-[#38BDF8]">*</span>
                    </label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      required rows={5}
                      placeholder="Describe your project, requirements, or inquiry..."
                      className={`${inputClass} resize-none`} style={inputStyle}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#030912]/30 border-t-[#030912] rounded-full animate-spin" />
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
