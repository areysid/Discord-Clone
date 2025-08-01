"use client";

import { ServerWithMembersWithProfiles } from "@/types";
import { MemberRole, Server } from "@prisma/client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } 
from "@/components/ui/dropdown-menu";
import { ChevronDown, UserPlus, Settings, Users, PlusCircle, Trash, LogOut } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";

interface ServerHeaderProps {
  server: ServerWithMembersWithProfiles;
  role?: MemberRole
}

export const ServerHeader = ({
    server,
    role
}: ServerHeaderProps) => {
    const { onOpen } = useModal();
    const isAdmin = role === MemberRole.ADMIN;
const isModerator = isAdmin || role === MemberRole.MODERATOR;

return (
  <DropdownMenu>
    <DropdownMenuTrigger className="focus:outline-none" asChild>
      <button
        className="w-full text-md font-semibold px-3 flex items-center justify-between h-12
         border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-zinc-700/10
          dark:hover:bg-zinc-700/50 transition"
      >
        {/* You could insert role-based label or icon here */}
        {server.name}
        <ChevronDown className="h-5 w-5 mt-2"
        />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
  className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]"
>
  {isModerator && (
    <DropdownMenuItem
    onClick={() => onOpen("invite", { server })}
    className="text-indigo-600 dark:text-indigo-400 px-3 py-2 text-sm 
    cursor-pointer">
      Invite People
      <UserPlus className="h-4 w-4 ml-auto" />
    </DropdownMenuItem>
  )}
  {isAdmin && (
    <DropdownMenuItem 
    onClick={() => onOpen("editServer", { server })}
    className=" px-3 py-2 text-sm 
    cursor-pointer">
      Server Settings
      <Settings className="h-4 w-4 ml-auto" />
    </DropdownMenuItem>
  )}
  {isAdmin && (
    <DropdownMenuItem
    onClick={() => onOpen("members", { server })}
    className=" px-3 py-2 text-sm 
    cursor-pointer">
      Manage Members
      <Users className="h-4 w-4 ml-auto" />
    </DropdownMenuItem>
  )}
  {isModerator && (
    <DropdownMenuItem
    onClick={() => onOpen("createChannel", { server })}
    className=" px-3 py-2 text-sm 
    cursor-pointer">
      Create Channel
      <PlusCircle className="h-4 w-4 ml-auto" />
    </DropdownMenuItem>
  )}
  {isModerator && (
    <DropdownMenuSeparator />
  )}
  {isAdmin && (
    <DropdownMenuItem
    onClick={() => onOpen("deleteServer", { server })}
    className="text-rose-500 px-3 py-2 text-sm 
    cursor-pointer">
      Delete Server
      <Trash className="text-rose-500 h-4 w-4 ml-auto" />
    </DropdownMenuItem>
  )}
  {!isAdmin && (
    <DropdownMenuItem
    onClick={() => onOpen("leaveServer", { server })}
    className="text-rose-500 px-3 py-2 text-sm 
    cursor-pointer">
      Leave Server
      <LogOut className="text-rose-500 h-4 w-4 ml-auto" />
    </DropdownMenuItem>
  )}
</DropdownMenuContent>
  </DropdownMenu>
);
    return(
        <div>
            ServerHeader!
           
        </div>
    )
}