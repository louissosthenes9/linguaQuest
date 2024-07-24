import Image from "next/image";
import Link from "next/link";
import React from "react";
import SideBarItem from './SideBarItem'
export default function Sidebar() {
  return (
    <div className="hidden lg:flex w-[256px] h-full">
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


       <div className="flex flex-col gap-y-2 flex-1">
          <SideBarItem label="learn" iconSrc={""} href="/" />
       </div>
    </div>
  );
}
