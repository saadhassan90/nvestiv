# Nvestiv Brand Guidelines & Design System

## Overview
This document outlines the comprehensive brand guidelines and design system for Nvestiv, a cutting-edge AI CRM platform for private investments. Our design system emphasizes professionalism, trust, and innovation while maintaining accessibility and consistency across all touchpoints.

## Brand Identity

### Brand Values
- **Professional**: Clean, sophisticated design that inspires confidence
- **Innovative**: Modern technology stack with cutting-edge AI capabilities  
- **Trustworthy**: Reliable and secure platform for sensitive financial data
- **Accessible**: Inclusive design that works for all users
- **Efficient**: Streamlined workflows that save time and reduce complexity

### Brand Personality
- Sophisticated yet approachable
- Innovative but stable
- Professional without being stiff
- Intelligent and insightful

## Color Palette

### Primary Brand Colors

#### Electric Violet (Primary Accent)
- **Hex**: `#8215E0`
- **RGB**: `130, 21, 224`
- **HSL**: `275, 85%, 48%`
- **Usage**: CTAs, highlights, interactive elements, brand accents
- **CSS Variable**: `--primary`

#### Deep Navy (Secondary Accent)  
- **Hex**: `#0B0E1F`
- **RGB**: `11, 14, 31`
- **HSL**: `225, 39%, 7%`
- **Usage**: Dark mode backgrounds, overlays, header gradients
- **CSS Variable**: `--background` (dark mode)

### Light Mode Palette
- **Background**: `#F9FAFB` (Soft off-white)
- **Primary Text**: `#0F0F0F` (Near black)
- **Secondary Text**: `#374151` / `#6B7280` (Slate Gray)
- **Borders**: Light gray with subtle tint

### Dark Mode Palette
- **Background**: Gradient from `#0B0E1F` to `#000000`
- **Primary Text**: `#FFFFFF` (Pure white)
- **Secondary Text**: `#CBD5E1` (Light Gray)
- **Accent**: Electric Violet (consistent across modes)

### Semantic Colors
- **Success**: Green (`#10B981`)
- **Warning**: Yellow (`#F59E0B`)
- **Error**: Red (`#EF4444`)
- **Info**: Blue (`#3B82F6`)

## Typography

### Font Families
- **Primary**: Inter (Sans-serif) - Modern, highly legible
- **Display**: Inter (Same as primary for consistency)
- **Monospace**: JetBrains Mono (Code and technical content)
- **Special**: Harabara (Brand-specific elements when needed)

### Typography Scale

#### Display Text
- **Purpose**: Hero sections, major headings
- **Size**: 4xl-6xl (36px-72px)
- **Weight**: Bold (700)
- **Line Height**: 1.1
- **Usage**: `.text-display`

#### Headlines
- **H1**: 3xl-5xl (30px-48px), Bold, 1.2 line-height
- **H2**: 2xl-3xl (24px-30px), Semibold, 1.3 line-height  
- **H3**: xl-2xl (20px-24px), Semibold, 1.3 line-height
- **H4**: lg-xl (18px-20px), Medium, 1.4 line-height
- **H5**: base-lg (16px-18px), Medium, 1.4 line-height
- **H6**: sm-base (14px-16px), Medium, 1.4 line-height

#### Body Text
- **Large**: 18px, 1.75 line-height (`.text-body-large`)
- **Regular**: 16px, 1.5 line-height (`.text-body`)
- **Small**: 14px, 1.5 line-height (`.text-body-small`)

#### Utility Text
- **Caption**: 12px, Medium, Uppercase, Wide tracking (`.text-caption`)
- **Overline**: 12px, Semibold, Uppercase, Widest tracking (`.text-overline`)

### Typography Guidelines
- Use sentence case for most text
- Use title case for navigation and major headings
- Maintain consistent line heights for readability
- Ensure adequate contrast (4.5:1 minimum for body text)
- Use proper hierarchy to guide user attention

## Component System

### Buttons

#### Primary Styles
- **Primary**: Electric Violet background, white text
- **Secondary**: Light gray background, dark text
- **Outline**: Electric Violet border, Electric Violet text
- **Ghost**: Transparent background, Electric Violet text

#### Sizes
- **Small**: `px-4 py-2 text-sm`
- **Medium**: `px-6 py-3 text-base`
- **Large**: `px-8 py-4 text-lg`

#### States
- **Hover**: Slightly darker/lighter shade
- **Active**: Scale down to 98%
- **Focus**: Electric Violet ring, 2px offset
- **Disabled**: 50% opacity, no interaction

### Cards

#### Variants
- **Default**: White background, subtle border, light shadow
- **Elevated**: Includes hover lift effect
- **Interactive**: Hover effects, clickable styling
- **Glass**: Semi-transparent with backdrop blur
- **Feature**: Larger padding, enhanced hover states

#### Guidelines
- Use consistent border radius (12px default)
- Apply subtle shadows for depth
- Ensure adequate padding (24px minimum)
- Maintain consistent spacing between elements

### Modals & Dialogs

