"use client"

import { Button } from "./ui/button";

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
  return (
    <Button>
      {label }
    </Button>
  )
}
