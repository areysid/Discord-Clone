import { NextResponse } from "next/server";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { v4 as uuidv4 } from "uuid";

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
      return new NextResponse("Server ID Missing", { status: 400 });
    }

    const updatedServer = await db.server.update({
      where: {
        id: serverId,
        profileId: profile.id,
      },
      data: {
        inviteCode: uuidv4(),
      },
    });

    return NextResponse.json(updatedServer);
  } catch (error) {
    console.log("[SERVER_ID_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
