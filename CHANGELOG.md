# Changelog

## 1.0.5 - 2026-06-06
- Added `public/og-social-card.png` (1200×630) as the static Open Graph social card image, using the mountain background photo, Camp Moses logo, and brand colors (`#505a27` green, `#f79225` orange accent).
- Added `metadataBase` to the root layout metadata so relative `og:image` paths resolve to absolute URLs for Facebook/Messenger link previews.
- Updated `og:image` and `twitter:image` in [`app/layout.tsx`](app/layout.tsx) and [`app/page.tsx`](app/page.tsx) to use the new social card.

## 1.0.4 - 2026-05-26
- Update donation page information
- Added Canada Helps logo to the Canada Helps donation card

## 1.0.3 - 2026-05-24
- Added PayPal donation button as a new card in the Simple Ways to Donate section of [`app/donate/page.tsx`](app/donate/page.tsx).
- Created [`components/paypal-donate-button.tsx`](components/paypal-donate-button.tsx) as a client component that loads the PayPal Donate SDK and renders the hosted button.
- Reordered donation methods in [`content/donate.json`](content/donate.json) to: PayPal, Online Giving (Canada), E-Transfer, Cheque.

## 1.0.2 - 2026-03-20
- Removed all US-specific donation content from [`content/donate.json`](content/donate.json).
- Updated donate page rendering in [`app/donate/page.tsx`](app/donate/page.tsx) to support Canada online giving only.
- Adjusted tax receipt emphasis text color in [`app/donate/page.tsx`](app/donate/page.tsx) from red to amber for a less warning-like appearance.
- Upgraded [`next`](package.json:52) to `16.2.0` to remediate reported security advisories from [`npm audit`](package-lock.json:50).

## 1.0.1 - 2026-02-14
- Added the Camp Moses newsletter signup section.
