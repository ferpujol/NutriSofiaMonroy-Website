# Hero Banner Images

Place your hero banner background images here.

## Required Files

- **banner.png** - Main hero section background image
  - Dimensions: 1920 x 1080px (16:9 aspect ratio)
  - Format: PNG or WebP (recommended for web)
  - Should include the nutritionist positioned on the right side with wellness elements
  - Leave left side relatively clear for text overlay

## Image Integration

The banner image is used as a background in the hero section with:
- Dark gradient overlay on the left side for text readability (text is white)
- Parallax effect on desktop (`background-attachment: fixed`)
- Responsive behavior on mobile (`background-attachment: scroll`)

## Optimization Tips

- Compress to 150-250KB for optimal load time
- Use WebP format for better compression: `banner.webp`
- Consider creating a mobile-specific version if needed

## How It Works

The hero section CSS applies:
1. The banner image as background
2. A gradient overlay (dark on left, transparent on right) for text contrast
3. Text shadow for additional readability
4. Parallax scrolling effect on desktop
