import { motion } from 'framer-motion'
import { HomeScreen, OnboardingScreen, VetReportScreen } from './AppScreens'
import { PhoneFrame } from './PhoneFrame'

const ease = [0.22, 1, 0.36, 1] as const

const steps = [
  {
    step: '01',
    title: 'Add your dog',
    description:
      'Create a profile once, then personalize which health areas show up in your everyday flow.',
    details: [
      'Name, breed, birthday, and weight',
      'Pick only the conditions you need',
      'Add more dogs anytime',
    ],
    screen: <OnboardingScreen />,
    label: 'Onboarding',
    tone: 'primary' as const,
  },
  {
    step: '02',
    title: 'Log what matters',
    description:
      'Capture symptoms, seizures, mobility, meds, and weight in moments — designed for busy, stressful days.',
    details: [
      'Fast logging for emergencies',
      'Medication schedules with reminders',
      'Trends you can actually read',
    ],
    screen: <HomeScreen />,
    label: 'Home',
    tone: 'surface' as const,
  },
  {
    step: '03',
    title: 'Share with your vet',
    description:
      'Turn scattered notes into a clear health summary before appointments — so nothing gets lost in the waiting room.',
    details: [
      'Structured vet reports',
      'Export or share from your phone',
      'History your clinic can use',
    ],
    screen: <VetReportScreen />,
    label: 'Vet report',
    tone: 'surface' as const,
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 border-t border-surface-border bg-surface py-20 md:py-28"
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
            How it works
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            From first profile to vet-ready clarity
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
            PawDex is built around the real rhythm of chronic care: set up once,
            log quickly, then communicate clearly.
          </p>
        </motion.div>

        <ol className="mt-16 grid gap-14 md:grid-cols-3 md:gap-8">
          {steps.map((item, index) => (
            <motion.li
              key={item.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35, delay: index * 0.07, ease }}
              className="flex h-full flex-col gap-5"
            >
              <div className="border-t-2 border-primary/30 pt-6">
                <span className="font-display text-sm font-bold text-primary">{item.step}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink-muted">{item.description}</p>
                <ul className="mt-4 space-y-2">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-2 text-sm text-ink-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <PhoneFrame className="mt-auto" label={item.label} tone={item.tone}>
                {item.screen}
              </PhoneFrame>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
