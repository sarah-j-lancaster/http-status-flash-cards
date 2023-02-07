This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Deployed at:

[http-status-flash-cards.vercel.app](https://http-status-flash-cards.vercel.app/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Designs:

[Figma link](https://www.figma.com/file/j0rBfQZ9iahRMhSKscJTGU/HTTP-status-codes-and-cats?node-id=0%3A1&t=G2RxuGN26KjPUTQ6-1)

## Most important improvements remaining:

- Unit test getStatusCodes function
- Set up css vars eg. breakpoints properly
- Stop lazy loading the images/handle slow image load
- Better user feedback after click (more clear UX)
