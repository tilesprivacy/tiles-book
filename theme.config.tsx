import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Logo } from './components/logo'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Logo width={24} height={24} />
      <span>Tilekit SDK</span>
    </div>
  ),
  project: {
    link: 'https://github.com/tilesprivacy/tilekit',
  },
  chat: {
    link: 'https://go.tiles.run/discord',
  },
  docsRepositoryBase: 'https://github.com/tilesprivacy/tilekit-docs',
  editLink: {
    component: ({ children, className }: { children: React.ReactNode; className?: string }) => (
      <a
        href="https://github.com/tilesprivacy/tilekit-docs/blob/main/pages/index.mdx"
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    ),
  },
  footer: {
    text: '(C) 2025 Tiles Privacy',
  },
  // OpenGraph configuration
  // Custom theme colors
  primaryHue: {
    dark: 357, // #A32026 red hue
    light: 357, // #A32026 red hue
  },
  primarySaturation: {
    dark: 67, // 67% saturation for #A32026
    light: 67, // 67% saturation for #A32026
  },
  // Custom theme provider for OpenGraph
  components: {
    // This will be handled by our custom _app.tsx
  },
  // OpenGraph configuration
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content="Tilekit, Modelfile, Rust SDK, open models, AI models, model customization, agent experiences, Ollama, machine learning, LLM, fine-tuning" />
      <meta name="author" content="Tilekit" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta httpEquiv="content-language" content="en-US" />
      <meta property="og:site_name" content="Tilekit" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:site" content="@tileslauncher" />
      <meta name="twitter:creator" content="@tileslauncher" />
      <meta name="theme-color" content="#A32026" />
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="Tilekit" />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  ),
  // Remove "- Nextra" suffix from titles
  useNextSeoProps() {
    return {
      titleTemplate: '%s',
      defaultTitle: 'Tilekit',
    }
  },
}

export default config
