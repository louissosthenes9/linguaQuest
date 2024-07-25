import Image from "next/image";
import Link from "next/link";
import React from "react";
import SideBarItem from './SideBarItem'
import { cn } from "@/lib/utils";
import { ClerkLoading ,ClerkLoaded ,UserButton} from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?:string;
}


export default function Sidebar({className}:Props) {
  return (
    <div className={cn("flex h-full lg:fixed  left-0 top-0 px-4 lg:w-[256px]  border-r-2  flex-col", className)}>
      <Link href={"/learn"}>
      <div className="pt-8 pl-4 pb-7 flex gap-x-3">
        <div>
             <Image src={"/mascot.svg"} height={40} width={40} alt="mascot" />            
        </div>
        <div>
          <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
            LinguaQuest
          </h1>
        </div>
      </div>
      </Link>

        {/* navlinks */}

       <div className="flex flex-col gap-y-2 flex-1">
          <SideBarItem label="learn" iconSrc={"/learn.svg"} href="/learn" />
          <SideBarItem label="leaderboard" iconSrc={"/leaderboard.svg"} href="/leaderboard" />
          <SideBarItem label="quests" iconSrc={"/quests.svg"} href="/quests" />
          <SideBarItem label="shop" iconSrc={"/shop.svg"} href="/shop" />
       </div>

        <div className="p-4">
            <ClerkLoading>
                <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
            </ClerkLoading>

            <ClerkLoaded>
               <UserButton afterSignOutUrl="/" /> 
            </ClerkLoaded>
        </div>
    </div>
  );
}
