# 🤖 HgBlog Agent Guide

Welcome to the **HgBlog** repository! This file (`AGENTS.md`) is the primary instruction manual for any AI coding agent, copilot, or orchestrator interacting with this codebase.

## 📌 1. Project Overview & Tech Stack
- **Framework**: VitePress (Static Site Generator powered by Vite)
- **UI Framework**: Vue 3 (Composition API, `<script setup>`)
- **Language**: TypeScript (`.mts` and `.ts` preferred), Markdown
- **CSS**: Custom vanilla CSS variables (located in `docs/.vitepress/theme/style.css`)
- **Focus**: High-quality UI, Tech/AI content, high-performance static pages.
- **Theme**: Blue/Purple tech gradients (`#646cff`, `#bd34fe`, `#41d1ff`).

---

## 🛠 2. Build, Dev, and Test Commands

### 🖥 Development
- **Start Local Server**: `npm run docs:dev` (runs on `http://localhost:5173`)
- **Build Static Files**: `npm run docs:build`
- **Preview Build**: `npm run docs:preview`

### 🧪 Testing
> *Note: While a formal test runner is not fully initialized, we adhere to the standard Vitest convention for this project.*
- **Run All Tests**: `npx vitest`
- **Run a Single Test**: `npx vitest run path/to/your.test.ts`
- **Run UI Tests (Playwright)**: `npx playwright test`

### 🧹 Linting & Formatting
> *Standardized via ESLint + Prettier (Planned for configuration).*
- **Run Linter**: `npx eslint "docs/**/*.ts" "docs/**/*.vue"`
- **Format Code**: `npx prettier --write "docs/**/*.{md,vue,ts,css}"`

---

## 📐 3. Code Style Guidelines

### 📦 3.1 Imports & Export Strategy
- **Absolute vs Relative**: Use absolute paths (`@/components/...`) when aliases are configured; otherwise, use strict relative paths.
- **Import Ordering**:
  1. Vue/VitePress internal APIs (`import { ref } from 'vue'`)
  2. Third-party packages
  3. Internal utilities/helpers
  4. Internal components
  5. Styles (`import './style.css'`)
- **Type Imports**: Use `import type` exclusively for TypeScript types to avoid bundle bloat.

### 📝 3.2 Formatting & Syntax
- **Indentation**: 2 spaces.
- **Quotes**: Single quotes (`'`) for JS/TS, double quotes (`"`) for HTML/Vue attributes.
- **Semicolons**: Avoid semicolons at the end of lines (StandardJS/Prettier default).
- **Trailing Commas**: `es5` mode (trailing commas in objects and arrays).
- **Comments**: Explain *why*, not *what*. Add JSDoc to complex utility functions.

### 🧩 3.3 TypeScript & Typing
- **Strict Typing**: Avoid `any` at all costs. Use `unknown` if the type is truly dynamic.
- **Interfaces vs Types**: Use `interface` for object definitions that might be extended, `type` for unions/intersections.
- **Props Definition**: Use `defineProps<{ ... }>()` in Vue components instead of runtime validation arrays.

### 🏷 3.4 Naming Conventions
- **Files/Folders**:
  - Markdown articles: `kebab-case.md` (e.g., `what-is-agi.md`). **Crucial for clean URLs.**
  - Vue Components: `PascalCase.vue` (e.g., `HeroSection.vue`).
  - Composables: `camelCase` starting with `use` (e.g., `useThemeConfig.ts`).
  - Utils/Helpers: `camelCase` (e.g., `formatDate.ts`).
- **Variables/Functions**: `camelCase`.
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `MAX_RETRY_COUNT`).
- **CSS Classes**: `kebab-case` (e.g., `custom-block`, `hero-image`). Follow BEM principles if complex.

### ⚠️ 3.5 Error Handling
- **Vue Components**: Use `onErrorCaptured` hook for handling component tree errors gracefully.
- **Async Functions**: Always use `try/catch` blocks.
- **User Feedback**: Never fail silently. If an API call fails or an action is aborted, log the error clearly via `console.error` and provide a fallback UI state.
- **Graceful Degradation**: If an external resource fails to load, ensure the static content of the VitePress page is not blocked.

---

## 🎨 4. Vue & VitePress Specific Rules

### 🖼 Vue 3 Composition API
- **NEVER** use the Options API (`data()`, `methods`, etc.).
- **ALWAYS** use `<script setup lang="ts">`.
- Use `ref` for primitives and `reactive` for deeply nested state objects.
- Destructure props using `const { propName } = defineProps<...>()` (Vue 3.3+ supports reactive destructuring).

### 📖 VitePress Markdown Authoring
- **Frontmatter**: Ensure all top-level articles contain a YAML frontmatter block (at minimum `title` or `layout`).
- **Custom Containers**: Liberally use VitePress default containers for emphasis:
  - `::: info`, `::: tip`, `::: warning`, `::: danger`, `::: details`.
- **Vue in Markdown**: Remember that all `.md` files are parsed as Vue components. You can embed interactive `<MyComponent />` directly into the markdown.
- **Routing**: Always update `docs/.vitepress/config.mts` (`themeConfig.sidebar` and `themeConfig.nav`) when creating new folders or major article series.

### 💅 CSS & Theming
- Extend the default theme via `docs/.vitepress/theme/index.mts` instead of completely overriding it unless requested.
- Use CSS Variables (`--vp-c-brand-1`, etc.) defined by VitePress to ensure automatic support for Dark/Light mode switching.
- Avoid inline styles. Use scoped CSS in `.vue` files: `<style scoped>`.

---

## 🤖 5. Agent Operational Directives

1. **Read Before Modifying**: Before updating styling or routing, ALWAYS read `docs/.vitepress/config.mts` and `docs/.vitepress/theme/style.css` to grasp the existing aesthetic and structural patterns.
2. **Atomic Changes**: Keep edits small and logical. Do not mix markdown content generation with global VitePress configuration changes in the same atomic step.
3. **No Phantom Imports**: Do not import packages that are not present in `package.json`. Use `npm install` explicitly if a new tool (like Pinia, Vitest, or Tailwind) is required.
4. **Verification**: After modifying markdown or config, always verify by running `npm run docs:build` internally to ensure there are no parser errors or broken links. Do not leave the build broken.