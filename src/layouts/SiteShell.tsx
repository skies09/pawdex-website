import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Button } from '../components/ui/Button'

const homeLinks = [
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#track', label: 'What you track' },
  { href: '/#features', label: 'Features' },
  { href: '/#download', label: 'Download' },
] as const

export function SiteShell() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-surface text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:shadow-soft"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-surface-border/80 bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2.5 rounded-md">
            <img src="/assets/logo.png" alt="" className="h-9 w-9" />
            <span className="font-display text-lg font-bold tracking-tight text-ink">
              PawDex
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {homeLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-pill px-3 py-2 text-sm font-medium text-ink-muted transition-colors duration-200 ease-out hover:bg-primary-soft/50 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            {!onHome && (
              <>
                <Link
                  to="/privacy"
                  className={`rounded-pill px-3 py-2 text-sm font-medium transition-colors duration-200 ease-out hover:bg-primary-soft/50 hover:text-primary ${
                    pathname === '/privacy' ? 'text-primary' : 'text-ink-muted'
                  }`}
                >
                  Privacy
                </Link>
                <Link
                  to="/support"
                  className={`rounded-pill px-3 py-2 text-sm font-medium transition-colors duration-200 ease-out hover:bg-primary-soft/50 hover:text-primary ${
                    pathname === '/support' ? 'text-primary' : 'text-ink-muted'
                  }`}
                >
                  Support
                </Link>
              </>
            )}
          </nav>

          <Button href="/#download" variant="primary" size="md">
            Get the app
          </Button>
        </div>
      </header>

      <div id="main">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}
