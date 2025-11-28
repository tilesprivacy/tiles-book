import { useConfig } from '@nextra/theme-docs'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { OpenGraph } from './OpenGraph'
import { generateOpenGraphData } from '../utils/opengraph'

export function useOpenGraph() {
  const config = useConfig()
  const router = useRouter()
  
  // Get frontmatter from the current page
  const frontmatter = (config as any).frontMatter || {}
  const content = (config as any).content || ''
  
  // Generate OpenGraph data
  const ogData = generateOpenGraphData(frontmatter, content, router.asPath)
  
  return ogData
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const ogData = useOpenGraph()
  
  return (
    <>
      <OpenGraph {...ogData} />
      {children}
    </>
  )
}
