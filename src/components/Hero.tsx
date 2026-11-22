import { motion } from 'framer-motion'
import { HomeScreen } from './AppScreens'
import { PhoneFrame } from './PhoneFrame'
import { StoreButtons } from './StoreButtons'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-surface" />
        <div className="absolute inset-y-0 right-0 hidden w-[46%] bg-gradient-to-l from-primary-soft/80 to-transparent lg:block" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-[minmax(0,1fr)_minmax(280px,340px)] md:gap-12 md:py-16 lg:gap-14 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
          className="flex flex-col gap-6"
        >
          <p className="font-display text-5xl font-bold tracking-[-0.03em] text-primary sm:text-6xl lg:text-7xl lg:leading-none">
            PawDex
          </p>

          <h1 className="max-w-[20ch] font-display text-2xl font-semibold leading-snug tracking-tight text-ink md:text-[1.85rem] lg:text-[2.15rem]">
            Dog health tracking that keeps you calm — and your vet informed.
          </h1>

          <p className="max-w-[36ch] text-base leading-relaxed text-ink-muted md:text-lg">
            Log conditions, medications, and weight in one place, then export
            clear reports for appointments.
          </p>

          <StoreButtons comingSoon solid className="pt-1" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease }}
          className="mx-auto w-full max-w-[300px] md:mx-0 md:max-w-none"
        >
          <PhoneFrame>
            <HomeScreen />
          </PhoneFrame>
        </motion.div>
      </div>
    </section>
  )
}
