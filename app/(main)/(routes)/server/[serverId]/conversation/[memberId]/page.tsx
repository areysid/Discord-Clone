import React from "react";
import { currentProfile } from "@/lib/current-profile";
import { RedirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { getOrCreateConversation } from "@/lib/conversation";
import { ChatHeader } from "@/components/chat/chat-header";
import { ChatMessages } from "@/components/chat/chat-messages";
import { ChatInput } from "@/components/chat/chat-input";
import { MediaRoom } from "@/components/media-room";

// Define the expected type for params and searchParams
interface MemberIdPageProps {
  params: Promise<{ memberId: string; serverId: string }>;
  searchParams: Promise<{ video?: boolean }>;
}

const MemberIdPage = async ({ params, searchParams }: MemberIdPageProps) => {
  // Resolve the params and searchParams Promises
  const { memberId, serverId } = await params;
  const { video } = await searchParams;

  const profile = await currentProfile();
  if (!profile) {
    return <RedirectToSignIn />;
  }

  const currentMember = await db.member.findFirst({
    where: {
      serverId: serverId,
      profileId: profile.id,
    },
    include: {
      profile: true,
    },
  });

  if (!currentMember) {
    return redirect("/");
  }

  const conversation = await getOrCreateConversation(currentMember.id, memberId);
  if (!conversation) {
    return redirect(`/server/${serverId}`);
  }

  const { memberOne, memberTwo } = conversation;
  const otherMember = memberOne.profileId === profile.id ? memberTwo : memberOne;

  return (
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
      <ChatHeader
        imageUrl={otherMember.profile.imageUrl}
        name={otherMember.profile.name}
        serverId={serverId}
        type="conversation"
      />
      {video && (
        <MediaRoom chatId={conversation.id} video={true} audio={true} />
      )}
      {!video && (
        <>
          <ChatMessages
            member={currentMember}
            name={otherMember.profile.name}
            chatId={conversation.id}
            type="conversation"
            apiUrl="/api/direct-messages"
            paramKey="conversationId"
            paramValue={conversation.id}
            socketUrl="/api/socket/direct-messages"
            socketQuery={{
              conversationId: conversation.id,
            }}
          />
          <ChatInput
            name={otherMember.profile.name}
            type="conversation"
            apiUrl="/api/socket/direct-messages"
            query={{
              conversationId: conversation.id,
            }}
          />
        </>
      )}
    </div>
  );
};

export default MemberIdPage;
