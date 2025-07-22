"use client";

import { useClerk } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export const NavigationUserActions = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.replace("/sign-in");
  };

  return (
    <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
      <ModeToggle />
      <UserButton
        appearance={{
          elements: {
            avatarBox: "h-[48px] w-[48px]",
          },
        }}
      />
      <div className="relative group">
        <button
          onClick={handleSignOut}
          className={cn(
            "relative flex items-center justify-center h-12 w-12 rounded-full transition-all",
            "hover:rounded-xl hover:bg-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-400"
          )}
        >
          <LogOut className="h-6 w-6 text-red-500 transition-colors" />
        </button>
        <span
          className={cn(
            "absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1",
            "bg-gray-900 text-white text-xs font-semibold rounded",
            "opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-auto h-auto"
          )}
        >
          Sign out
        </span>
      </div>
    </div>
  );
};
