# PawPrints AI -- Feature Research

*Compiled: 2026-03-27*

## What Pet Portrait Competitors Offer

### Crown & Paw ($50-$140 per portrait)
- **150+ design templates** including Renaissance, royal, watercolor, holiday themes, pop culture
- **Print formats**: Canvas (8x10, 12x18, 16x24), posters, digital downloads
- **Frame options**: Gallery-standard 1.25" depth canvas frames
- **Multiple pets**: Up to 4 pets in a single portrait
- **Merchandise**: Mugs, phone cases, throw pillows, blankets, apparel, tote bags
- **Revisions**: Unlimited free revisions until satisfied
- **Gift features**: Gift packaging, occasion-specific themes
- **Quality control**: In-house quality check on every order, human artist involvement

### West & Willow ($83-$166 per portrait)
- **Minimalist modern illustration** -- one core style, very design-forward
- **Sizes**: Three artwork sizes per portrait
- **Frames**: Black, white, or walnut hardwood with hanging hardware
- **Multiple pets**: 1-4 pets per portrait, any pet type
- **Background options**: 6 background designs including limited editions
- **Print quality**: Museum-quality giclee Epson matte paper
- **Pet name**: Option to add pet's name below the portrait
- **Merchandise**: Custom embroidered hoodies, trucker hats, t-shirts

### DreamPets ($6.99/mo subscription)
- **300+ styles** with mix-and-match outfits and scenes
- **Custom text prompts** for unique generations
- **Mobile app** (iOS + Android)
- **Instant delivery** (AI-generated)

### Pawcaso Studio ($9.99-$19.99)
- **35+ art styles** (Monet, Van Gogh, Renaissance, Watercolor, Pop Art, etc.)
- **30+ portraits per package** at $19.99
- **Under 30 seconds** generation
- **Free preview** before purchase
- **Web-based** (no app install)

### NightCafe
- **Manual aspect ratio cropping** for each product size
- **Physical products**: Mugs, t-shirts, phone cases, posters, framed prints
- **Group pet portraits**

### Common AI App Features (Fotor, StarryAI, Adobe Firefly)
- Basic photo cropping and brightness adjustment before styling
- Background removal/replacement
- Multiple style presets
- Social media-optimized exports

---

## Do Pet Owners Want These Features?

### Print-Ready Formats -- YES (critical)
- Most people buying pet portraits intend to print and frame them
- Standard frame sizes (5x7, 8x10, 11x14, 16x20) are essential -- custom sizes create friction
- 300 DPI minimum for quality prints; our current 256 DPI / 2048x2048 is borderline
- Print shops and services like Shutterfly expect standard aspect ratios

### Frame Options -- YES (high perceived value)
- Crown & Paw's entire premium justification is "it looks like it's already framed"
- Digital frame overlays (gold ornate, modern minimal, rustic wood) add perceived value at zero marginal cost
- Frame previews help buyers visualize the portrait on their wall
- CSS frame effects are already in our codebase -- extending them to selectable options is natural

### Multiple Pets -- YES (most requested missing feature)
- 63.4 million U.S. households have dogs; many have 2-3 pets
- Multi-pet portraits are a top upsell at Crown & Paw and West & Willow
- FAQ already mentions this as "on our roadmap" -- delivering it removes a key blocker
- Even combining 2 individual portraits side-by-side in a diptych format has value

### Gift Features -- YES (25% of the market)
- Gift buyers are the second largest segment (research-brief.md)
- Crown & Paw has dedicated gift packaging; West & Willow positions heavily as gifts
- Digital gift cards with personalized messages are low-effort, high-impact
- Gift wrapping animations and recipient email delivery are differentiators

---

## Why Crown & Paw Charges $50+ vs Our $8.99/mo

| Factor | Crown & Paw | PawPrints AI |
|--------|------------|--------------|
| **Human involvement** | Professional artists digitally hand-draw each portrait | Fully AI-generated |
| **Physical product** | Canvas, framed prints, merchandise | Digital download only |
| **Revision process** | Unlimited revisions with human artist | Regenerate (different each time) |
| **Perceived exclusivity** | "Custom art made just for you" | "AI-generated in 60 seconds" |
| **Quality control** | In-house quality check team | Algorithmic only |
| **Delivery time** | 3-7 days (creates anticipation) | Instant (removes anticipation) |
| **Brand positioning** | Luxury gift, keepsake | Affordable tool |
| **Merchandise ecosystem** | Mugs, pillows, blankets, apparel | None |

### Key insight
Crown & Paw's premium is driven by the **physical product** and **human touch perception**. PawPrints AI can close the perceived value gap by:
1. Adding frame/border options that make digital portraits look gallery-ready
2. Offering print-ready downloads in standard frame sizes at 300 DPI
3. Building gift features (gift cards, personalized messages, wrapping animations)
4. Showing portraits "in context" -- on a wall, in a frame, as a gift -- not just as flat images

---

## 10 Features to Build (Priority Order)

1. **Photo crop + zoom** -- Let users focus on pet's face before generating
2. **Background selector** -- Studio, outdoor, fantasy, seasonal (Christmas, Halloween)
3. **Frame/border options** -- Gold ornate, modern minimal, rustic wood, floating, none
4. **Print-ready download** -- 300 DPI, standard frame sizes (5x7, 8x10, 11x14, 16x20)
5. **Gift card creator** -- Personalized message, recipient email, gift wrapping animation
6. **Multiple pets** -- Upload 2-3 photos, combine into one portrait
7. **Style intensity slider** -- More or less stylized (0-100%)
8. **Before/after comparison** -- Slider showing original photo vs portrait
9. **Favorites gallery** -- Star portraits, shareable public link
10. **"Surprise me" button** -- Random style + random background

---

## Competitive Advantages After These Features

| Feature | Crown & Paw | West & Willow | DreamPets | PawPrints AI |
|---------|------------|---------------|-----------|--------------|
| Speed | 3-7 days | ~2 weeks | Instant | 60 seconds |
| Price | $50-$140 | $83-$166 | $6.99/mo | $8.99/mo (free tier) |
| Styles | 150+ | 1 | 300+ | 8 curated + monthly |
| Print-ready | Yes (physical) | Yes (physical) | No | Yes (300 DPI digital) |
| Frame options | Physical canvas | Physical frame | No | Digital frame overlays |
| Multi-pet | Up to 4 | Up to 4 | No | Up to 3 |
| Gift features | Gift packaging | Minimal | No | Gift cards + animation |
| Background choice | Template-based | 6 options | Mix-and-match | 12+ backgrounds |
| Crop/zoom | N/A | N/A | No | Yes |
| Before/after | No | No | No | Yes |
