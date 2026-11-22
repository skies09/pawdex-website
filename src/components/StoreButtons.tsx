import type { MouseEvent } from 'react'
import { storeLinks } from '../config'

type Props = {
  className?: string
  /** When true, downloads are not live yet (buttons still shown; clicks are held). */
  comingSoon?: boolean
  /** Use solid filled buttons (hero) instead of outlined coming-soon styling. */
  solid?: boolean
}

/**
 * Dual store CTAs. Primary/secondary hierarchy: Play uses brand primary when live;
 * App Store uses near-black (platform convention).
 */
export function StoreButtons({
  className = '',
  comingSoon = true,
  solid = false,
}: Props) {
  const holdForLaunch = (event: MouseEvent<HTMLAnchorElement>) => {
    if (comingSoon) event.preventDefault()
  }

  const base =
    'inline-flex min-h-12 items-center gap-3 rounded-pill px-5 py-2.5 transition-colors duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-primary'

  const useSolid = solid || !comingSoon

  const iosClass = useSolid
    ? `${base} bg-ink text-white hover:bg-ink/90 active:bg-ink ${comingSoon ? 'cursor-not-allowed' : ''}`
    : `${base} cursor-not-allowed bg-surface-card text-ink ring-1 ring-surface-border`

  const androidClass = useSolid
    ? `${base} bg-primary text-white hover:bg-primary-dark active:bg-primary-dark ${comingSoon ? 'cursor-not-allowed' : ''}`
    : `${base} cursor-not-allowed bg-surface-card text-ink ring-1 ring-surface-border`

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <a
          href={storeLinks.ios}
          className={iosClass}
          aria-label={comingSoon ? 'App Store download coming soon' : 'Download on the App Store'}
          aria-disabled={comingSoon || undefined}
          onClick={holdForLaunch}
        >
          <AppleIcon />
          <span className="text-left leading-tight">
            <span
              className={`block text-xs font-medium ${useSolid ? 'text-white/80' : 'text-ink-muted'}`}
            >
              {comingSoon ? 'Coming soon on the' : 'Download on the'}
            </span>
            <span
              className={`block text-sm font-semibold tracking-tight ${useSolid ? 'text-white' : 'text-ink'}`}
            >
              App Store
            </span>
          </span>
        </a>

        <a
          href={storeLinks.android}
          className={androidClass}
          aria-label={comingSoon ? 'Google Play download coming soon' : 'Get it on Google Play'}
          aria-disabled={comingSoon || undefined}
          onClick={holdForLaunch}
        >
          <PlayIcon />
          <span className="text-left leading-tight">
            <span
              className={`block text-xs font-medium ${useSolid ? 'text-white/80' : 'text-ink-muted'}`}
            >
              {comingSoon ? 'Coming soon on' : 'Get it on'}
            </span>
            <span
              className={`block text-sm font-semibold tracking-tight ${useSolid ? 'text-white' : 'text-ink'}`}
            >
              Google Play
            </span>
          </span>
        </a>
      </div>
    </div>
  )
}

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.7 12.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.7-2.8-.7-1.4 0-2.8.9-3.5 2.2-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7s1.6.7 2.8.7c1.2 0 1.9-1 2.6-2 .8-1.2 1.1-2.3 1.1-2.4-.1 0-2.2-.8-2.2-3.7Zm-2-6.1c.6-.7 1-1.7.9-2.7-0.9.1-1.9.6-2.5 1.3-.6.6-1.1 1.6-1 2.6 1 .1 1.9-.5 2.6-1.2Z" />
    </svg>
  )
}

function PlayIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M4.5 3.3v17.4c0 .7.8 1.1 1.4.7l14-8.7c.6-.4.6-1.2 0-1.6l-14-8.5c-.6-.4-1.4 0-1.4.7Z" />
    </svg>
  )
}
