"use client"

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
    label : string;
    iconSrc: String;
    href:string;
}
export default function SideBarItem({
 label,
 iconSrc,
 href
} : Props) {

    const pathname = usePathname()
    const active = pathname===href
    
  return (
    <Button 
     variant={active? "sideBarOutline":"sideBar"}
     className="justify-start h-[52px]"
     asChild
    >
      <Link href={"/learn"}>
      {label }
      </Link>
    </Button>
  )
}
