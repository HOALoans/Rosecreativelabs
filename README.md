# Rose Creative Labs

Art enrichment programs site for [rosecreativelabs.com](https://rosecreativelabs.com), built with Next.js and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Run production server    |
| `npm run lint` | Run ESLint               |

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- TypeScript

## Inquiry form (Resend)

The `/for-schools` inquiry form sends email via [Resend](https://resend.com).

1. Add `RESEND_API_KEY` to `.env.local` (from the [Resend dashboard](https://resend.com/api-keys))
2. Optionally set `CONTACT_EMAIL_TO` (defaults to a placeholder address)
3. For testing, `RESEND_FROM_EMAIL` can stay as `Rose Creative Labs <onboarding@resend.dev>`
4. Restart the dev server after changing env vars

## Instagram gallery

The homepage gallery pulls recent posts from [@madelinerose.arts](https://www.instagram.com/madelinerose.arts/) via the [Instagram Graph API](https://developers.facebook.com/docs/instagram-api). Without API credentials, the section shows placeholders and links to Instagram.

1. Copy `.env.example` to `.env.local`
2. Create a [Meta Developer](https://developers.facebook.com/) app with Instagram API access
3. Connect a Business or Creator Instagram account to a Facebook Page
4. Generate a long-lived token with `instagram_basic` (or Graph API media permissions)
5. Set `INSTAGRAM_ACCESS_TOKEN` and `INSTAGRAM_USER_ID` in `.env.local`
6. Restart the dev server

## Project structure

```
src/
├── app/           # Routes, layout, global styles
└── components/    # Page sections (Header, Hero, Work, etc.)
```
