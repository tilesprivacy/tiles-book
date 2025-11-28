import type { Metadata, Viewport } from 'next'
import type React from 'react'
import { Banner, Head } from 'nextra/components'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import { Logo } from '../components/logo'
import './globals.css'
import 'nextra-theme-docs/style.css'

const title = 'Tilekit'
const description =
  'Tilekit is a Rust-based declarative, cross-platform Modelfile-based SDK that lets developers customize open models and agent experiences. Build, run, and share fine-tuned open models with ease.'

export const metadata: Metadata = {
  title: {
    default: title,
    template: '%s',
  },
  description,
  applicationName: 'Tilekit',
  metadataBase: new URL('https://tilekit.dev'),
  keywords: [
    'Tilekit',
    'Modelfile',
    'Rust SDK',
    'open models',
    'AI models',
    'model customization',
    'agent experiences',
    'Ollama',
    'machine learning',
    'LLM',
    'fine-tuning',
  ],
  authors: [{ name: 'Tilekit' }],
  openGraph: {
    title,
    description,
    url: './',
    siteName: 'Tilekit',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tileslauncher',
    creator: '@tileslauncher',
  },
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#A32026',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pageMap = await getPageMap()

  const navbar = (
    <Navbar
      logo={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Logo width={24} height={24} />
          <span>Tilekit SDK</span>
        </div>
      }
      projectLink="https://github.com/tilesprivacy/tilekit"
      chatLink="https://go.tiles.run/discord"
    />
  )

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={<Banner storageKey="Tilekit Docs">Join the community on Discord</Banner>}
          navbar={navbar}
          footer={<Footer>(C) 2025 Tiles Privacy</Footer>}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/tilesprivacy/tilekit-docs"
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
