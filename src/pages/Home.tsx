import { Rat, ShieldCheck, Mail, Phone, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react'
import type { SVGProps } from 'react'
import { motion } from 'framer-motion'
import { Reveal, RevealGroup, RevealItem, FloatingWhatsApp } from '../components/motion'
import { Nav, Footer, FloatingCallMobile, WhatsAppIcon, TopContactBar, ImagePlaceholder, PHONE, PHONE_HREF, WHATSAPP_HREF, EMAIL, EMAIL_HREF } from '../components/site-chrome'
import heroImg from '../assets/hero.png'
import aboutImg from '../assets/image.png' 

function CockroachIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M22 12 L28 24" /><path d="M42 12 L36 24" />
      <ellipse cx="32" cy="24" rx="8" ry="5" fill="currentColor" fillOpacity="0.2" />
      <ellipse cx="32" cy="40" rx="14" ry="16" fill="currentColor" fillOpacity="0.2" />
      <path d="M20 34 H44" /><path d="M19 42 H45" /><path d="M21 50 H43" />
      <path d="M18 32 L10 28" /><path d="M17 40 L8 42" /><path d="M19 48 L11 54" />
      <path d="M46 32 L54 28" /><path d="M47 40 L56 42" /><path d="M45 48 L53 54" />
    </svg>
  )
}

function AntIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M26 8 L30 18" /><path d="M38 8 L34 18" />
      <circle cx="32" cy="20" r="6" fill="currentColor" fillOpacity="0.2" />
      <circle cx="32" cy="34" r="5" fill="currentColor" fillOpacity="0.2" />
      <ellipse cx="32" cy="49" rx="7" ry="8" fill="currentColor" fillOpacity="0.2" />
      <path d="M27 32 L14 26" /><path d="M27 35 L12 36" /><path d="M27 38 L14 46" />
      <path d="M37 32 L50 26" /><path d="M37 35 L52 36" /><path d="M37 38 L50 46" />
    </svg>
  )
}

function BedbugIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M26 10 L30 18" /><path d="M38 10 L34 18" />
      <ellipse cx="32" cy="20" rx="5" ry="3.5" fill="currentColor" fillOpacity="0.2" />
      <ellipse cx="32" cy="40" rx="15" ry="14" fill="currentColor" fillOpacity="0.2" />
      <path d="M19 34 H45" /><path d="M17 40 H47" /><path d="M19 46 H45" />
      <path d="M18 32 L10 28" /><path d="M17 40 L8 40" /><path d="M18 48 L10 52" />
      <path d="M46 32 L54 28" /><path d="M47 40 L56 40" /><path d="M46 48 L54 52" />
    </svg>
  )
}

const SERVICES = [
  { Icon: Rat, title: 'Mice & Rats', desc: 'Full rodent removal, entry-point sealing and long-term prevention for homes and businesses.' },
  { Icon: CockroachIcon, title: 'Cockroaches', desc: 'Targeted treatments that eliminate infestations at the source (kitchens, drains and voids.)' },
  { Icon: BedbugIcon, title: 'Bed Bugs', desc: 'Heat and chemical bed-bug treatments that protect your family, guests and reputation.' },
  { Icon: AntIcon, title: 'Ants, Wasps & Flies', desc: 'Seasonal pest control to keep your property comfortable and pest-free all year round.' },
  { Icon: ShieldCheck, title: 'Commercial Treatments', desc: 'Scheduled visits for landlords, restaurants and offices.' },
  { Icon: CheckCircle2, title: 'Proofing', desc: 'Detailed property surveys and proofing work to stop pests before they get in.' },
]

const TRUST_ITEMS = ['Fully Insured', 'Same-Day Response', 'Guaranteed Results', 'Eco-Friendly Options']

const ABOUT_POINTS = [
  'Honest and upfront pricing ',
  'Same-day and out-of-hours appointments',
  'Treatments backed by our service guarantee',
  'Friendly, BPCA-trained technicians',
]

const STEPS = [
  { n: '01', t: 'Call or message', d: 'Tell us what you are seeing. We will be in touch in minutes.' },
  { n: '02', t: 'Survey & quote', d: 'We assess the property and give you a transparent, fixed-price quote.' },
  { n: '03', t: 'Treatment', d: 'Targeted treatment using the safest effective methods available.' },
  { n: '04', t: 'Follow-up & guarantee', d: 'We return to verify results and proof your property against return.' },
]

