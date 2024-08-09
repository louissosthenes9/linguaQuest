import { getCourses, getUserProgress } from "@/db/queries"
import List from "./List"


const page =async () => {
    const  userProgressData =  getUserProgress()
    const  coursesData = getCourses()

    const [courses, userProgress] = await Promise.all(
     [ 
      coursesData,
      userProgressData
    ]
    )
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
        <h1 className="text-2xl font-bold text-neutral-700 ">

        </h1>
       <List 
       courses={courses} 
       activeCourseId={userProgress?.activeCourseId}/>
    </div>
  )
}

export default page