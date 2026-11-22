import { LegalDoc } from '../components/LegalDoc'
import { supportEmail, supportSections } from '../content/legal'
import { Button } from '../components/ui/Button'

export function SupportPage() {
  return (
    <main className="border-t border-surface-border">
      <LegalDoc
        eyebrow="Help"
        title="Support"
        intro="We’re here for questions about PawDex — how tracking works, privacy, or something that isn’t behaving."
        sections={supportSections}
        related={[
          { to: '/privacy', label: 'Privacy policy' },
          { to: '/legal', label: 'Legal & disclaimer' },
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 pb-16 md:px-6">
        <div className="rounded-lg bg-primary-soft/50 p-6 ring-1 ring-surface-border">
          <p className="font-display text-lg font-semibold text-ink">Email us</p>
          <p className="mt-2 text-sm text-ink-muted">
            Prefer to write directly? Use the address below — placeholder until the live inbox is confirmed.
          </p>
          <div className="mt-4">
            <Button href={`mailto:${supportEmail}`} variant="primary">
              Email {supportEmail}
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
