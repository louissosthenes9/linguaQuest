import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { InfinityIcon } from "lucide-react";
import { courses } from "@/db/schema";

type Props = {
    activeCourse :typeof courses.$inferSelect, 
    hearts : number,
    points : number,
    hasActiveSubscription:boolean
}

export default function UserProgress({
    activeCourse,hasActiveSubscription,
    points,
    hearts}:Props) {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
         <Link href="/courses">
             <Button variant={'ghost'}>
                 <Image 
                   src={activeCourse.imageSrc}
                   alt={activeCourse.title}
                   className="rounded-md border"
                   width={32}
                   height={32}
                 />
             </Button>
         </Link>

         <Link href={"/shop"}>
             <Button className="text-orange-500" variant={'ghost'}>
                  <Image src={"/points.svg"}  height={28} alt="points" width={28} className="mr-2"/>
                  {points}
             </Button>
         </Link>

         <Link href={"/shop"}>
             <Button className="text-rose-500" variant={'ghost'}>
                  <Image src={"/heart.svg"}  height={22} alt="hearts" width={22} className="mr-2"/>
                  {hasActiveSubscription
                  ?<InfinityIcon className="h-4 w-4 stroke-[3]"/> 
                  : hearts}
             </Button>
         </Link>
    </div>
  )
}
