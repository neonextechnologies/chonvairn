import { Link } from 'react-router-dom'
import { Mail, MapPin, ExternalLink } from 'lucide-react'

const quickLinks = [
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
    <footer className="bg-[#030810] border-t border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[#F8FAFC] font-bold text-lg tracking-tight">
                Chonvarin Methachotwatcharakul
              </p>
              <p className="text-[#94A3B8] text-sm mt-0.5">ชนม์วรินทร์ เมธาโชติวัชรากุล</p>
            </div>
            <div className="w-8 h-0.5 bg-[#38BDF8] rounded-full" />
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              IT Project Manager · Digital Transformation Consultant · AI-enabled IT Solution
              Specialist
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">
                Founder / CEO
              </span>
              <span className="text-[#94A3B8] text-xs">Neonex Technologies Co., Ltd.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[#CBD5E1] font-semibold text-sm mb-4 tracking-wider uppercase">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-[#94A3B8] text-sm hover:text-[#38BDF8] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#CBD5E1] font-semibold text-sm mb-4 tracking-wider uppercase">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:me@chonvarin.com"
                className="flex items-center gap-2 text-[#94A3B8] text-sm hover:text-[#38BDF8] transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                me@chonvarin.com
              </a>
              <a
                href="https://linkedin.chonvarin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#94A3B8] text-sm hover:text-[#38BDF8] transition-colors"
              >
                <ExternalLink className="w-4 h-4 flex-shrink-0" />
                LinkedIn Profile
              </a>
              <div className="flex items-center gap-2 text-[#94A3B8] text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Pathum Thani, Thailand
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1F2937] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#94A3B8] text-xs">
            © {year} Chonvarin Methachotwatcharakul · chonvarin.com
          </p>
          <p className="text-[#94A3B8]/60 text-xs text-center sm:text-right">
            Built for professional portfolio, resume, and digital solution presentation.
          </p>
        </div>
      </div>
    </footer>
  )
}
