import { motion } from 'framer-motion'
import { MedsScreen, VetReportScreen, WeightScreen } from './AppScreens'
import { PhoneFrame } from './PhoneFrame'

const ease = [0.22, 1, 0.36, 1] as const

const pillars = [
  {
    id: 'medications',
    eyebrow: 'Medications',
    title: 'Reminders that match real dosing schedules',
    description:
      'Add each medication with the time it should be given. PawDex reminds you when it’s due so consistency doesn’t depend on memory alone.',
    points: [
      'Daily or custom schedules',
      'Dose notes your vet will care about',
      'Built for multi-med routines',
    ],
    icon: '/assets/medication.png',
    screen: <MedsScreen />,
  },
  {
    id: 'weight',
    eyebrow: 'Weight & trends',
    title: 'See change early — not just at the appointment',
    description:
      'Log weight by date and watch the pattern form. Small shifts are easier to discuss when you have a clear history.',
    points: [
      'Simple date-based entries',
      'Trend view at a glance',
      'Useful context beside condition logs',
    ],
    icon: '/assets/weight.png',
    screen: <WeightScreen />,
  },
  {
    id: 'reports',
    eyebrow: 'Vet reports',
    title: 'Walk into appointments with the full story',
    description:
      'Export a structured summary of conditions, meds, and weight so your vet isn’t reconstructing history from memory.',
    points: [
      'Downloadable / shareable reports',
      'Clearer conversations in clinic',
      'Less “I think it started last month…”',
    ],
    icon: '/assets/vet.png',
    screen: <VetReportScreen />,
  },
]

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 bg-primary py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.35, ease }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-secondary">
            Everyday tools
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            More than a notes app for dog health
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
            Conditions, medications, weight, and reports work together — so home care and clinic
            visits stay connected.
          </p>
        </motion.div>

        <div className="mt-16 space-y-20 md:space-y-24">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: 0.04, ease }}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-14 ${
                index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white shadow-soft">
                    <img src={pillar.icon} alt="" className="h-8 w-8" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-secondary">
                    {pillar.eyebrow}
                  </p>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
                  {pillar.title}
                </h3>
                <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-white/80">
                  {pillar.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-white/85">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mx-auto w-full max-w-[280px] md:mx-0 md:justify-self-center">
                <PhoneFrame>{pillar.screen}</PhoneFrame>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
