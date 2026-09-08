# Resume project guidance

## Architecture rules

- This is a Next.js 16 App Router project written in TypeScript. Keep application code at the repository root (`app/`, `components/`, `lib/`, `i18n/`, and `messages/`) and use the `@/` alias for root imports.
- Keep routes in `src/app/`, shared layout pieces in `src/components/layout/`, and reusable visual primitives in `src/components/ui/`.
- Use the existing Tailwind CSS v4 theme and utility conventions in `src/app/globals.css`; extend its named design tokens instead of introducing ad-hoc colors or duplicated component styling.
- Preserve the i18n setup: copy user-facing English and Spanish strings into `src/messages/en.json` and `src/messages/es.json`, and use `next-intl` translation hooks in UI components.
- Prefer small typed React components. Keep client-only behavior behind an explicit `'use client'` boundary and use `framer-motion` through the existing `Motion` primitive where appropriate.
- Preserve the current portfolio’s responsive, accessible conventions: semantic landmarks, screen-reader labels for icon controls, visible focus styles, and reduced reliance on hover alone.

## Portfolio inspiration

- Use `/Users/ricardo/code/portfolio` as architectural and visual inspiration only; do not copy its content, identity, personal data, or assets.
- Useful patterns to adapt include the token-driven styling, composable section and reveal primitives, fixed contact navigation, project cards, and experience timeline.
- Keep this resume concise and recruiter-friendly: prioritize a clear hero, experience, projects, skills, contact links, and printable/PDF access over portfolio-specific social feeds, like counters, phone reels, or Easter eggs.

## CLI delegation rules

- Use Claude Code for precise implementation, refactoring, and verification in this repository.
- Delegate context-heavy repository searches, large file analysis, log parsing, or portfolio scans to the Antigravity CLI, then use the returned summary rather than loading broad unrelated context.

## Subagent Operations

- For large file analysis, log parsing, or scanning `/Users/ricardo/code/portfolio`, use the Antigravity CLI in non-interactive mode.
- Command format: `agy -p "<prompt>"`
- Example: `agy -p "Extract the Tailwind color palette and button components from /Users/ricardo/code/portfolio"`
