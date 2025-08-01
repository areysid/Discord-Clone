"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import { useModal } from "@/hooks/use-modal-store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, Copy, RefreshCw } from "lucide-react";
import { useOrigin } from "@/hooks/use-origin";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";



export const LeaveServerModal = () => {
    const { isOpen, onClose, type, data } = useModal();
    const router = useRouter()

    const isModalopen = isOpen && type === "leaveServer";
    const { server } = data

  const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        try {
            setIsLoading(true);
            await axios.patch(`/api/servers/${server?.id}/leave`)

            onClose()
            router.refresh()
            router.push("/")

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={isModalopen} onOpenChange={onClose}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Leave Server
                    </DialogTitle>
                <DialogDescription className="text-center text-zinc-500">
                    Are you sure you want to leave <span className="font-semibold text-indigo-500">
                        {server?.name}?</span>
                </DialogDescription>
                </DialogHeader>
                <DialogFooter className="bg-gray-100 px-6 py-4">
                    <div className="flex items-center justify-between w-full">
                        <Button
                        disabled={isLoading}
                        onClick={onClose}
                        variant="ghost">
                            Cancel
                        </Button>
                        <Button
                        disabled={isLoading}
                        onClick={onClick}
                        variant="primary">
                            Confirm
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

