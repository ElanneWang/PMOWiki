# Alens Website

Independent Next.js marketing site for Alens.

## Commands

```bash
npm install
npm run dev
npm run check
```

## Content Entry Point

All website copy, metadata, links, pricing data, FAQ items, and blog list content live in:

```text
src/content/site-content.ts
```

Use that file as the single source of truth when adapting the site to your product.

## Project Structure

```text
src/app            App Router routes
src/components     Render-only UI sections
src/content        Central website content and metadata
src/lib            Shared utilities
public             Static assets
```

## Notes

- The current landing page structure is preserved so you can keep iterating visually.
- Clone-template research material and agent-specific project files are not part of this repo.
- Replace placeholder links and product copy in `src/content/site-content.ts` as requirements become concrete.
