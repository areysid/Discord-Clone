// import { Server } from "@prisma/client";
import { ServerWithMembersWithProfiles } from "@/types";
import { create } from "zustand";

export type ModalType = "createServer" | "invite" | "editServer" | "members" | "createChannel" | 
"leaveServer" | "deleteServer";

interface modalData {
  server?: ServerWithMembersWithProfiles
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