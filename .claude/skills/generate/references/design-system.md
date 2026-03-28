# PawPrints AI — Design System

## Design Philosophy: Warm Gallery

**Not** tech-forward. **Not** corporate. **Not** generic SaaS.

PawPrints AI looks and feels like a curated art gallery that happens to live online — warm, inviting, and built to make pet portraits the undeniable star. The design borrows from three traditions:

1. **Art Gallery Minimalism** (Gagosian, Petzel) — Generous whitespace, large high-resolution images, the UI disappears so the art speaks. Every portrait is displayed as if hung on a gallery wall with proper framing and lighting.

2. **Warm Editorial** (lifestyle magazines, West & Willow) — Serif headlines that feel classic and portrait-worthy. Warm off-white surfaces instead of clinical white. Soft shadows that suggest depth without heaviness. Typography that reads like a beautifully typeset magazine spread.

3. **Premium Pet Brand Warmth** (Crown & Paw, West & Willow) — Emotional resonance over feature lists. Real portraits of real pets, not stock photography. Frame-like borders and mat effects around images. The feeling that this is custom art, not a filter app.

## What We Learned from Competitors

- **Crown & Paw**: Success comes from showing portraits in context — framed, on walls, as gifts. The transformation from photo to art is the magic moment. Renaissance/royal styles go viral.
- **West & Willow**: Gallery-quality paper, museum framing language, hand-illustrated feel. Clean product pages where the portrait dominates. Minimal UI chrome.
- **Etsy pet portrait shops**: Warmth and personality in copy. Testimonials that tell emotional stories. Before/after transformations sell instantly.
- **Top art gallery sites**: The artwork is ALWAYS the largest element. Whitespace is generous. Typography is restrained. Navigation never competes with the art.

## Design Principles

1. **Portraits are the hero.** Every layout decision asks: does this make the portraits more prominent? If not, cut it.
2. **Warmth over coolness.** Warm amber tones, off-white surfaces, serif headlines. This is a living room, not a laboratory.
3. **Gallery framing.** Images get CSS frame/mat effects — inner shadows, layered borders, subtle warm glows. They should feel hung on a wall.
4. **Emotional whitespace.** Generous padding. Let the eye rest. Dense layouts feel cheap; breathing room feels premium.
5. **Hover reveals depth.** Subtle zoom on portraits, shadow lift on cards, gentle scale on interaction. Movement is soft and organic, never snappy or mechanical.
6. **Real over placeholder.** Every style card shows an actual AI-generated portrait. No emojis as placeholders. No dashed-border empty states where art should be.

## Color System

| Role | Token | Value | Notes |
|------|-------|-------|-------|
| Primary | `amber-600` | `#D97706` | Warm amber — buttons, links, accents |
| Primary hover | `amber-700` | `#B45309` | Darker amber for hover states |
| Primary light | `amber-50` | `#FFFBEB` | Card backgrounds, tinted sections |
| Surface | `background` | warm off-white | `hsl(30 33% 97%)` — never pure white |
| Card | `card` | `#FFFFFF` | Raised surfaces |
| Text | `foreground` | `hsl(15 38% 12%)` | Dark warm brown, not black |
| Muted text | `muted-foreground` | `hsl(20 15% 43%)` | Secondary copy |
| Frame shadow | `shadow-portrait` | `0 8px 24px rgba(217,119,6,0.15)` | Warm glow behind portraits |

## Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Headlines | DM Serif Display | 400 | 2.5-3.25rem |
| Body | DM Sans | 400 | 1rem (16px) |
| Labels | DM Sans | 500 | 0.875rem |
| Badges | DM Sans | 500 | 0.75rem |

## Frame Effects (CSS)

Portrait images get a layered frame treatment:

```css
.portrait-frame {
  border: 3px solid hsl(30 20% 85%);        /* outer frame */
  box-shadow:
    inset 0 0 0 6px hsl(30 33% 96%),        /* inner mat */
    inset 0 0 0 7px hsl(30 20% 88%),        /* mat edge */
    0 8px 24px rgba(217,119,6,0.15),         /* warm glow */
    0 2px 8px rgba(0,0,0,0.08);              /* depth shadow */
  border-radius: 4px;
}
```

## Hover Animations

- **Gallery cards**: `transform: scale(1.03)` + shadow lift over 300ms ease
- **Portrait images**: `transform: scale(1.05)` with overflow hidden on parent
- **CTA buttons**: Subtle shadow expansion + slight translateY(-1px)
- **Testimonial cards**: Shadow deepens, slight lift

## Image Requirements

All style showcase images are real AI-generated portraits:
- `hero-before-after.png` — Photo-to-portrait transformation (golden retriever)
- `style-renaissance.png` — Cat as Renaissance noble
- `style-watercolor.png` — Dog in soft watercolor
- `style-anime.png` — Pet in anime/Japanese illustration
- `style-pop-art.png` — Pet in Warhol-style pop art
- `style-memorial.png` — Gentle memorial portrait with rainbow bridge
- `og-image.png` — Open Graph card (1200x630)

## Layout Patterns

- **Style showcase**: 2x2 or 3-column grid with real portrait images filling each card. No emoji placeholders.
- **Hero**: Split before/after with real images. Left = photo, right = portrait in ornate frame.
- **Testimonials**: Gallery wall layout — staggered cards with warm backgrounds, like framed reviews.
- **Features bento**: Keep icon-driven cards but add subtle portrait imagery as accents.
