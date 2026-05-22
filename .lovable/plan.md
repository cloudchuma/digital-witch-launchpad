# Digital Witch — Landing Hero

## Scope
Single-page landing hero for an African EdTech brand. Dark modern UI, premium and futuristic, with mentorship/community energy. Mobile-first, responsive, React + Tailwind.

## Stack
- Scaffold a `web_app:digital-witch` (TanStack Start + Tailwind template).
- Add `framer-motion` for subtle animations (fade/slide-in, floating card, count-up stats).
- Use `lucide-react` for icons (already common in template).

## Design tokens (dark, premium, futuristic)
- Background: deep near-black `#0A0A0F` with radial purple/indigo glow.
- Surface: `#12121A` glass cards with `backdrop-blur` + 1px white/8% border.
- Accent gradient: violet `#8B5CF6` → fuchsia `#D946EF` → amber `#F59E0B` (a nod to African warmth + futuristic neon).
- Text: `#F5F5F7` primary, `#A1A1AA` muted.
- Typography: Space Grotesk (headings, bold/tight tracking) + Inter (body).
- Soft gradients: large blurred orbs behind hero, faint grid overlay for tech feel.

## Sections (all on one page, hero-focused)

### 1. Navbar
- Sticky, transparent → blurred on scroll.
- Left: "Digital Witch" wordmark with small gradient sparkle glyph.
- Center (desktop): Courses · Mentorship · Community · About.
- Right: "Sign in" ghost + "Join cohort" gradient button.
- Mobile: hamburger → slide-down panel.

### 2. Hero
- Eyebrow pill: "Built for Africa's next builders" with a small pulsing dot.
- Headline (H1, bold, 4–6xl): "Learn tech. Build with mentors. Ship with your tribe."
- Subheadline: 1–2 lines about beginner-friendly, mentor-led cohorts for African learners.
- CTAs: primary gradient "Start learning free" + secondary outline "Explore cohorts" with arrow.
- Trust row: "10,000+ learners across 24 African countries" + small avatar stack.

### 3. Floating dashboard preview (right column on desktop, below hero on mobile)
- Glassmorphic card mocked as a course dashboard: sidebar with course list, main panel with "Intro to Python — Week 3", progress bar, mentor avatar + "Live in 2h" badge, small XP/streak chip.
- Subtle float animation (translateY loop), tilt on hover.
- Two smaller floating chips around it: "New mentor message" and "+120 XP earned".

### 4. Animated statistics strip (below hero)
- 4 stats, count-up on viewport enter:
  - 10,000+ Learners
  - 24 Countries
  - 350+ Mentors
  - 92% Completion rate
- Divider lines, gradient numerals.

## Animations
- Hero text: staggered fade + slide-up on mount.
- Dashboard card: continuous gentle float, hover tilt.
- Stats: count-up with `useInView`.
- Background orbs: slow drift via CSS keyframes.
- Respect `prefers-reduced-motion`.

## Responsiveness
- Mobile-first: single column, dashboard card stacks under CTAs, stats become 2×2 grid.
- Tablet: 2-col hero with smaller card.
- Desktop ≥1024px: 2-col hero, full stats row.

## Files to add
- `src/components/landing/Navbar.tsx`
- `src/components/landing/Hero.tsx`
- `src/components/landing/DashboardPreview.tsx`
- `src/components/landing/Stats.tsx`
- `src/components/landing/BackgroundFX.tsx` (orbs + grid)
- Mount in the template's index route, replacing default content.
- Update `index.css` with font imports and gradient/orb keyframes.

## Out of scope
- Auth, routing beyond landing, real course data, backend. Pure presentational hero page.
