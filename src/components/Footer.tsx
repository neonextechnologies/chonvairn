import { Link } from 'react-router-dom'
import { Mail, MapPin, ExternalLink, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/resume', label: 'Resume' },
  { path: '/contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative border-t border-[#1A2535]"
      style={{ background: 'linear-gradient(180deg, #070D1A 0%, #030810 100%)' }}
    >
      {/* Top gold accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.25) 30%, rgba(56,189,248,0.15) 60%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1A2535]">

          {/* Brand column */}
          <div className="md:col-span-5 flex flex-col gap-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#38BDF8] font-bold text-base leading-none">C</span>
              </div>
              <div>
                <p className="text-[#F8FAFC] font-bold text-base tracking-tight leading-none">
                  Chonvarin Methachotwatcharakul
                </p>
                <p className="text-[#94A3B8] text-xs mt-0.5">ชนม์วรินทร์ เมธาโชติวัชรากุล</p>
              </div>
            </div>

            {/* Gold accent line */}
            <div
              className="h-px w-12"
              style={{
                background: 'linear-gradient(90deg, rgba(212,175,55,0.7), transparent)',
              }}
            />

            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs">
              IT Project Manager · Digital Transformation Consultant · AI-enabled IT Solution
              Specialist · Founder / CEO of Neonex Technologies
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="badge-gold">Founder / CEO</span>
              <span className="badge-cyan">20+ Years Experience</span>
              <span className="badge-muted">Neonex Technologies</span>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2.5 mt-1">
              <a
                href="mailto:me@chonvarin.com"
                className="flex items-center gap-2 text-[#94A3B8] text-sm hover:text-[#38BDF8] transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 flex-shrink-0 group-hover:text-[#38BDF8]" />
                me@chonvarin.com
              </a>
              <a
                href="https://linkedin.chonvarin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#94A3B8] text-sm hover:text-[#38BDF8] transition-colors group"
              >
                <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                linkedin.chonvarin.com
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <span className="flex items-center gap-2 text-[#94A3B8] text-sm">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                Pathum Thani, Thailand
              </span>
            </div>
          </div>

          {/* Nav + Downloads */}
          <div className="md:col-span-3">
            <p className="text-[#F8FAFC] text-xs font-semibold tracking-[0.12em] uppercase mb-5">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-[#94A3B8] text-sm hover:text-[#CBD5E1] hover:translate-x-0.5 transition-all duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <p className="text-[#F8FAFC] text-xs font-semibold tracking-[0.12em] uppercase mb-5">
              Downloads
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="/downloads/chonvarin-resume.pdf"
                download
                className="flex items-center gap-3 p-3 rounded-xl border border-[#1A2535] bg-[#0A1020] hover:border-[#38BDF8]/25 hover:bg-[#38BDF8]/4 transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/8 border border-[#38BDF8]/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#38BDF8] text-xs font-bold">PDF</span>
                </div>
                <div>
                  <p className="text-[#CBD5E1] text-xs font-medium group-hover:text-[#F8FAFC] transition-colors">
                    Resume — PDF
                  </p>
                  <p className="text-[#94A3B8]/70 text-xs">For HR & recruiters</p>
                </div>
              </a>
              <a
                href="/downloads/chonvarin-resume.docx"
                download
                className="flex items-center gap-3 p-3 rounded-xl border border-[#1A2535] bg-[#0A1020] hover:border-[#38BDF8]/25 hover:bg-[#38BDF8]/4 transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#94A3B8]/8 border border-[#94A3B8]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#94A3B8] text-xs font-bold">DOC</span>
                </div>
                <div>
                  <p className="text-[#CBD5E1] text-xs font-medium group-hover:text-[#F8FAFC] transition-colors">
                    Resume — DOCX
                  </p>
                  <p className="text-[#94A3B8]/70 text-xs">Editable format</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#94A3B8]/60 text-xs">
            © {year} Chonvarin Methachotwatcharakul · chonvarin.com
          </p>
          <p className="text-[#94A3B8]/40 text-xs text-center">
            Built for professional portfolio, resume, and digital solution presentation.
          </p>
        </div>
      </div>
    </footer>
  )
}
