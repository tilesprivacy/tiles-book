import Head from 'next/head'

interface OpenGraphProps {
  title?: string
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
  title = 'Tilekit is a declarative, cross-platform Modelfile-based SDK that enables developers to customize open models and agent experiences.',
  description = "We're building the open source technology to make local-first personal models ubiquitous. Our goal is to evolve Modelfile in collaboration with the community and establish it as the standard for model customization.",
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
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  
  // Generate dynamic OG image URL
  const ogImageUrl = image || `${baseUrl}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&type=${type}`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content={imageWidth.toString()} />
      <meta property="og:image:height" content={imageHeight.toString()} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#667eea" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Head>
  )
}

export default OpenGraph
