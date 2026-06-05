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
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050B18]/96 backdrop-blur-xl border-b border-[#1A2535]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo mark */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#38BDF8]/15 transition-colors">
              <span className="text-[#38BDF8] font-bold text-sm leading-none">C</span>
            </div>
            <div className="leading-none">
              <span className="text-[#F8FAFC] font-semibold text-sm tracking-tight group-hover:text-[#38BDF8] transition-colors">
                Chonvarin
              </span>
              <span className="hidden sm:block text-[#94A3B8] text-[10px] font-normal tracking-wide mt-0.5">
                IT Project Manager
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((link) => {
              const active = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active ? 'text-[#38BDF8]' : 'text-[#94A3B8] hover:text-[#CBD5E1]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-[#38BDF8] rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold bg-[#38BDF8] text-[#030912] rounded-lg transition-all duration-200 hover:bg-[#0EA5E9] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
            >
              Contact Me
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5 rounded-lg transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#050B18]/98 backdrop-blur-xl border-t border-[#1A2535]">
          <nav className="px-5 py-4 flex flex-col gap-0.5">
            {navLinks.map((link) => {
              const active = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'text-[#38BDF8] bg-[#38BDF8]/8 border border-[#38BDF8]/15'
                      : 'text-[#94A3B8] hover:text-[#CBD5E1] hover:bg-white/3'
                  }`}
                >
                  {link.label}
                  {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />}
                </Link>
              )
            })}
            <div className="pt-3 mt-1 border-t border-[#1A2535]">
              <Link
                to="/contact"
                className="flex items-center justify-center px-4 py-3 bg-[#38BDF8] text-[#030912] text-sm font-semibold rounded-xl"
              >
                Contact Me
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
