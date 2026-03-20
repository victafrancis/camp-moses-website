# Changelog

## 1.0.2 - 2026-03-20
- Removed all US-specific donation content from [`content/donate.json`](content/donate.json).
- Updated donate page rendering in [`app/donate/page.tsx`](app/donate/page.tsx) to support Canada online giving only.
- Adjusted tax receipt emphasis text color in [`app/donate/page.tsx`](app/donate/page.tsx) from red to amber for a less warning-like appearance.
- Upgraded [`next`](package.json:52) to `16.2.0` to remediate reported security advisories from [`npm audit`](package-lock.json:50).

## 1.0.1 - 2026-02-14
- Added the Camp Moses newsletter signup section.
