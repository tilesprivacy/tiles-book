import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Logo } from './components/logo'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Logo width={24} height={24} />
      <span>Tilekit</span>
    </div>
  ),
  project: {
    link: 'https://github.com/tileshq',
  },
  chat: {
    link: 'https://go.tiles.run/discord',
  },
  docsRepositoryBase: 'https://github.com/tileslauncher',
  footer: {
    text: 'Tilekit',
  },
  // OpenGraph configuration
  // Custom theme colors
  primaryHue: {
    dark: 0, // Black (0 degrees = black)
    light: 0, // Black (0 degrees = black)
  },
  primarySaturation: {
    dark: 0, // 0% saturation for pure black/white
    light: 0, // 0% saturation for pure black/white
  },
  // Custom theme provider for OpenGraph
  components: {
    // This will be handled by our custom _app.tsx
  },
  // OpenGraph configuration
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:site_name" content="Tilekit" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:site" content="@tileslauncher" />
      <meta name="twitter:creator" content="@tileslauncher" />
      <meta name="theme-color" content="#667eea" />
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="Tilekit" />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  ),
}

export default config
