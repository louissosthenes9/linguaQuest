import { lessons, units } from "@/db/schema"
import UnitBanner from "./UnitBanner"
import LessonButton from "./LessonButton"

type Props ={
    id:number,
    order:number,
    title:string,
    description:string,
    lessons:(typeof lessons.$inferSelect & {
        completed:boolean
    })[],
    activeLesson:typeof lessons.$inferSelect & {
        unit:typeof units.$inferSelect
    } | undefined ,

    activeLessonPercentage:number

}
const Unit = ({
    id,
    order,
    title,
    description,
    lessons,
    activeLessonPercentage,
    activeLesson,
    

    
}:Props) => {
  return (
    <>
        <UnitBanner title={title} description ={description}/>
        
        <div className="flex items-center flex-col relative">
              {lessons.map((lesson,index)=>
                {
                 const isCurrent = lesson.id===activeLesson?.id
                 const  isLocked= !lesson.completed && !isCurrent;
                

                 return (
                    <LessonButton
                    key={lesson.id}
                    id={lesson.id} 
                    index={index} 
                    locked={isLocked} 
                    current={isCurrent}
                    percentage={activeLessonPercentage}
                    totalCount={lessons.length - 1}

                    />
                 )
                   
                 })}
        </div>

    </>
  )
}

export default Unit