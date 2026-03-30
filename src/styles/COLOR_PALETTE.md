# Color Palette Documentation

## Brand Colors (Based on Logo #86AC78)

This color palette is built around the primary brand color from Sofía's logo: **#86AC78** (Muted Sage Green)

### Primary Green Palette

| Color | Hex Code | Usage | Example |
|-------|----------|-------|---------|
| **Brand Primary** | `#86AC78` | Logo, buttons, primary accents | Logo, CTA buttons |
| **Primary Light** | `#A8D5BA` | Hover states, subtle backgrounds | Button hover |
| **Primary Lighter** | `#C8E6C9` | Light backgrounds, accessibility | Section backgrounds |
| **Primary Dark** | `#5D8B60` | Headings, emphasis text | Section titles |
| **Primary Darker** | `#3D5C41` | Body text, strong emphasis | Body copy |

### Accent & Neutral Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Accent (Light Green)** | `#E8F5E9` | Very light backgrounds, subtle accents |
| **Warm Accent** | `#D4A574` | Secondary accents, warm highlights |
| **Light Warm** | `#F5E6D3` | Warm backgrounds, accents |

### Text & Background

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Text Primary** | `#2D3B2D` | Main text, body copy |
| **Text Light** | `#5D6C5D` | Secondary text, subtle copy |
| **Background** | `#FFFFFF` | Main background |
| **Background Alt** | `#F5FAF6` | Alternate background sections |
| **Grey Light** | `#E8EBE8` | Borders, dividers |
| **Grey Medium** | `#A0A8A0` | Secondary elements |

### Status Colors

| Color | Hex Code | Purpose |
|-------|----------|---------|
| **Success** | `#86AC78` | Success messages, confirmations |
| **Warning** | `#D4A574` | Warnings, alerts |
| **Error** | `#C06C6C` | Errors, invalid states |

## Implementation in SCSS

All colors are defined in `src/styles/_variables.scss` and can be used throughout the project:

```scss
@use 'styles/variables' as *;

.my-component {
  color: $text;
  background-color: $primary-light;
  border: 1px solid $grey-light;
  
  &:hover {
    background-color: $primary;
    color: $white;
  }
}
```

## Design Principles

- **Harmony**: The palette is built on analogous colors (greens) with warm accents
- **Accessibility**: Sufficient contrast ratios between text and backgrounds
- **Brand Consistency**: Every color is derived from or complements the primary brand color
- **Professional**: Muted tones create a sophisticated, calming aesthetic suitable for healthcare/nutrition

## Usage Examples

- **Headers**: `$primary-dark` or `$primary-darker`
- **Buttons**: `$primary` with `$white` text
- **Hover States**: `$primary-light` or lighter variant
- **Backgrounds**: `$off-white`, `$accent`, or `$primary-lighter`
- **Text**: `$text` (primary) or `$text-light` (secondary)
- **Borders**: `$grey-light`
