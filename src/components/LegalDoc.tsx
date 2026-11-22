import { Link } from 'react-router-dom'
import { supportEmail } from '../content/legal'

type Section = {
  title: string
  body: string
}

type Props = {
  eyebrow: string
  title: string
  updated?: string
  intro?: string
  sections: readonly Section[]
  related?: { to: string; label: string }[]
}

export function LegalDoc({ eyebrow, title, updated, intro, sections, related }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">{eyebrow}</p>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
        {title}
      </h1>
      {updated && <p className="mt-3 text-sm text-ink-muted">Last updated: {updated}</p>}
      {intro && <p className="mt-5 text-base leading-relaxed text-ink-muted">{intro}</p>}

      <div className="mt-10 space-y-4">
        {sections.map((section) => (
          <section
            key={section.title}
            className="rounded-lg bg-surface-card p-5 ring-1 ring-surface-border md:p-6"
          >
            <h2 className="font-display text-lg font-semibold text-ink">{section.title}</h2>
            <p className="mt-2 text-base leading-relaxed text-ink-muted">
              {section.body.includes(supportEmail) ? (
                <>
                  {section.body.split(supportEmail)[0]}
                  <a
                    href={`mailto:${supportEmail}`}
                    className="font-medium text-primary underline-offset-2 hover:underline"
                  >
                    {supportEmail}
                  </a>
                  {section.body.split(supportEmail)[1]}
                </>
              ) : (
                section.body
              )}
            </p>
          </section>
        ))}
      </div>

      {related && related.length > 0 && (
        <nav className="mt-10 flex flex-wrap gap-4 text-sm font-semibold text-primary" aria-label="Related">
          {related.map((item) => (
            <Link key={item.to} to={item.to} className="hover:text-primary-dark">
              {item.label} →
            </Link>
          ))}
        </nav>
      )}
    </article>
  )
}
