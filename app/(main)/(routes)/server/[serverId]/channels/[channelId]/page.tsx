
import {currentProfile} from "@/lib/current-profile";
import {RedirectToSignIn} from "@clerk/nextjs";
import {db} from "@/lib/db";
import { redirect } from "next/navigation";
import { ChatHeader } from "@/components/chat/chat-header";
import { ChatInput } from "@/components/chat/chat-input";


interface ChannelIdPageProps{
  params: {
    serverId: string;
    channelId: string;
  }
};

const ChannelIdPage = async ({
    params
}: ChannelIdPageProps) => {

    const profile = await currentProfile();

    if(!profile){
        return <RedirectToSignIn />;
    }

    const channel = await db.channel.findUnique({
        where: {
            id: params.channelId,
            serverId: params.serverId,
        },
    });

    const member = await db.member.findFirst({
        where: {
            serverId: params.serverId,
            
        },
    });
   // console.log("Fetched channel:", channel);

    if(!channel || !member){
        redirect ("/");
    }

    return (
        <div className = "bg-white dark:bg-[#313338] flex flex-col h-full">
            <ChatHeader 
            name={channel.name}
            serverId={channel.serverId}
            type="channel"
            />
            <div className="flex-1">Future Messages</div>
            <ChatInput 
             name={channel.name}
             type="channel"
             apiUrl="/api/socket/message"
             query={{
                channelId: channel.id,
                serverId: channel.serverId,
             }}
            />
        </div>
    );
}

export default ChannelIdPage;
