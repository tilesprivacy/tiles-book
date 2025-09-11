import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { OpenGraph } from '../components/OpenGraph'
import '../public/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  // Get page-specific metadata from frontmatter or props
  const pageTitle = (pageProps as any)?.title || 'Tilekit'
  const pageDescription = (pageProps as any)?.description || 'Tilekit makes it easier to build, run, and share fine-tuned open models.'
  const pageType = (pageProps as any)?.type || 'website'
  
  return (
    <>
      <OpenGraph
        title={pageTitle}
        description={pageDescription}
        type={pageType}
        url={router.asPath}
      />
      <Component {...pageProps} />
    </>
  )
}
