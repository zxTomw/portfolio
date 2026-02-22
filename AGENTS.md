# Repository Guidelines

## Project Structure & Module Organization
This is a Next.js 15 + TypeScript portfolio site.

- `app/`: App Router entrypoints (`layout.tsx`, `page.tsx`), global styles, and metadata/manifest files.
- `components/`: Feature sections (`intro.tsx`, `projects.tsx`, etc.) and reusable UI primitives in `components/ui/`.
- `lib/`: Shared utilities (`lib/utils.ts`).
- `portfolio.ts`: Central content data (social links and project entries) rendered by UI components.
- `public/`: Static assets (icons, screenshots, resume, project images).
- Root config: `tailwind.config.ts`, `postcss.config.mjs`, `next.config.mjs`, `.eslintrc.json`, `tsconfig.json`.

## Build, Test, and Development Commands
- `npm run dev`: Start local dev server with Turbopack.
- `npm run build`: Create production build.
- `npm run start`: Run the production build locally.
- `npm run lint`: Run ESLint (`next/core-web-vitals` + `next/typescript`).

If you use Bun, equivalent commands are `bun run dev|build|start|lint`.

## Coding Style & Naming Conventions
- Use TypeScript + React function components.
- Use 2-space indentation and keep files formatted consistently with existing code.
- Import internal modules via `@/` aliases (for example `@/components/...`, `@/lib/utils`).
- Keep component exports in `PascalCase`; keep filenames route-friendly and consistent with existing kebab/lowercase style (for example `components/ui/mode-toggle.tsx`).
- Prefer Tailwind utility classes and shared UI primitives over custom one-off styling.

## Testing Guidelines
No automated test runner is configured yet. Minimum requirement for changes:

- Run `npm run lint`.
- Manually verify key flows in `npm run dev` (homepage render, theme toggle, project cards, external links).

When adding tests, use `*.test.ts`/`*.test.tsx` naming and colocate near the component/module or under a `__tests__/` directory.

## Commit & Pull Request Guidelines
Recent commits use short, imperative messages like `fix layout`, `update resume`, `clean unused variables`.

- Commit format: concise imperative summary, optionally scoped (for example `fix footer link variables`).
- PRs should include: purpose, what changed, how to verify, and screenshots/GIFs for visual changes.
- Link related issues when available and call out any follow-up work.
