import type { ReactNode } from 'react'

/**
 * HTML recreations of real PawDex screens (matched to app layout — not photos).
 * Swap for real device screenshots later by dropping PNGs into public/assets/screens/.
 */

export function HomeScreen() {
  const weightBars = [11.8, 12.0, 11.9, 12.2, 12.4]
  const maxWeight = Math.max(...weightBars)

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="" className="h-9 w-9" />
          <p className="font-display text-base font-bold text-ink">PawDex</p>
        </div>
        <SettingsGlyph />
      </div>
      <p className="text-sm text-ink-muted">Hi, Bella</p>

      <ScreenCard>
        <Row icon="/assets/weight.png" title="Track weight" subtitle="Latest: 12.4 kg" />
        <div className="mt-2.5 rounded-md bg-surface px-2.5 py-2">
          <p className="mb-1.5 text-[10px] text-ink-muted">Last 5 entries (kg)</p>
          <div className="flex h-6 items-end gap-1">
            {weightBars.map((value, i) => {
              const isLatest = i === weightBars.length - 1
              return (
                <div
                  key={i}
                  className={`flex-1 rounded-sm ${isLatest ? 'bg-primary' : 'bg-secondary/55'}`}
                  style={{ height: `${Math.max((value / maxWeight) * 100, 20)}%` }}
                />
              )
            })}
          </div>
        </div>
        <Pill>Log weight</Pill>
      </ScreenCard>

      <ScreenCard>
        <Row
          icon="/assets/seizures.png"
          title="Seizures"
          subtitle="Start timer quickly for Bella"
        />
        <Pill>Start seizure timer</Pill>
      </ScreenCard>

      <ScreenCard>
        <Row icon="/assets/heart.png" title="Breathing" subtitle="Latest: 28 / min" />
        <Pill>Log breathing</Pill>
      </ScreenCard>
    </div>
  )
}

export function MedsScreen() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <img src="/assets/medication.png" alt="" className="h-9 w-9" />
        <p className="font-display text-lg font-bold text-ink">Health</p>
      </div>

      <div className="flex rounded-pill bg-surface-card p-1 ring-1 ring-surface-border">
        <span className="flex-1 rounded-pill bg-primary px-3 py-1.5 text-center text-xs font-semibold text-white">
          Medication
        </span>
        <span className="flex-1 px-3 py-1.5 text-center text-xs font-semibold text-ink-muted">
          Vaccines
        </span>
      </div>

      <p className="text-xs leading-relaxed text-ink-muted">
        Set up simple daily reminders alongside your vet’s instructions.
      </p>

      {[
        { name: 'Phenobarbital', dose: '60 mg', time: '8:00 AM' },
        { name: 'Heart tablet', dose: '1 tablet', time: '6:30 PM' },
        { name: 'Joint support', dose: '1 scoop', time: '8:00 PM' },
      ].map((med) => (
        <ScreenCard key={med.name}>
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-display text-sm font-semibold text-ink">{med.name}</p>
              <p className="text-xs text-ink-muted">
                {med.dose} · Daily at {med.time}
              </p>
            </div>
            <span className="rounded-pill bg-primary-soft px-2 py-0.5 text-[10px] font-semibold text-primary">
              Reminder on
            </span>
          </div>
        </ScreenCard>
      ))}

      <Pill className="self-start">Add medication</Pill>
    </div>
  )
}

