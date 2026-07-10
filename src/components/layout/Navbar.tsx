import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  X,
  ChevronRight,
  User,
  Briefcase,
  Menu,
  Home,
  Users,
  TrendingUp,
  BriefcaseBusiness,
} from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Investors', href: '/investors' },
  { label: 'Careers', href: '/careers' },
]

const drawerLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Portfolio', href: '/portfolio', icon: Briefcase },
  { label: 'About', href: '/about', icon: Users },
  { label: 'Investors', href: '/investors', icon: TrendingUp },
  { label: 'Careers', href: '/careers', icon: BriefcaseBusiness },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant h-16">
        <div className="flex justify-between items-center h-full px-4 md:px-10 max-w-[1280px] mx-auto">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 hover:bg-surface-container-low rounded-full transition-colors"
              aria-label="Open menu"
            >
              <Menu size={20} className="text-on-surface" />
            </button>
            <Link to="/" className="font-headline text-lg font-bold text-primary">
              Global Group
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`font-label text-sm transition-colors ${
                  location.pathname === link.href
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-secondary font-medium hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="bg-primary text-on-primary px-6 py-2 rounded font-label text-sm hover:opacity-80 transition-opacity">
              Contact Us
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}

      <div className="h-16" />
    </>
  )
}

function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      <div className="fixed top-0 left-0 z-50 flex h-full w-80 max-w-[86vw] flex-col bg-surface shadow-xl">
        <div className="flex items-center justify-between border-b border-outline-variant px-4 py-4">
          <span className="font-headline text-lg font-bold text-primary">Global Group</span>
          <button
            onClick={onClose}
            className="rounded-full p-2 transition-colors hover:bg-surface-container-low"
            aria-label="Close menu"
          >
            <X size={22} className="text-on-surface-variant" />
          </button>
        </div>

        <div className="border-b border-outline-variant px-4 py-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden border border-outline-variant">
              <User size={20} className="text-on-secondary-container" />
            </div>
            <div>
              <p className="font-label text-sm font-semibold text-on-surface">Corporate Profile</p>
              <p className="font-body text-xs text-on-surface-variant">Institutional Access</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-2">
          {drawerLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={onClose}
              className="group flex items-center justify-between px-4 py-3 transition-colors hover:bg-surface-container-low"
            >
              <div className="flex items-center gap-3">
                <link.icon size={18} className="text-on-surface-variant" />
                <span className="font-label text-sm font-medium text-on-surface">{link.label}</span>
              </div>
              <ChevronRight size={16} className="text-on-surface-variant/50 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
