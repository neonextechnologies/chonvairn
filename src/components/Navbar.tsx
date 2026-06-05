import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/resume', label: 'Resume' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050B18]/95 backdrop-blur-md border-b border-[#1F2937] shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none group">
            <span className="text-[#F8FAFC] font-bold text-base tracking-tight group-hover:text-[#38BDF8] transition-colors">
              Chonvarin
            </span>
            <span className="text-[#94A3B8] text-xs font-normal tracking-wider">
              IT Project Manager
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#38BDF8] bg-[#38BDF8]/8'
                    : 'text-[#CBD5E1] hover:text-[#F8FAFC] hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 bg-[#38BDF8] text-[#050B18] text-sm font-semibold rounded-lg transition-all duration-200 hover:bg-[#0EA5E9] hover:shadow-[0_0_16px_rgba(56,189,248,0.35)]"
            >
              Contact Me
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#CBD5E1] hover:text-[#F8FAFC] hover:bg-white/5 rounded-lg transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#050B18]/98 backdrop-blur-md border-t border-[#1F2937]">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#38BDF8] bg-[#38BDF8]/8'
                    : 'text-[#CBD5E1] hover:text-[#F8FAFC] hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-[#1F2937] mt-1">
              <Link
                to="/contact"
                className="flex items-center justify-center px-4 py-3 bg-[#38BDF8] text-[#050B18] text-sm font-semibold rounded-lg"
              >
                Contact Me
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
