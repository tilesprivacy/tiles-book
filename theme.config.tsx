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
    link: 'https://github.com/tileslauncher',
  },
  chat: {
    link: 'https://go.tiles.run/discord',
  },
  docsRepositoryBase: 'https://github.com/tileslauncher',
  footer: {
    text: 'Tilekit',
  },
}

export default config
