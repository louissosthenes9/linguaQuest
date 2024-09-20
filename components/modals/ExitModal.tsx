"use client";

import { useExitMode } from "@/store/use-exit-modal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";

const ExitModal = () => {
  const router = useRouter();
  const [isclient, setIsClient] = useState(false);
  const { isOpen, close } = useExitMode();

  useEffect(() => setIsClient(true), []);

  if (!isclient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md flex flex-col items-center">
        <DialogHeader>
          <div className="flex items-center justify-center w-full">
            <Image
              src={"/mascot_sad.svg"}
              alt="Mascot"
              height={80}
              width={80}
            />
          </div>

          <DialogTitle className="text-center font-bold">
            Wait, don&apos;t leave yet!
          </DialogTitle>

          <DialogDescription className="text-center text-base">
            You are about to leave the lesson. Are you sure?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col">
            <Button
              variant={"primary"}
              size={"lg"}
              className="w-full"
              onClick={close}
            >
              keep Learning
            </Button>
            <Button
              variant={"dangerOutline"}
              size={"lg"}
              className="w-full"
              onClick={() => {
                close();
                router.push("/learn");
              }}
            >
              EndSession
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExitModal;
