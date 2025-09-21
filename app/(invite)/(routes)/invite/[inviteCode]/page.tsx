import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { RedirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

// Define the expected type for params
interface InviteCodePageProps {
  params: Promise<{ inviteCode: string }>;
}

const InviteCodePage = async ({ params }: InviteCodePageProps) => {
  // Resolve the params Promise
  const { inviteCode } = await params;

  const profile = await currentProfile();
  if (!profile) return <RedirectToSignIn />;
  if (!inviteCode) redirect("/");

  const existingServer = await db.server.findFirst({
    where: {
      inviteCode: inviteCode,
      members: { some: { profileId: profile.id } },
    },
  });

  if (existingServer) redirect(`/server/${existingServer.id}`);

  const server = await db.server.update({
    where: { inviteCode: inviteCode },
    data: { members: { create: [{ profileId: profile.id }] } },
  });

  if (server) redirect(`/server/${server.id}`);

  return null;
};

export default InviteCodePage;
