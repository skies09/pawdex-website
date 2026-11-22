import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteShell } from './layouts/SiteShell'
import { HomePage } from './pages/HomePage'
import { LegalPage } from './pages/LegalPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { SupportPage } from './pages/SupportPage'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteShell />}>
        <Route index element={<HomePage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="legal" element={<LegalPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
