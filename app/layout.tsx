import type { ReactNode } from 'react'
import '../public/styles/globals.css'

export const metadata = {
  title: 'Tilekit',
  description:
    'Tilekit is a Rust-based declarative, cross-platform Modelfile-based SDK that lets developers customize open models and agent experiences.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
