import { NextResponse } from "next/server";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

// Define the type for the dynamic route parameters
interface RouteContext {
  params: Promise<{ serverId: string }>;
}

export async function PATCH(req: Request, context: RouteContext) {
  try {
    // Resolve the params Promise
    const { serverId } = await context.params;
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!serverId) {
      return new NextResponse("Server ID missing", { status: 400 });
    }

    const server = await db.server.update({
      where: {
        id: serverId,
        profileId: {
          not: profile.id, // Ensure the user is not the server owner
        },
        members: {
          some: {
            profileId: profile.id, // Ensure the user is a member
          },
        },
      },
      data: {
        members: {
          deleteMany: {
            profileId: profile.id, // Remove the user from the server
          },
        },
      },
    });

    if (!server) {
      return new NextResponse("Forbidden or Server not found", { status: 403 });
    }

    return NextResponse.json(server);
  } catch (error) {
    console.log("[SERVER_ID_LEAVE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
