import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const conditions = [
  {
    title: 'Heart & breathing',
    description: 'Log breathing rate, episodes, and notes when something feels off.',
    icon: '/assets/heart.png',
  },
  {
    title: 'Seizures / epilepsy',
    description: 'Capture timing, duration, and recovery notes for clearer follow-up.',
    icon: '/assets/seizures.png',
  },
  {
    title: 'Arthritis & mobility',
    description: 'Track stiffness, comfort, and how movement changes over weeks.',
    icon: '/assets/arthritis.png',
  },
  {
    title: 'Allergies & skin',
    description: 'Record itch, flare-ups, ears, and what may have triggered them.',
    icon: '/assets/allergies.png',
  },
  {
    title: 'Digestion',
    description: 'Keep stool, vomiting, and stomach patterns organized in one place.',
    icon: '/assets/digestion.png',
  },
  {
    title: 'Diabetes',
    description: 'Log insulin and glucose readings so trends stay easy to review.',
    icon: '/assets/diabetes.png',
  },
  {
    title: 'Kidney & urinary',
    description: 'Monitor water intake, urine changes, and accidents over time.',
    icon: '/assets/kidney.png',
  },
  {
    title: 'Anxiety & behaviour',
    description: 'Note stress, triggers, and behaviour shifts that matter to your vet.',
    icon: '/assets/anxiety.png',
  },
]

export function TrackConditions() {
  return (
    <section
      id="track"
      className="scroll-mt-24 border-t border-surface-border bg-primary-soft/35 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.35, ease }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            What you can track
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Choose the health areas your dog actually needs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
            PawDex isn’t a generic journal. You enable modules for the conditions you’re managing —
            and leave the rest out of the way.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {conditions.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: (index % 4) * 0.04, ease }}
              className="border-t border-primary/25 pt-5"
            >
              <img src={item.icon} alt="" className="h-11 w-11" />
              <h3 className="mt-4 font-display text-base font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
