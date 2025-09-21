import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { RedirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const InviteCodePage = async ({ params }: { params: { inviteCode: string } }) => {
  const profile = await currentProfile();

  if (!profile) return <RedirectToSignIn />;

  if (!params.inviteCode) redirect("/");

  const existingServer = await db.server.findFirst({
    where: {
      inviteCode: params.inviteCode,
      members: { some: { profileId: profile.id } },
    },
  });

  if (existingServer) redirect(`/server/${existingServer.id}`);

  const server = await db.server.update({
    where: { inviteCode: params.inviteCode },
    data: { members: { create: [{ profileId: profile.id }] } },
  });

  if (server) redirect(`/server/${server.id}`);

  return null;
};

export default InviteCodePage;
