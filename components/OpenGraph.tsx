import Head from 'next/head'

function removeNextra(text: string): string {
  if (!text) return text
  // Remove "nextra" (case-insensitive) from the text
  // Handles various patterns like " - Nextra", " | Nextra", "Nextra -", etc.
  return text
    .replace(/\s*[-|–—]\s*nextra\s*/gi, '')
    .replace(/\s*nextra\s*[-|–—]\s*/gi, '')
    .replace(/\s+nextra\s+/gi, ' ')
    .replace(/^nextra\s+/gi, '')
    .replace(/\s+nextra$/gi, '')
    .trim()
}

interface OpenGraphProps {
  title?: string
  documentTitle?: string
  description?: string
  type?: 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other'
  url?: string
  image?: string
  imageWidth?: number
  imageHeight?: number
  siteName?: string
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  twitterSite?: string
  twitterCreator?: string
}

export function OpenGraph({
  title = 'Tilekit: Modelfile based SDK that lets developers customize open models and agent experiences.',
  documentTitle,
  description = "Tilekit is a Rust-based declarative, cross-platform Modelfile-based SDK that lets developers customize open models and agent experiences. Build, run, and share fine-tuned open models with ease.",
  type = 'website',
  url,
  image,
  imageWidth = 1200,
  imageHeight = 630,
  siteName = 'Tilekit',
  twitterCard = 'summary_large_image',
  twitterSite = '@tileslauncher',
  twitterCreator = '@tileslauncher',
}: OpenGraphProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tiles.run'
  const sanitizedTitle = removeNextra(title)
  const sanitizedDocumentTitle = removeNextra(documentTitle || title)
  const sanitizedDescription = removeNextra(description)
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl

  // Generate dynamic OpenGraph image using the API endpoint
  const ogImageUrl = image || `${baseUrl}/api/og?title=${encodeURIComponent(sanitizedTitle)}&description=${encodeURIComponent(sanitizedDescription)}&type=${type}`

  // Structured Data (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebSite',
    name: siteName,
    headline: sanitizedTitle,
    description: sanitizedDescription,
    url: fullUrl,
    image: ogImageUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Tilekit',
      url: baseUrl,
    },
    author: {
      '@type': 'Organization',
      name: 'Tilekit',
      url: baseUrl,
    },
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{sanitizedDocumentTitle}</title>
      <meta name="description" content={sanitizedDescription} />
      <meta name="keywords" content="Tilekit, Modelfile, Rust SDK, open models, AI models, model customization, agent experiences, Ollama, machine learning, LLM, fine-tuning" />
      <meta name="author" content="Tilekit" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta httpEquiv="content-language" content="en-US" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={sanitizedTitle} />
      <meta property="og:description" content={sanitizedDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content={imageWidth.toString()} />
      <meta property="og:image:height" content={imageHeight.toString()} />
      <meta property="og:image:alt" content={sanitizedTitle} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={sanitizedTitle} />
      <meta name="twitter:description" content={sanitizedDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={sanitizedTitle} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#667eea" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Favicon Links */}
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  )
}

export default OpenGraph
