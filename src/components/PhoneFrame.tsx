import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  label?: string
  /** Match app screen canvas — onboarding is teal, most screens are cream. */
  tone?: 'surface' | 'primary'
}

/** Shared phone chrome for app screen recreations. */
export function PhoneFrame({
  children,
  className = '',
  label,
  tone = 'surface',
}: Props) {
  const screenBg = tone === 'primary' ? 'bg-primary' : 'bg-surface'

  return (
    <figure className={`m-0 ${className}`}>
      <div className="relative mx-auto w-full max-w-[280px]">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] bg-ink p-[5px] shadow-lift">
          <div
            className={`relative flex h-full flex-col overflow-hidden rounded-[1.7rem] ${screenBg}`}
          >
            <div className="pointer-events-none absolute left-1/2 top-2.5 z-10 h-4 w-24 -translate-x-1/2 rounded-pill bg-ink" />
            <div className="h-full overflow-hidden px-3 pb-4 pt-9">{children}</div>
          </div>
        </div>
      </div>
      {label && (
        <figcaption className="mt-3 text-center text-sm font-medium text-ink-muted">
          {label}
        </figcaption>
      )}
    </figure>
  )
}
