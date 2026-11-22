type Props = {
  className?: string
}

/** Product visual for the download section — replaces the old QR placeholder. */
export function DownloadVisual({ className = '' }: Props) {
  return (
    <figure className={`m-0 w-full max-w-[280px] ${className}`}>
      <div className="relative overflow-hidden rounded-[2rem] bg-primary-soft">
        <img
          src="/assets/dog.png"
          alt="A dog looking toward the camera — the kind of companion PawDex helps you care for"
          className="aspect-[4/5] w-full object-cover object-[center_20%]"
          loading="lazy"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-primary-soft/20"
          aria-hidden="true"
        />
      </div>
      <figcaption className="mt-4 flex items-center justify-center gap-2.5">
        <img
          src="/assets/logo.png"
          alt=""
          className="h-9 w-9"
        />
        <span className="font-display text-sm font-semibold text-ink">
          Made for dog parents
        </span>
      </figcaption>
    </figure>
  )
}
