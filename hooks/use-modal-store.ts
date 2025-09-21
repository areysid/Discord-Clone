// import { Server } from "@prisma/client";
import { ServerWithMembersWithProfiles } from "@/types";
import { create } from "zustand";
import{Channel, ChannelType, Server} from "@prisma/client";


export type ModalType = "createServer" | "invite" | "editServer" | "members" | "createChannel" | 
"leaveServer" | "deleteServer" | "deleteChannel" | "editChannel" | "messageFile" | "deleteMessage";

interface modalData {
  server?: Server;
  channel?:Channel;
  channelType?: ChannelType;
  apiUrl?: string;
  query?: Record<string, any>;
}

interface ModalStore {
  type: ModalType | null;
  data : modalData
  isOpen: boolean;
  onOpen: (type: ModalType, data?: modalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data={}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));