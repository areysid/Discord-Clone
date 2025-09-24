# Discord Clone - Main Branch

A modern fullstack Discord clone built with [Next.js 13](https://nextjs.org/), [React](https://react.dev/), [Socket.io](https://socket.io/), [Prisma](https://www.prisma.io/), [TailwindCSS](https://tailwindcss.com/), [MySQL (Planetscale)](https://planetscale.com/), [Clerk](https://clerk.com/), [ShadcnUI](https://ui.shadcn.com/), [UploadThing](https://uploadthing.com/), [Tanstack Query](https://tanstack.com/query/latest), and [LiveKit](https://livekit.io/).

This branch is **optimized for deployment on Vercel**.  
The project is live on [Vercel-DiscordClone](https://discord-clone-umber-chi.vercel.app/)

If you want a smoother local development experience, check out the [`version1`](https://github.com/areysid/Discord-Clone/tree/version1) branch.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 13, React, TailwindCSS, ShadcnUI
- **Backend:** Next.js API routes, Socket.io, Prisma ORM
- **Database:** MySQL (Planetscale)
- **Authentication:** Clerk
- **File Uploads:** UploadThing
- **Real-time:** Socket.io, LiveKit (voice/video)
- **State/Data:** Tanstack Query (infinite scrolling, caching)
- **Deployment:** Vercel (optimized)

---

## Getting Started

### 1. Clone the repository:

```bash
git clone https://github.com/areysid/Discord-Clone.git
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

### 4. Push Prisma schema to Planetscale

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

## 🚀 Deploy on Vercel

This branch is optimized for [Vercel](https://vercel.com/) deployment.

1. Connect your GitHub repository to Vercel.
2. Set up your environment variables in the Vercel dashboard.
3. Deploy!

_Read more in the [Next.js deployment documentation](https://nextjs.org/docs/deployment)._

---

## 🤝 Credits

- **Tutorial by [Code With Antonio](https://www.youtube.com/@codewithantonio):**  
  [Fullstack Discord Clone: Next.js 13, React, Socket.io, Prisma, TailwindCSS, MySQL]([https://www.youtube.com/watch?v=nu5mdN2JIwM](https://youtu.be/ZbX4Ok9YX94?si=w5ev8eUcXv1sB7ET))
- **Project assistance by various AI chat agents.**

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Clerk Docs](https://clerk.com/docs)
- [ShadcnUI Docs](https://ui.shadcn.com/docs)
- [LiveKit Docs](https://docs.livekit.io/)

---

## 🧩 Community & Contributions

This project was built with an older stack and does run slower compared to the real Discord app.  
That said, it’s fully open-source, and we **welcome contributions from the community** to improve performance, modernize the stack, or add new features.

If you’d like to contribute:
1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request.

Your ideas and improvements are more than welcome! 🚀

---

**Note:**  
If you want to set up the project for local development, check out the [`version1`](https://github.com/areysid/Discord-Clone/tree/version1) branch which comes with extra local setup instructions and may be easier to run locally.
