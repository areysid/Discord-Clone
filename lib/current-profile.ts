import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";


export const currentProfile = async () => {
  const session = await auth();
  const { userId } = session;

  if (!userId) {
    return null;
  }

  const profile = await db.profile.findUnique({
    where: {
      userId
    }
  });

  return profile;
};