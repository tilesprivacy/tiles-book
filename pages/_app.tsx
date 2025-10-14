import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { OpenGraph } from '../components/OpenGraph'
import '../public/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  // Get page-specific metadata from frontmatter or props
  const pageTitle = (pageProps as any)?.title || 'Tilekit is a declarative, cross-platform Modelfile-based SDK that enables developers to customize open models and agent experiences.'
  const pageDescription = (pageProps as any)?.description || "We're building the open source technology to make local-first personal models ubiquitous. Our goal is to evolve Modelfile in collaboration with the community and establish it as the standard for model customization."
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
