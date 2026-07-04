import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import logoImg from '../assets/logo.png'

export const PHONE = '+44 7503 916578'
export const PHONE_HREF = 'tel:+447503916578'
export const WHATSAPP_HREF = 'https://wa.me/447503916578'
export const EMAIL = 'crownshieldpestcontrol@gmail.com'
export const EMAIL_HREF = `mailto:${EMAIL}`
export const BUSINESS_NAME = 'Crown Shield Pest Control Services'
export const SITE_URL = 'https://crownshieldpestcontrol.com'
export const ADDRESS_LINE = 'Serving London and Surrounding Areas, United Kingdom'

export function WhatsAppIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.763h-.004c-1.183 0-2.35-.309-3.372-.893l-.241-.143-2.503.657.666-2.44-.157-.249c-.62-.982-.95-2.12-.95-3.287 0-3.397 2.763-6.16 6.16-6.16 1.645 0 3.191.642 4.354 1.807 1.16 1.165 1.806 2.712 1.804 4.354 0 3.397-2.763 6.16-6.161 6.16M12 2C6.486 2 2 6.486 2 12c0 1.976.469 3.843 1.302 5.5L2 22l4.675-1.231C8.34 21.636 10.131 22 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2" />
    </svg>
  )
}

export function LogoPlaceholder({ dark = false }: { dark?: boolean }) {
  if (dark) {
    return (
      <div className="inline-flex items-center justify-center rounded-lg p-1.5" style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}>
        <img src={logoImg} alt="Crown Shield Pest Control" className="h-10 w-auto object-contain" />
      </div>
    )
  }
  return (
    <img src={logoImg} alt="Crown Shield Pest Control" className="h-10 w-auto object-contain" />
  )
}
export function TopContactBar() {
  return (
    <div style={{ backgroundColor: '#0a1628' }} className="w-full text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2 flex items-center justify-between gap-4 text-xs sm:text-sm">
        <a href={PHONE_HREF} className="inline-flex items-center gap-2 font-semibold opacity-90 hover:opacity-100 transition-opacity">
          <Phone className="h-3.5 w-3.5 shrink-0" />
          {PHONE}
        </a>
        <a href={EMAIL_HREF} className="inline-flex items-center gap-2 font-semibold opacity-90 hover:opacity-100 transition-opacity min-w-0">
          <Mail className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{EMAIL}</span>
        </a>
      </div>
    </div>
  )
}

const NAV_ITEMS = [
  { label: 'Services', hash: '#services' },
  { label: 'About', hash: '#about' },
  { label: 'Process', hash: '#process' },
  { label: 'Contact', hash: '#contact' },
]

