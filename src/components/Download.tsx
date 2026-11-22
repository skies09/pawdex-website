import { motion } from 'framer-motion'
import { StoreButtons } from './StoreButtons'
import { QrSlot } from './QrSlot'

const ease = [0.22, 1, 0.36, 1] as const

export function Download() {
  return (
    <section
      id="download"
      className="scroll-mt-24 border-t border-surface-border bg-surface py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-14 px-4 md:grid-cols-[1.25fr_auto] md:items-center md:gap-20 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.35, ease }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Download
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Get PawDex on your phone
          </h2>
          <p className="mt-4 max-w-[40ch] text-base leading-relaxed text-ink-muted md:text-lg">
            Start tracking conditions, meds, and weight — then walk into vet visits with a clearer story.
          </p>
          <div className="mt-8">
            <StoreButtons />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.35, delay: 0.08, ease }}
          className="flex justify-center md:justify-end"
        >
          <QrSlot size={180} />
        </motion.div>
      </div>
    </section>
  )
}
