import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { OpenGraph } from '../components/OpenGraph'
import '../public/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  // Get page-specific metadata from frontmatter or props
  const pageTitle = (pageProps as any)?.title || 'Tilekit SDK Developer Preview'
  const openGraphTitle =
    (pageProps as any)?.ogTitle ||
    (pageProps as any)?.title ||
    'Tilekit SDK Developer Preview'
  const pageDescription = (pageProps as any)?.description || "Tilekit is a Rust-based declarative, cross-platform Modelfile-based SDK that lets developers customize open models and agent experiences. Build, run, and share fine-tuned open models with ease."
  const pageType = (pageProps as any)?.type || 'website'
  
  return (
    <>
      <OpenGraph
        title={openGraphTitle}
        documentTitle={pageTitle}
        description={pageDescription}
        type={pageType}
        url={router.asPath}
      />
      <Component {...pageProps} />
    </>
  )
}
