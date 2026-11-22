/**
 * Replace these when App Store / Play Store links and QR assets are ready.
 */
export const storeLinks = {
  ios: '#download',
  android: '#download',
} as const

/** In-app routes on this site (also good App Store Connect URLs once hosted). */
export const legalLinks = {
  privacy: '/privacy',
  support: '/support',
  legal: '/legal',
} as const

/** Drop a QR image at /public/assets/qr-code.png and set this to true. */
export const qrReady = false
