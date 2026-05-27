# Changelog

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
