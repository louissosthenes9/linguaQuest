import { relations } from "drizzle-orm"
import {integer, pgTable, serial, text} from "drizzle-orm/pg-core"
export const courses = pgTable("courses",{
    id:serial("id").primaryKey(),
    title: text("title").notNull(),
    imageSrc: text("image_src").notNull()

})


export const coursesRelations = relations(courses,({many})=>({
    userProgess:many(userProgess),
}))

export const userProgess = pgTable("User_progress",{
    userId:text("user_id").primaryKey(),
    userName:text("user_name").notNull().default("user"),
    userImageSrc:text("user_image_src").notNull().default("/mascot.svg"),
    activeCourseId:integer("active_course_id").references(()=>courses.id, {
        onDelete:"cascade"
    },
    ),
    hearts:integer("hearts").notNull().default(5),
    points:integer("points").notNull().default(0),

  

})


export const userProgressRelations = relations(userProgess,({one})=>(
    {
        activeCourse:one(courses,{
            fields:[userProgess.activeCourseId],
            references:[courses.id]  
        })
    }
)

)