const EASE = [0.22, 1, 0.36, 1] as const
const RG = 'linear-gradient(135deg,#c0392b,#e74c3c)'
const RT = { background: RG, WebkitBackgroundClip: 'text' as const, WebkitTextFillColor: 'transparent' as const, backgroundClip: 'text' as const }

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TopContactBar />
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Process />
      <Contact />
      <Footer />
      <FloatingWhatsApp href={WHATSAPP_HREF} />
      <FloatingCallMobile />
    </div>
  )
}

function Hero() {
  const btnBase = 'inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5'
  return (
    <section id="top" className="relative overflow-hidden py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
        <RevealGroup stagger={0.07}>
          <RevealItem>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight" style={{ fontFamily: 'Montserrat,sans-serif', color: '#0a1628' }}>
              Pests gone.<br />
              <span style={RT}>Peace restored.</span>
            </h1>
          </RevealItem>
          <RevealItem>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#c0392b' }}>
              <MapPin className="h-4 w-4" />
              Serving London and Surrounding Areas
            </div>
          </RevealItem>
          <RevealItem>
            <p className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed" style={{ color: '#6b7280' }}>
              Crown Shield Pest Control delivers fast, discreet and guaranteed treatments for mice, rats, cockroaches, bed bugs and more — across homes and businesses in London.
            </p>
          </RevealItem>
          <RevealItem>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={PHONE_HREF} className={btnBase} style={{ backgroundColor: '#0a1628', boxShadow: '0 4px 20px rgba(10,22,40,0.22)' }}>
                <Phone className="h-5 w-5" />Call Us Now
              </a>
              <a href={EMAIL_HREF} className={btnBase} style={{ background: RG, boxShadow: '0 4px 20px rgba(192,57,43,0.32)' }}>
                <Mail className="h-5 w-5" />Send Us an Email
              </a>
              <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className={btnBase} style={{ background: 'linear-gradient(135deg,#25d366,#128c7e)', boxShadow: '0 4px 20px rgba(37,211,102,0.32)' }}>
                <WhatsAppIcon className="h-5 w-5" />WhatsApp
              </a>
            </div>
          </RevealItem>
        </RevealGroup>

        <Reveal delay={0.12} className="relative hidden lg:flex justify-center">
          <img src={heroImg} alt="Crown Shield Pest Control" className="relative w-[26rem] h-[26rem] animate-float object-contain" />
        </Reveal>
      </div>
    </section>
  )
}

