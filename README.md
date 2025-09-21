# Discord Clone - Version 1 Branch

A feature-rich Discord clone built with [Next.js 13](https://nextjs.org/), [React](https://react.dev/), [Socket.io](https://socket.io/), [Prisma](https://www.prisma.io/), [TailwindCSS](https://tailwindcss.com/), [MySQL](https://www.mysql.com/), [Clerk](https://clerk.com/), [ShadcnUI](https://ui.shadcn.com/), [UploadThing](https://uploadthing.com/), [Tanstack Query](https://tanstack.com/query/latest), and [LiveKit](https://livekit.io/).

**This branch is recommended for local development and testing.**  
If you plan to deploy to Vercel, check the [`main`](https://github.com/areysid/Discord-Clone/tree/main) branch, which is optimized for cloud deployment.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 13, React, TailwindCSS, ShadcnUI
- **Backend:** Next.js API routes, Socket.io, Prisma ORM
- **Database:** MySQL (local or Planetscale)
- **Authentication:** Clerk
- **File Uploads:** UploadThing
- **Real-time:** Socket.io, LiveKit (voice/video)
- **State/Data:** Tanstack Query (infinite scrolling, caching)

---

## Getting Started

### 1. Clone the repository:

```bash
git clone https://github.com/areysid/Discord-Clone.git -b version1
```

### 2. Install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

### 3. Configure environment variables:

- Create `.env` and fill in the required credentials (Clerk, MySQL, UploadThing, LiveKit, etc.).
- For local MySQL, ensure a running database and update credentials accordingly.

```bash
DATABASE_URL="YOUR_PLANETSCALE_DATABASE_URL"
CLERK_FRONTEND_API="YOUR_CLERK_FRONTEND_API"
CLERK_API_KEY="YOUR_CLERK_API_KEY"
LIVEKIT_API_KEY="YOUR_LIVEKIT_API_KEY"
LIVEKIT_API_SECRET="YOUR_LIVEKIT_API_SECRET"
UPLOADTHING_KEY="YOUR_UPLOADTHING_KEY"
```

### 4. Push Prisma schema to your MySQL database

```bash
npx prisma db push
```

### 5. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

- Open [http://localhost:3000](http://localhost:3000) to see the result.

---

## Notes

- The **main** branch is better if you want to deploy directly to Vercel with Planetscale and pre-configured cloud settings.
- The **version1** branch is better for local machines, easier MySQL setup, and testing before pushing to production.

---

## 🤝 Credits

- **Tutorial by [Code With Antonio](https://www.youtube.com/@codewithantonio):**  
  [Fullstack Discord Clone: Next.js 13, React, Socket.io, Prisma, TailwindCSS, MySQL]([https://www.youtube.com/watch?v=nu5mdN2JIwM](https://youtu.be/ZbX4Ok9YX94?si=w5ev8eUcXv1sB7ET))
- **Project assistance by ChatGPT & Grok**

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Clerk Docs](https://clerk.com/docs)
- [ShadcnUI Docs](https://ui.shadcn.com/docs)
- [LiveKit Docs](https://docs.livekit.io/)

---

**Happy coding!**
