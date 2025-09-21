import { currentProfile } from "@/lib/current-profile";
import { RedirectToSignIn } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

// Define the expected type for params
interface ServerIdPageProps {
  params: Promise<{ serverId: string }>;
}

const ServerIdPage = async ({ params }: ServerIdPageProps) => {
  // Resolve the params Promise
  const { serverId } = await params;

  const profile = await currentProfile();
  if (!profile) {
    redirect("/sign-in");
  }

  const server = await db.server.findUnique({
    where: {
      id: serverId,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
    include: {
      channels: {
        where: {
          name: "general",
        },
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  const initialChannel = server?.channels[0];
  if (initialChannel?.name !== "general") {
    return null;
  }

  return redirect(`/server/${serverId}/channels/${initialChannel?.id}`);
};

export default ServerIdPage;