#### Structure
- **Header**: Icon + title + description
- **Body**: Scrollable content area
- **Footer**: Action buttons (right-aligned)

#### Styling
- Maximum height: 90vh
- Rounded corners: 16px
- Shadow: Large elevation
- Backdrop: Semi-transparent overlay
- Focus trap within modal content

### Forms & Inputs

#### Input Styling
- Rounded corners: 8px
- Border: Subtle gray, Electric Violet on focus
- Padding: 12px 16px
- Focus ring: Electric Violet, 2px
- Error state: Red border and text

#### Form Layout
- Consistent label positioning
- Adequate spacing between fields
- Clear error messaging
- Proper focus management

## Layout & Spacing

### Grid System
- 12-column grid for desktop
- Responsive breakpoints:
  - Mobile: 640px
  - Tablet: 768px
  - Desktop: 1024px
  - Large: 1280px
  - XL: 1536px

### Spacing Scale
- **4px** (1): Minimal spacing
- **8px** (2): Small spacing
- **12px** (3): Medium-small spacing
- **16px** (4): Medium spacing
- **24px** (6): Large spacing
- **32px** (8): Extra large spacing
- **48px** (12): Section spacing
- **64px** (16): Major section spacing

### Container Sizing
- Maximum width: 1400px
- Padding: 2rem (32px)
- Centered alignment

## Navigation

### Primary Navigation
- Clean, minimal design
- Clear hierarchy
- Consistent hover states
- Mobile-responsive collapse

### Floating Navigation
- Semi-transparent background
- Backdrop blur effect
- Rounded corners
- Subtle shadow

## Iconography

### Icon System
- Use Lucide React icons for consistency
- 16px for small icons
- 20px for medium icons  
- 24px for large icons
- Maintain consistent stroke width (2px)

### Usage Guidelines
- Always pair icons with text labels when possible
- Use semantic colors for status icons
- Ensure icons have adequate touch targets (44px minimum)

## Animation & Motion

### Principles
- Subtle and purposeful
- Duration: 200-300ms for micro-interactions
- Easing: ease-out for most animations
- Respect prefers-reduced-motion

### Common Animations
- **Fade In**: 300ms ease-out
- **Scale**: 200ms ease-out
- **Slide**: 300ms ease-out
- **Hover Effects**: 200ms transitions

## Accessibility

### Requirements
- WCAG 2.1 AA compliance minimum
- Color contrast ratios: 4.5:1 for normal text, 3:1 for large text
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators on all interactive elements

### Best Practices
- Use semantic HTML
- Provide alt text for images
- Include skip links
- Test with actual assistive technologies
- Ensure forms are properly labeled

## Dark Mode

### Implementation
- System preference detection
- Manual toggle available
- Consistent across all components
- Proper contrast maintenance

### Colors
- Deep navy backgrounds
- Light text for readability
- Electric Violet remains consistent
- Subtle variations for hierarchy

## Responsive Design

### Breakpoints
- Mobile-first approach
- Flexible layouts
- Appropriate font scaling
- Touch-friendly interface elements

### Guidelines
- Test on multiple devices
- Ensure content remains accessible at all sizes
- Optimize for both portrait and landscape
- Consider device-specific interactions

## Development Guidelines

### CSS Organization
- Use CSS custom properties for theming
- Leverage Tailwind CSS utility classes
- Create reusable component classes
- Maintain consistent naming conventions

### Component Architecture
- Build with shadcn/ui components
- Extend base components as needed
- Maintain prop consistency
- Document component APIs

### Performance
- Optimize images and assets
- Use appropriate loading strategies
- Minimize bundle size
- Test on slower connections

## Usage Examples

### Correct Usage
```tsx
// Proper button implementation
<Button variant="primary" size="lg">
  Get Started
</Button>

// Correct typography
<h1 className="text-display">Welcome to Nvestiv</h1>
<p className="text-body">Professional AI CRM for private investments.</p>

// Proper card usage
<div className="card-feature">
  <h3 className="text-h3">AI Agents</h3>
  <p className="text-body-small">Intelligent automation for your workflow.</p>
</div>
```

### Component Variants
- Always use semantic class names
- Leverage design tokens
- Maintain consistency across implementations
- Test in both light and dark modes

## Brand Asset Guidelines

### Logo Usage
- Maintain minimum clear space
- Use appropriate contrast versions
- Never distort or modify
- Ensure legibility at all sizes

### Photography & Imagery
- Professional, clean aesthetic
- Appropriate contrast and lighting
- Consistent color treatment
- Relevant to private investment context

## Maintenance & Updates

### Regular Reviews
- Quarterly design system audits
- User feedback integration
- Accessibility testing
- Performance monitoring

### Documentation
- Keep guidelines current
- Document component changes
- Maintain style guide examples
- Regular team training

---

This design system serves as the foundation for all Nvestiv brand experiences. Consistent application of these guidelines ensures a cohesive, professional, and accessible user experience across all touchpoints.

For questions or clarifications, refer to the development team or design system maintainers.