export interface OpenGraphData {
  title: string
  documentTitle?: string
  description: string
  type: 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other'
  url?: string
  image?: string
  imageWidth?: number
  imageHeight?: number
  siteName?: string
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  twitterSite?: string
  twitterCreator?: string
}

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

export function generateOpenGraphData(
  frontmatter: Record<string, any> = {},
  content?: string,
  path?: string
): OpenGraphData {
  // Extract title from frontmatter or use global default
  const rawTitle = frontmatter.ogTitle ||
    frontmatter.title ||
    'Tiles Book: Learn about decentralized memory networks.'
  const rawDocumentTitle = frontmatter.title ||
    'Tiles Book: Learn about decentralized memory networks.'
  
  // Remove "nextra" from titles
  const title = removeNextra(rawTitle)
  const documentTitle = removeNextra(rawDocumentTitle)
  
  // Extract description from frontmatter or generate from content
  const rawDescription = frontmatter.description || 
    frontmatter.excerpt ||
    (content ? extractDescription(content) : "Tiles book documents Tiles, the consumer offering, and Tilekit, the developer-facing, Rust-based Modelfile SDK.")
  
  // Remove "nextra" from description
  const description = removeNextra(rawDescription)
  
  // Determine content type based on path or frontmatter
  const type = frontmatter.type || 
    (path?.includes('/blog/') ? 'article' : 'website')
  
  // Generate OG image URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://book.tiles.run'
  const ogImageUrl = frontmatter.image || `${baseUrl}/og.png`
  
  return {
    title,
    documentTitle,
    description,
    type,
    url: path,
    image: ogImageUrl,
    imageWidth: frontmatter.imageWidth || 1200,
    imageHeight: frontmatter.imageHeight || 630,
    siteName: frontmatter.siteName || 'Tilekit',
    twitterCard: frontmatter.twitterCard || 'summary_large_image',
    twitterSite: frontmatter.twitterSite || '@tileslauncher',
    twitterCreator: frontmatter.twitterCreator || '@tileslauncher',
  }
}

function extractDescription(content: string, maxLength: number = 160): string {
  // Remove markdown syntax and extract plain text
  const plainText = content
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Convert links to text
    .replace(/[*_`~]/g, '') // Remove markdown formatting
    .replace(/#{1,6}\s+/g, '') // Remove headers
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim()
  
  // Extract first paragraph or sentence
  const firstParagraph = plainText.split('\n\n')[0] || plainText
  const firstSentence = firstParagraph.split(/[.!?]/)[0] + '.'
  
  // Truncate if too long
  if (firstSentence.length <= maxLength) {
    return firstSentence
  }
  
  return firstSentence.substring(0, maxLength - 3) + '...'
}

export function generateOpenGraphUrl(data: OpenGraphData): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://book.tiles.run'
  const params = new URLSearchParams({
    title: data.title,
    description: data.description,
    type: data.type,
  })
  
  return `${baseUrl}/api/og?${params.toString()}`
}
