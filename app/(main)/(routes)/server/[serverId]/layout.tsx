import { currentProfile } from "@/lib/current-profile";
import { RedirectToSignIn } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { ServerSidebar } from "@/components/server/server-sidebar";

const ServerIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { serverId: string };
}) => {
  const profile = await currentProfile();

  if (!profile) {
    return <RedirectToSignIn />;
  }

  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
    },
    include: {
      members: true,
    },
  });

  const isMember = server?.members.some(
    (member) => member.profileId === profile.id
  );

  if (!server || !isMember) {
    return redirect("/");
  }

  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
        {/* Sidebar content goes here */}
        <ServerSidebar serverId = {params.serverId} />
      </div>
      <main className="h-full md:pl-60">{children}</main>
    </div>
  );
};

export default ServerIdLayout;
