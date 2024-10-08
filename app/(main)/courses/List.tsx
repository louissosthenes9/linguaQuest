"use client"

import { courses, userProgress } from "@/db/schema";
import Card from "./Card";
import { useRouter } from "next/navigation";
import { startTransition, useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";

type Props ={
    courses: typeof courses.$inferSelect[]; 
    activeCourseId?:typeof userProgress.$inferSelect.activeCourseId;
}
export default function List({courses,activeCourseId}:Props) {
   const router = useRouter();

   const [pending,startTransiton] = useTransition()
  
   const onClick = (id:number)=>{
         if(pending) return;

         if(id===activeCourseId){
          return router.push("/learn")
         }

         startTransition(()=>{
          upsertUserProgress(id)
          .catch(()=>toast.error("something went wrong"))
         })
   }
  return (
    <div className="pt-6 grid grid-cols-2 gap-4 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
       {
        courses.map(
            (course)=>(
                <Card 
                key={course.id}
                id={course.id}
                title={course.title}
                imageSrc={course.imageSrc}
                onClick = {onClick}
                disabled = {pending}
                active = {course.id===activeCourseId} 
                />
            )
        )
       }
    </div>
  )
}