export function WeightScreen() {
  const logs = [
    { date: '21 Nov', value: '12.4 kg' },
    { date: '14 Nov', value: '12.2 kg' },
    { date: '7 Nov', value: '11.9 kg' },
  ]

  return (
    <div className="flex flex-col gap-3">
      <p className="font-display text-lg font-bold text-ink">Weight</p>
      <p className="text-xs leading-relaxed text-ink-muted">
        Log weight over time to monitor trends. Use alongside your vet’s advice.
      </p>

      <div className="flex items-center justify-between rounded-lg bg-surface-card px-3 py-2.5 ring-1 ring-surface-border">
        <div className="flex items-center gap-2">
          <img src="/assets/weight.png" alt="" className="h-6 w-6" />
          <span className="text-xs font-medium text-ink-muted">Latest</span>
        </div>
        <span className="font-display text-base font-bold text-ink">12.4 kg</span>
      </div>

      <ScreenCard>
        <Row
          icon="/assets/weight.png"
          title="Log weight"
          subtitle="Weight in kg for Bella"
        />
        <div className="mt-2.5 flex gap-2">
          <div className="flex-1 rounded-md bg-surface px-3 py-2 text-xs text-ink-muted ring-1 ring-surface-border">
            12.4
          </div>
          <div className="flex rounded-md bg-surface p-0.5 ring-1 ring-surface-border">
            <span className="rounded-md bg-primary px-2.5 py-1.5 text-xs font-semibold text-white">
              kg
            </span>
            <span className="px-2.5 py-1.5 text-xs font-semibold text-ink-muted">lb</span>
          </div>
        </div>
        <Pill>Save weight</Pill>
      </ScreenCard>

      <div className="space-y-2">
        <p className="text-xs font-semibold text-ink">Recent logs</p>
        {logs.map((log) => (
          <div
            key={log.date}
            className="flex items-center justify-between rounded-lg bg-surface-card px-3 py-2 ring-1 ring-surface-border"
          >
            <span className="text-xs text-ink-muted">{log.date}</span>
            <span className="text-sm font-semibold text-ink">{log.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function VetReportScreen() {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-display text-lg font-bold text-ink">Vet report</p>
      <p className="font-display text-sm font-semibold text-primary">Bella</p>
      <p className="text-xs leading-relaxed text-ink-muted">
        A clear health summary for your vet. PDFs include a simple graph and a detailed table.
      </p>

      <Pill>Download full report</Pill>

      {[
        { icon: '/assets/weight.png', title: 'Weight', meta: '5 entries' },
        { icon: '/assets/medication.png', title: 'Medications', meta: '3 active' },
        { icon: '/assets/seizures.png', title: 'Seizures', meta: '2 logged' },
        { icon: '/assets/heart.png', title: 'Breathing', meta: '8 checks' },
      ].map((section) => (
        <div
          key={section.title}
          className="flex items-center justify-between rounded-lg bg-surface-card px-3 py-2.5 ring-1 ring-surface-border"
        >
          <div className="flex items-center gap-2.5">
            <img src={section.icon} alt="" className="h-7 w-7" />
            <div>
              <p className="text-sm font-semibold text-ink">{section.title}</p>
              <p className="text-xs text-ink-muted">{section.meta}</p>
            </div>
          </div>
          <span className="text-xs font-semibold text-primary">PDF</span>
        </div>
      ))}
    </div>
  )
}

/** Matches Onboarding step 4 — select conditions on teal canvas. */
export function OnboardingScreen() {
  const conditions = [
    {
      icon: '/assets/heart.png',
      label: 'Heart',
      description: 'Heart and breathing issues',
      selected: true,
    },
    {
      icon: '/assets/seizures.png',
      label: 'Seizures / epilepsy',
      description: 'Seizures or fits',
      selected: true,
    },
    {
      icon: '/assets/arthritis.png',
      label: 'Arthritis & mobility',
      description: 'Stiffness, pain, mobility',
      selected: false,
    },
    {
      icon: '/assets/allergies.png',
      label: 'Allergies & skin',
      description: 'Itch, flare-ups, ears',
      selected: false,
    },
    {
      icon: '/assets/digestion.png',
      label: 'Digestion',
      description: 'Stomach, stool, vomiting',
      selected: false,
    },
  ]

  return (
    <div className="flex h-full flex-col text-white">
      <div className="mb-2 flex justify-end">
        <p className="font-display text-[15px] font-bold leading-none">PawDex</p>
      </div>
      <div className="mb-3 flex justify-end gap-1.5" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i < 4 ? 'bg-white/60' : i === 4 ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      <div className="w-full rounded-lg border border-white/50 bg-primary-hover p-3">
        <p className="mb-1.5 font-display text-[15px] font-bold leading-snug text-primary">
          What conditions do you want to keep an eye on?
        </p>
        <div className="mb-2.5 space-y-0.5 text-[11px] leading-snug text-primary/75">
          <p>Choose up to 3 to start. You can change these later.</p>
          <p>2 of 3 selected</p>
        </div>

        <div className="mb-2.5 space-y-2">
          {conditions.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 rounded-md border-[1.5px] border-primary px-2 py-2 ${
                item.selected ? 'bg-primary' : 'bg-white'
              }`}
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  item.selected ? 'bg-white' : 'bg-surface'
                }`}
              >
                <img src={item.icon} alt="" className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p
                  className={`font-display text-[11px] font-bold leading-tight ${
                    item.selected ? 'text-white' : 'text-primary'
                  }`}
                >
                  {item.label}
                </p>
                <p
                  className={`text-[10px] leading-tight ${
                    item.selected ? 'text-white/90' : 'text-primary/75'
                  }`}
                >
                  {item.description}
                </p>
              </div>
              <div
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                  item.selected
                    ? 'border-white bg-white'
                    : 'border-primary bg-transparent'
                }`}
              >
                {item.selected && (
                  <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="#1F6F78"
                      d="M9.5 16.2 5.3 12l-1.4 1.4 5.6 5.6L20.1 8.4 18.7 7z"
                    />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="inline-flex min-h-9 w-full items-center justify-center rounded-pill bg-primary text-[13px] font-semibold text-white shadow-soft">
          Next
        </div>
      </div>
    </div>
  )
}

function ScreenCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg bg-surface-card p-3 ring-1 ring-surface-border shadow-soft">
      {children}
    </div>
  )
}

function Row({
  icon,
  title,
  subtitle,
}: {
  icon: string
  title: string
  subtitle: string
}) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface">
        <img src={icon} alt="" className="h-7 w-7" />
      </div>
      <div className="min-w-0">
        <p className="font-display text-sm font-semibold text-ink">{title}</p>
        <p className="text-xs text-ink-muted">{subtitle}</p>
      </div>
    </div>
  )
}

function Pill({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`mt-2.5 inline-flex min-h-8 items-center rounded-pill bg-primary px-3 text-xs font-semibold text-white ${className}`}
    >
      {children}
    </div>
  )
}

/** Official Ionicons `settings-outline` — same glyph as HomeScreen. */
function SettingsGlyph() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-card ring-1 ring-surface-border">
      <img
        src="/assets/settings-outline.svg"
        alt=""
        width={24}
        height={24}
        className="h-6 w-6"
      />
    </div>
  )
}
