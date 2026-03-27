# Generate Skill

## Purpose
Generate new components, pages, and features for PawPrints AI following established patterns.

## Tech Stack
- React 18 + TypeScript
- Tailwind CSS with warm amber design tokens
- shadcn/ui component library
- React Router for navigation
- TanStack Query for data fetching

## Rules
1. **Fonts**: DM Serif Display for headings, DM Sans for body. Never use Inter.
2. **Colors**: Warm amber palette (primary #D97706). Never use purple/indigo.
3. **Components**: Extract sections into `src/components/sections/`. Use shadcn/ui primitives from `src/components/ui/` (read-only).
4. **Copy**: Playful and emotional, not corporate. No banned AI slop words (revolutionize, leverage, seamless, cutting-edge, etc.).
5. **Layout**: Light mode default. Generous whitespace (80px+ section gaps). Bento grids over 3-column icon grids.
6. **Naming**: PascalCase for component files. Pages in `src/pages/`.

## File Structure
```
src/
  components/
    ui/         # shadcn/ui (read-only)
    sections/   # Product-specific components
  pages/        # Route-level pages
  hooks/        # Custom React hooks
  lib/          # Utilities, constants
```

## Brand Voice
Warm, playful, emotional. Lead with the pet, not the tech. Use gentle humor. Celebrate the pet.
