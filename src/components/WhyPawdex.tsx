import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const reasons = [
  {
    title: 'Fast when it matters',
    description: 'Emergency-friendly logging so you can capture what happened without fighting the UI.',
    icon: '/assets/activity.png',
  },
  {
    title: 'Simple for daily life',
    description: 'Only the modules you enable. No clutter from health areas your dog doesn’t need.',
    icon: '/assets/paw.png',
  },
  {
    title: 'Clear for your vet',
    description: 'Structured summaries replace scattered texts, screenshots, and half-remembered timelines.',
    icon: '/assets/vet.png',
  },
]

export function WhyPawdex() {
  return (
    <section className="scroll-mt-24 border-t border-surface-border bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.35, ease }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Why PawDex
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Calm tools for long-term dog care
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {reasons.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: index * 0.06, ease }}
              className="border-t-2 border-primary/25 pt-6"
            >
              <img src={item.icon} alt="" className="h-11 w-11" />
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
