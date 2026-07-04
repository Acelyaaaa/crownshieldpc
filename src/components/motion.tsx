import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion'
import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
}

const staggerContainer = (stagger = 0.08): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
})

type As = 'div' | 'section' | 'header' | 'footer' | 'article' | 'li' | 'ul'

type RevealProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
  delay?: number
  as?: As
}

export function Reveal({ children, className, style, delay = 0, as = 'div' }: RevealProps) {
  const Comp = motion[as]
  return (
    <Comp className={className} style={style} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE, delay } } }}>
      {children}
    </Comp>
  )
}

export function RevealGroup({ children, className, style, stagger = 0.08, as = 'div' }: RevealProps & { stagger?: number }) {
  const Comp = motion[as!]
  return (
    <Comp className={className} style={style} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer(stagger)}>
      {children}
    </Comp>
  )
}

export function RevealItem({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <motion.div className={className} style={style} variants={fadeUp}>
      {children}
    </motion.div>
  )
}

export function CountUp({ to, suffix = '', prefix = '', duration = 1.2, className }: { to: number; suffix?: string; prefix?: string; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 })
  const rounded = useTransform(spring, (v) => `${prefix}${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (inView) mv.set(to)
  }, [inView, to, mv])

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
    </span>
  )
}

function WASvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.763h-.004c-1.183 0-2.35-.309-3.372-.893l-.241-.143-2.503.657.666-2.44-.157-.249c-.62-.982-.95-2.12-.95-3.287 0-3.397 2.763-6.16 6.16-6.16 1.645 0 3.191.642 4.354 1.807 1.16 1.165 1.806 2.712 1.804 4.354 0 3.397-2.763 6.16-6.161 6.16M12 2C6.486 2 2 6.486 2 12c0 1.976.469 3.843 1.302 5.5L2 22l4.675-1.231C8.34 21.636 10.131 22 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2" />
    </svg>
  )
}

export function FloatingWhatsApp({ href }: { href: string }) {
  return (
    <motion.a href={href} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" initial={{ opacity: 0, scale: 0.6, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.35, ease: EASE }} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full text-white" style={{ backgroundColor: '#25D366', boxShadow: '0 4px 24px rgba(37,211,102,0.4)' }}>
      <WASvg className="h-7 w-7 sm:h-8 sm:w-8" />
    </motion.a>
  )
}

export { motion } 
