# OpenGraph Implementation

This project includes a comprehensive OpenGraph implementation based on [Vercel/og](https://vercel.com/docs/functions/og-image-generation) for dynamic social media image generation and metadata.

## Features

- **Dynamic OG Image Generation**: Automatically generates beautiful social media images using the `/api/og` endpoint
- **Automatic Metadata**: Automatically adds OpenGraph and Twitter Card meta tags to all pages
- **MDX Frontmatter Support**: Configure OpenGraph data using frontmatter in your MDX files
- **Responsive Design**: Generated images are optimized for social media platforms (1200x630px)
- **Custom Branding**: Includes Tilekit branding and styling

## Usage

### Basic MDX Page

Add frontmatter to your MDX files to customize OpenGraph metadata:

```mdx
---
title: "Your Page Title"
description: "A compelling description of your page content"
type: "website"
---

# Your Content

Your page content here...
```

### Available Frontmatter Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `title` | string | Auto-generated | Page title for OpenGraph |
| `description` | string | Auto-generated | Page description for OpenGraph |
| `type` | string | "website" | OpenGraph content type |
| `image` | string | Auto-generated | Custom OG image URL |
| `imageWidth` | number | 1200 | OG image width |
| `imageHeight` | number | 630 | OG image height |
| `twitterCard` | string | "summary_large_image" | Twitter card type |
| `twitterSite` | string | "@tileslauncher" | Twitter site handle |
| `twitterCreator` | string | "@tileslauncher" | Twitter creator handle |

### Manual OpenGraph Component

You can also use the OpenGraph component manually in your pages:

```tsx
import { OpenGraph } from '../components/OpenGraph'

export default function MyPage() {
  return (
    <>
      <OpenGraph
        title="Custom Title"
        description="Custom description"
        type="article"
        url="/my-page"
      />
      {/* Your page content */}
    </>
  )
}
```

## API Endpoint

### `/api/og`

Generates dynamic OpenGraph images with the following query parameters:

- `title`: The title to display on the image
- `description`: The description to display on the image  
- `type`: The content type (affects styling)

#### Example Usage

```
https://your-domain.com/api/og?title=My%20Title&description=My%20Description&type=article
```

## Customization

### Styling the OG Images

Edit `pages/api/og.tsx` to customize the image design:

```tsx
// Customize colors, fonts, layout, etc.
<div
  style={{
    backgroundColor: '#your-color',
    // ... other styles
  }}
>
  {/* Your custom layout */}
</div>
```

### Environment Variables

Set these environment variables to customize the implementation:

- `NEXT_PUBLIC_BASE_URL`: Your site's base URL (default: "https://book.tiles.run")

## Testing

### Test OG Images

1. Visit `/api/og` in your browser to see the default image
2. Add query parameters to test different content: `/api/og?title=Test&description=Test%20Description`

### Test Social Media Preview

1. Use tools like [OpenGraph.xyz](https://www.opengraph.xyz/) to test your pages
2. Use [Twitter Card Validator](https://cards-dev.twitter.com/validator) for Twitter previews
3. Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) for Facebook previews

## Examples

### Blog Post

```mdx
---
title: "Building with Tilekit"
description: "Learn how to build powerful applications using Tilekit's comprehensive library collection."
type: "article"
---

# Building with Tilekit

Your blog post content...
```

### Documentation Page

```mdx
---
title: "API Reference - Tilekit"
description: "Complete API reference for Tilekit libraries and tools."
type: "website"
---

# API Reference

Your documentation content...
```

## Troubleshooting

### Images Not Generating

1. Check that `@vercel/og` is installed
2. Ensure your deployment platform supports Edge Runtime
3. Check browser console for errors

### Metadata Not Appearing

1. Verify frontmatter syntax in MDX files
2. Check that the OpenGraph component is being rendered
3. Use browser dev tools to inspect meta tags

### Custom Images Not Loading

1. Ensure image URLs are absolute
2. Check that images are publicly accessible
3. Verify image format is supported (PNG, JPG, WebP)
