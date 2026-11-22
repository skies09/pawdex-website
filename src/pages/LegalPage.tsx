import { LegalDoc } from '../components/LegalDoc'
import { legalSections } from '../content/legal'

export function LegalPage() {
  return (
    <main className="border-t border-surface-border">
      <LegalDoc
        eyebrow="Legal"
        title="Legal & disclaimer"
        intro="Important information about how PawDex should be used."
        sections={legalSections}
        related={[
          { to: '/privacy', label: 'Privacy policy' },
          { to: '/support', label: 'Support' },
        ]}
      />
    </main>
  )
}
