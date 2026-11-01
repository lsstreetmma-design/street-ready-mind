# LS Street MMA website

Live at **https://ls-street-mma.com** (GitHub Pages, deployed by `.github/workflows/deploy.yml` on every push to `main`).

Two pages:

| Page | File | URL |
|---|---|---|
| Home (free session, what you'll gain, where & when, booking form) | `src/pages/Index.tsx` | `/` |
| Head Coach ("Hi I'm Lee") | `src/pages/Coach.tsx` | `/coach` |

## Quick edits

- **Phone, email, training days/time, Google Maps links, form key:** `src/lib/site.ts` (one place, used everywhere)
- **Colours:** `src/index.css` (`--primary` is the LS orange, `--ink` is the black)
- **Page wording:** the two page files above (wording comes from Lee's `LS STREET MMA.docx`)
- **Google business details for search (address, hours):** the JSON-LD block in `index.html`
- **Booking form:** `src/components/BookingForm.tsx` (Web3Forms, emails LS-STREET-MMA@hotmail.com)

Original full-size logo/hero images are in `design-source/`.

## Run it locally

```sh
npm install
npm run dev      # live preview at http://localhost:8080
npm run build    # builds to dist/ (scripts/postbuild.mjs then adds dist/coach/index.html + 404.html)
```

## Note about Lovable

This repo started as the Lovable project "Street Ready Defense". Lovable's GitHub link is no longer connected,
so Lovable does **not** have these changes. Don't reconnect Lovable to this repo without checking first,
or it may push its older version over this one.
