import { qrReady } from '../config'

type Props = {
  className?: string
  size?: number
}

/**
 * Empty state pattern when QR is not ready: clear headline + next step.
 * Frame uses border only (no shadow) — Card rule: shadow OR border.
 */
export function QrSlot({ className = '', size = 176 }: Props) {
  return (
    <figure className={`m-0 flex flex-col items-center gap-3 ${className}`} style={{ width: size }}>
      <div
        className="flex items-center justify-center overflow-hidden rounded-lg bg-surface-card ring-1 ring-surface-border"
        style={{ width: size, height: size }}
        role="img"
        aria-label={qrReady ? 'Scan to download PawDex' : 'QR code coming soon'}
      >
        {qrReady ? (
          <img
            src="/assets/qr-code.png"
            alt="QR code to download PawDex"
            className="h-full w-full object-contain p-3"
          />
        ) : (
          <div className="flex h-[calc(100%-1.25rem)] w-[calc(100%-1.25rem)] flex-col items-center justify-center gap-2 rounded-md border border-dashed border-primary/40 bg-primary-soft/40 px-3 text-center">
            <img src="/assets/paw.png" alt="" className="h-8 w-8 opacity-80" />
            <p className="font-display text-sm font-semibold text-ink">QR coming soon</p>
            <p className="text-xs leading-snug text-ink-muted">
              We’ll place the store QR here at launch.
            </p>
          </div>
        )}
      </div>
      <figcaption className="text-center text-sm font-medium text-ink-muted">
        {qrReady ? 'Scan to download' : 'Scan when available'}
      </figcaption>
    </figure>
  )
}