function TrustBar() {
  return (
    <section style={{ backgroundColor: '#f9fafb', borderTop: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7' }}>
      <RevealGroup stagger={0.06} className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-14 gap-y-3 text-sm" style={{ color: '#6b7280' }}>
        {TRUST_ITEMS.map((item) => (
          <RevealItem key={item} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: '#c0392b' }} />
            {item}
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl mb-12 sm:mb-14">
          <div className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: '#c0392b' }}>What we treat</div>
          <h2 className="text-3xl sm:text-5xl font-black" style={{ fontFamily: 'Montserrat,sans-serif', color: '#0a1628' }}>
            Specialist pest control, <span style={RT}>done right</span>.
          </h2>
          <p className="mt-4 text-base" style={{ color: '#6b7280' }}>From a single mouse to full commercial infestations, every job is handled with the same care and guarantee.</p>
        </Reveal>
        <RevealGroup stagger={0.08} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((s) => (
            <RevealItem key={s.title}>
              <div className="rounded-2xl p-6 sm:p-7 hover-lift h-full" style={{ border: '1px solid #e4e4e7', backgroundColor: '#ffffff', boxShadow: '0 2px 12px rgba(10,22,40,0.05)' }}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-5" style={{ background: RG, boxShadow: '0 4px 14px rgba(192,57,43,0.35)' }}>
                  <s.Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ fontFamily: 'Montserrat,sans-serif', color: '#0a1628' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{s.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-20 sm:py-28" style={{ backgroundColor: '#f9fafb', borderTop: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <Reveal>
          <img src={aboutImg} alt="Crown Shield Pest Control team" className="w-full h-64 sm:h-96 lg:h-[28rem] object-cover rounded-2xl" style={{ boxShadow: '0 2px 20px rgba(10,22,40,0.08)' }} />
        </Reveal>
        <RevealGroup stagger={0.07}>
          <RevealItem>
            <div className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: '#c0392b' }}>About Crown Shield</div>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-1 text-3xl sm:text-5xl font-black" style={{ fontFamily: 'Montserrat,sans-serif', color: '#0a1628' }}>
              Local experts who actually <span style={RT}>turn up</span>.
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: '#6b7280' }}>
              Led by company director Ali O., Crown Shield was built on a simple idea:
              pest problems are stressful, and customers deserve a friendly, professional service that solves them quickly and cleanly. We treat every property like our own.
            </p>
          </RevealItem>
          <RevealItem>
            <ul className="mt-6 space-y-3">
              {ABOUT_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" style={{ color: '#c0392b' }} />
                  <span style={{ color: '#374151' }}>{point}</span>
                </li>
              ))}
            </ul>
          </RevealItem>
          <RevealItem>
            <a href="#contact" className="mt-7 inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all" style={{ color: '#c0392b' }}>
              Book an inspection<ArrowRight className="h-4 w-4" />
            </a>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl mb-12 sm:mb-14">
          <div className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: '#c0392b' }}>How it works</div>
          <h2 className="text-3xl sm:text-5xl font-black" style={{ fontFamily: 'Montserrat,sans-serif', color: '#0a1628' }}>
            Four steps to a <span style={RT}>pest-free</span> property.
          </h2>
        </Reveal>
        <RevealGroup stagger={0.08} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {STEPS.map((step) => (
            <RevealItem key={step.n}>
              <div className="rounded-2xl p-6 sm:p-7 hover-lift h-full" style={{ border: '1px solid #e4e4e7', backgroundColor: '#ffffff', boxShadow: '0 2px 12px rgba(10,22,40,0.05)' }}>
                <div className="text-5xl font-black mb-3" style={{ fontFamily: 'Montserrat,sans-serif', ...RT }}>{step.n}</div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Montserrat,sans-serif', color: '#0a1628' }}>{step.t}</h3>
                <p className="text-sm" style={{ color: '#6b7280' }}>{step.d}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden" style={{ backgroundColor: '#f9fafb', borderTop: '1px solid #e4e4e7' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[36rem] w-[36rem] rounded-full blur-3xl pointer-events-none" style={{ background: RG, opacity: 0.06 }} />
      <RevealGroup stagger={0.07} className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <RevealItem>
          <div className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: '#c0392b' }}>Get in touch</div>
        </RevealItem>
        <RevealItem>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black" style={{ fontFamily: 'Montserrat,sans-serif', color: '#0a1628' }}>
            Got a pest problem?<br />
            <span style={RT}>Let's fix it today.</span>
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="mt-5 text-base sm:text-lg max-w-xl mx-auto" style={{ color: '#6b7280' }}>
            Call or email Ali directly. We respond fast. 
          </p>
        </RevealItem>
        <RevealItem>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto">
            <motion.a whileHover={{ y: -4 }} transition={{ duration: 0.2, ease: EASE }} href={PHONE_HREF} className="rounded-2xl p-6 sm:p-8 text-left block" style={{ backgroundColor: '#0a1628', boxShadow: '0 4px 24px rgba(10,22,40,0.22)' }}>
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 shrink-0 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.55)' }}>Call now</div>
                  <div className="font-black text-xl sm:text-2xl text-white truncate">{PHONE}</div>
                </div>
              </div>
            </motion.a>
            <motion.a whileHover={{ y: -4 }} transition={{ duration: 0.2, ease: EASE }} href={EMAIL_HREF} className="rounded-2xl p-6 sm:p-8 text-left block" style={{ background: RG, boxShadow: '0 4px 24px rgba(192,57,43,0.32)' }}>
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 shrink-0 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.65)' }}>Email us</div>
                  <div className="font-black text-base sm:text-lg text-white truncate">{EMAIL}</div>
                </div>
              </div>
            </motion.a>
          </div>
        </RevealItem>
        <RevealItem>
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-sm" style={{ color: '#9ca3af' }}>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0" style={{ color: '#c0392b' }} />
              Mon-Sun, 24/7 emergencies
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" style={{ color: '#c0392b' }} />
              Serving London and Surrounding Areas
            </div>
          </div>
        </RevealItem>
      </RevealGroup>
    </section>
  )
}