export function Nav({ variant = 'home' }: { variant?: 'home' | 'page' }) {
  return (
    <header className="sticky top-0 z-40" style={{ backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e4e4e7' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0 min-w-0">
          <LogoPlaceholder />
          <div className="leading-tight min-w-0">
            <div className="font-extrabold tracking-wide text-sm" style={{ color: '#0a1628' }}>CROWN SHIELD</div>
            <div className="text-xs uppercase tracking-widest" style={{ color: '#9ca3af' }}>Pest Control</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_ITEMS.map((item) =>
            variant === 'home'
              ? <a key={item.label} href={item.hash} className="transition-colors hover:text-red-600" style={{ color: '#374151' }}>{item.label}</a>
              : <Link key={item.label} to="/" className="transition-colors hover:text-red-600" style={{ color: '#374151' }}>{item.label}</Link>
          )}
        </nav>

        <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shrink-0 transition-opacity hover:opacity-90" style={{ backgroundColor: '#25D366', boxShadow: '0 2px 12px rgba(37,211,102,0.35)' }}>
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </header>
  )
}

export function FloatingCallMobile() {
  return (
    <a href={PHONE_HREF} aria-label="Call Crown Shield" className="sm:hidden fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white" style={{ backgroundColor: '#0a1628', boxShadow: '0 4px 20px rgba(10,22,40,0.35)' }}>
      <Phone className="h-6 w-6" />
    </a>
  )
}

export function Footer({ variant = 'home' }: { variant?: 'home' | 'page' }) {
  return (
    <footer style={{ backgroundColor: '#0a1628' }} className="text-white pb-24 sm:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <LogoPlaceholder dark />
          <div className="text-lg sm:text-xl font-bold" style={{ color: 'rgba(255,255,255,0.95)' }}>Fast Effective Pest Control Across London</div>
        </div>
        <div className="mt-8 h-px w-full" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: '#e74c3c' }}>Company</div>
          <h3 className="text-lg font-black mb-3">{BUSINESS_NAME}</h3>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>Professional pest control for London homes and businesses. Fast, guaranteed results.</p>
          <div className="mt-4 flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#e74c3c' }} />
            <span>{ADDRESS_LINE}</span>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: '#e74c3c' }}>Quick Links</div>
          <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
            <li><Link to="/" className="hover:text-red-400 transition-colors">Home</Link></li>
            <li>{variant === 'home' ? <a href="#services" className="hover:text-red-400 transition-colors">Services</a> : <Link to="/" className="hover:text-red-400 transition-colors">Services</Link>}</li>
            <li>{variant === 'home' ? <a href="#about" className="hover:text-red-400 transition-colors">About</a> : <Link to="/" className="hover:text-red-400 transition-colors">About</Link>}</li>
            <li>{variant === 'home' ? <a href="#contact" className="hover:text-red-400 transition-colors">Contact</a> : <Link to="/" className="hover:text-red-400 transition-colors">Contact</Link>}</li>
            <li><Link to="/privacy" className="hover:text-red-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-red-400 transition-colors">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: '#e74c3c' }}>Contact</div>
          <ul className="space-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
            <li>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 hover:text-red-400 transition-colors">
                <Phone className="h-4 w-4 shrink-0" style={{ color: '#e74c3c' }} />
                {PHONE}
              </a>
            </li>
            <li>
              <a href={EMAIL_HREF} className="inline-flex items-center gap-2 hover:text-red-400 transition-colors break-all">
                <Mail className="h-4 w-4 shrink-0" style={{ color: '#e74c3c' }} />
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-red-400 transition-colors">
                <WhatsAppIcon className="h-4 w-4 shrink-0" style={{ color: '#25D366' }} />
                WhatsApp us
              </a>
            </li>
            <li className="pt-2 mt-1" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#e74c3c' }} />
                <div>
                  <div>Mon - Sat, 8am - 6pm</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>Emergency call-outs 24/7</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-px w-full" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
        <div className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.45)' }}>Serving London and Surrounding Areas</div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
          <div>2026 {BUSINESS_NAME}. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-red-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-red-400 transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function LegalPageLayout({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopContactBar />
      <Nav variant="page" />
      <main className="flex-1">
        <section style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e4e4e7' }}>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 py-14 sm:py-20">
            <div className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: '#c0392b' }}>Legal</div>
            <h1 className="text-3xl sm:text-5xl font-black" style={{ color: '#0a1628', fontFamily: 'Montserrat,sans-serif' }}>{title}</h1>
            <p className="mt-3 text-sm" style={{ color: '#9ca3af' }}>Last updated {updated}</p>
          </div>
        </section>
        <article className="mx-auto max-w-3xl px-4 sm:px-6 py-14 sm:py-20 space-y-8 text-sm sm:text-base leading-relaxed" style={{ color: '#374151' }}>
          {children}
          <div className="pt-6" style={{ borderTop: '1px solid #e4e4e7' }}>
            <Link to="/" className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all" style={{ color: '#c0392b' }}>
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to home
            </Link>
          </div>
        </article>
      </main>
      <Footer variant="page" />
      <FloatingCallMobile />
    </div>
  )
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: '#0a1628', fontFamily: 'Montserrat,sans-serif' }}>{heading}</h2>
      <div className="space-y-3" style={{ color: '#6b7280' }}>{children}</div>
    </section>
  )
}