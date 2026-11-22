import { LegalDoc } from '../components/LegalDoc'
import { privacyPolicyLastUpdated, privacySections } from '../content/legal'

export function PrivacyPage() {
  return (
    <main className="border-t border-surface-border">
      <LegalDoc
        eyebrow="Legal"
        title="Privacy policy"
        updated={privacyPolicyLastUpdated}
        sections={privacySections}
        related={[
          { to: '/support', label: 'Support' },
          { to: '/legal', label: 'Legal & disclaimer' },
        ]}
      />
    </main>
  )
}
