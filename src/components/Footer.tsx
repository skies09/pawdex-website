import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface pb-12 pt-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-start md:justify-between md:px-6">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="" className="h-9 w-9" />
          <div>
            <p className="font-display text-sm font-bold text-ink">PawDex</p>
            <p className="text-sm text-ink-muted">Dog health tracking for calmer vet visits.</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
          <nav
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink-muted"
            aria-label="Product"
          >
            <a href="/#how-it-works" className="transition-colors duration-200 hover:text-primary">
              How it works
            </a>
            <a href="/#track" className="transition-colors duration-200 hover:text-primary">
              What you track
            </a>
            <a href="/#features" className="transition-colors duration-200 hover:text-primary">
              Features
            </a>
            <a href="/#download" className="transition-colors duration-200 hover:text-primary">
              Download
            </a>
          </nav>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink-muted"
            aria-label="Legal"
          >
            <Link to="/privacy" className="transition-colors duration-200 hover:text-primary">
              Privacy policy
            </Link>
            <Link to="/support" className="transition-colors duration-200 hover:text-primary">
              Support
            </Link>
            <Link to="/legal" className="transition-colors duration-200 hover:text-primary">
              Legal & disclaimer
            </Link>
          </nav>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-sm text-ink-muted md:px-6">
        © {new Date().getFullYear()} PawDex. All rights reserved.
      </p>
    </footer>
  )
}
