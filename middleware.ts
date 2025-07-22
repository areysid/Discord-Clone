// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// // const isPublicRoute = createRouteMatcher(["/", "/api/uploadthing"]);

// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",  // ✅ support catch-all routes like /sign-in/sso-callback
  "/sign-up(.*)",
  "/api/uploadthing"
]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) return; // Don't require auth for public routes

  const sessionAuth = await auth();
  if (!sessionAuth.isAuthenticated) {
    return sessionAuth.redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Match all routes except static files and Next.js internals
    "/((?!_next|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
};
