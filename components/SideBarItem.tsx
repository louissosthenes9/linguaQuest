"use client"

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
    label : string;
    iconSrc: string ;
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
      <Link href={href} className="flex">
        <Image
        src={iconSrc}
        alt={label}
        className="mr-5"
        height={32}
        width={32}
        />
      {label }
      </Link>
    </Button>
  )
}
