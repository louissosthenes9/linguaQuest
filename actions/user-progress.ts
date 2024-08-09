"use server"

import db from "@/db/drizzle";
import { getCourseId, getUserProgress } from "@/db/queries";
import { userProgess } from "@/db/schema";
import { auth,currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upsertUserProgress = async (courseId:number)=>{
    const {userId} = auth();
    const user = await currentUser();

    if(!userId || !user){

        throw new Error("Unauthorized");

    }

    const course = await getCourseId(courseId)

    if(!course){
        throw new Error("course not found")
    }

    // if(!course.units.length || !course.units[0].lessons.length){
    //     throw new Error("course is empty")
    // }


    const existingUserProgress = await getUserProgress()

    if(existingUserProgress){
        await db.update(userProgess).set({
            activeCourseId:courseId,
            userName:user.firstName || "User",
            userImageSrc:user.imageUrl || "/mascot.svg"
        })


        revalidatePath("/courses");
        revalidatePath("/learn");
        redirect("/learn");
    }


    await db.insert(userProgess).values(
        {
            userId,
            activeCourseId:courseId,
            userName:user.firstName || "User",
            userImageSrc:user.imageUrl || "/mascot.svg"

        }
    );
    
    

    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");

}