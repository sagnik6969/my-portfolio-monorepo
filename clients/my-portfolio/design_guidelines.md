# Design Guidelines for Sagnik Jana's Portfolio Website

## Design Approach: Professional Developer Portfolio

**Strategy**: Blend Linear's modern minimalism with GitHub's content clarity and Stripe's professional aesthetic. Create a tech-forward portfolio that emphasizes credibility, achievements, and interactive engagement.

**Core Principle**: Clean, confident, and conversion-focused - every element serves to showcase technical expertise and build trust.

---

## Color System

**Primary Palette (Dark Mode - Default)**
- Background: 222 47% 11% (deep charcoal)
- Surface: 217 33% 17% (elevated slate)
- Text Primary: 0 0% 98% (near white)
- Text Secondary: 215 20% 65% (muted slate)
- Border: 217 33% 25% (subtle divide)

**Accent Colors**
- Primary Brand: 217 91% 60% (vibrant blue) - CTAs, links, active states
- Success/Achievement: 142 76% 36% (emerald green) - achievement badges, metrics
- Code/Tech: 265 89% 78% (soft purple) - technical elements, skill tags

**Light Mode (Alternative)**
- Background: 0 0% 100%
- Surface: 210 40% 98%
- Text Primary: 222 47% 11%
- Text Secondary: 215 25% 35%

---

## Typography

**Font Stack**
- Headings: 'Inter', system-ui, -apple-system (weights: 600, 700, 800)
- Body: 'Inter', system-ui, -apple-system (weights: 400, 500)
- Code/Technical: 'JetBrains Mono', 'Fira Code', monospace (weight: 400)

**Type Scale**
- Hero Title: text-6xl md:text-7xl font-bold (72px desktop)
- Section Heading: text-4xl md:text-5xl font-bold (48px desktop)
- Subsection: text-2xl md:text-3xl font-semibold (30px desktop)
- Body Large: text-lg md:text-xl (20px desktop)
- Body: text-base (16px)
- Caption/Meta: text-sm (14px)
- Technical Labels: text-xs uppercase tracking-wider font-mono

---

## Layout System

**Spacing Scale**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistency
- Section padding: py-20 md:py-32
- Container max-width: max-w-7xl
- Content max-width: max-w-4xl (for reading)
- Component spacing: space-y-8 to space-y-16

**Grid Structure**
- Skills/Achievements: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Projects: grid-cols-1 lg:grid-cols-2 (larger cards)
- Experience: Single column timeline layout
- Stats/Metrics: grid-cols-2 md:grid-cols-4

---

## Component Library

### Navigation
- Fixed top navbar with blur backdrop (backdrop-blur-xl bg-background/80)
- Logo/Name left, navigation links center, CTA buttons right
- Smooth scroll behavior with active section highlighting
- Mobile: Hamburger menu with slide-in drawer

### Hero Section
- Full viewport height (min-h-screen) with centered content
- Animated gradient mesh background (subtle, tech-inspired)
- Professional headshot (256px circular, subtle glow effect)
- Name in hero title size, animated typing effect for role/title
- Professional links as icon buttons with hover scale
- Dual CTAs: Primary "Download Resume" (solid), Secondary "Ask AI About Me" (outline with blur)

### Experience Cards
- Timeline layout with connection lines
- Company logo/icon on left (64px)
- Role, company, duration hierarchy
- Bullet points with custom markers (→ arrows in brand color)
- Tech stack as pill badges below (rounded-full px-3 py-1)

### Projects Showcase
- Large cards with screenshot/preview placeholder
- Hover effect: subtle lift (hover:scale-105 transition)
- Title, tech stack, description
- GitHub link icon overlaid on bottom-right
- "View Project" CTA on hover

### Skills Grid
- Category headings (Languages, Frameworks, etc.)
- Individual skills as interactive cards
- Icon + text layout (use simple geometric shapes for icons)
- Proficiency indicator (optional progress bar)

### Achievements Section
- Numbered list with gradient-bordered cards
- Icons/badges for contest platforms (LeetCode, CodeChef, etc.)
- Metric highlighting: Large numbers in brand color
- "Top X%" callouts in success green

### AI Chat Interface
- Floating action button (fixed bottom-right, size-16)
- Expands to chat panel (w-full md:w-96 h-96)
- Message bubbles: User (right, brand color) vs AI (left, surface color)
- Input field with send icon button
- "Powered by OpenAI" footer text

### Admin Dashboard
- Sidebar navigation (experience, projects, skills, achievements)
- Data tables with inline edit capability
- Add/Edit forms in modal overlays
- Real-time preview toggle
- Auth protection with Replit Auth (clean login modal)

### Contact Section
- Two-column layout: Contact info left, social links right
- Email/phone with copy-to-clipboard functionality
- Professional platform icons (LinkedIn, GitHub, LeetCode, GfG)
- "Get in touch" heading with supporting copy

### Footer
- Minimal single-line: "© 2024 Sagnik Jana • Built with React & Express"
- Links to privacy/terms if needed
- Scroll-to-top button on right

---

## Interaction Patterns

**Animations** (minimal, purposeful)
- Page load: Fade-in sections with stagger (100ms delay between)
- Hover: Scale transforms (1.02-1.05), color shifts
- Scroll: Parallax on hero background (subtle)
- Navigation: Smooth scroll with easing
- Chat: Slide-up expansion, message fade-in

**State Feedback**
- Loading: Skeleton screens (pulse animation)
- Success: Green checkmark with micro-interaction
- Error: Red border flash + shake animation
- Active section: Navbar link underline + color change

---

## Images

**Required Images**
1. **Hero Portrait**: Professional headshot, 512x512px, circular crop, subtle glow/shadow effect
2. **Project Screenshots**: 1200x800px, browser mockup frames, showcase UI/features
3. **Company Logos**: HashedIn/Deloitte branding (if allowed), 128x128px
4. **Background Patterns**: Subtle tech-inspired gradients, geometric meshes (generate with CSS/SVG)

**Placement**: Large hero image YES - professional portrait centered in hero section

---

## Accessibility & Responsiveness

- WCAG AA contrast ratios (4.5:1 minimum)
- Keyboard navigation for all interactive elements
- Focus indicators (ring-2 ring-brand with offset)
- ARIA labels for icon buttons
- Responsive breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)
- Mobile-first approach: Stack columns, expand touch targets (min-h-12)

**Dark Mode**: Default, with toggle in navbar (moon/sun icon)

---

## Technical Notes

- Consistent border radius: rounded-lg (8px) for cards, rounded-full for pills
- Shadow hierarchy: shadow-sm (subtle), shadow-lg (elevated), shadow-2xl (modals)
- Transition timing: duration-200 ease-in-out (standard), duration-300 for transforms
- Z-index layers: 0 (base), 10 (elevated), 40 (sticky nav), 50 (modals/chat)