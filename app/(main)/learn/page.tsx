
import FeedWrapper from '@/components/FeedWrapper'
import StickyWrapper from '@/components/StickyWrapper'
import React from 'react'
import Header from './Header'
import UserProgress from '@/components/UserProgress'
import { getUserProgress, getCourses, getUnits, getCourseProgress, getLessonPercentage } from '@/db/queries'
import { redirect } from 'next/navigation'
import { unitsRelations } from '@/db/schema'
import Unit from './Unit'

const page = async () => {
  const  userProgressData =  getUserProgress()
  const  unitsData        =  getUnits()
  const courseProgressData = getCourseProgress()
  const lessonPercentageData = getLessonPercentage()

  const [userProgress,units,courseProgress, lessonPercentage] = await Promise.all(
   [ 
    userProgressData,
    unitsData,
    courseProgressData,
    lessonPercentageData

  ]
  )

  if(!userProgress || !userProgress.activeCourse){
     redirect("/courses")
  }

  if(!courseProgress){
    redirect('/courses')
  }


  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
         <StickyWrapper>
               <UserProgress
                activeCourse = {userProgress.activeCourse}
                hearts ={userProgress.hearts}
                points ={userProgress.points}
                hasActiveSubscription={false}
               />
         </StickyWrapper>

         <FeedWrapper>
            <Header title ={userProgress.activeCourse?.title}/>
        
              {
                units.map((unit)=>(
                      <div key={unit.id} className='mb-10'>
                           <Unit 
                           id={unit.id}
                           order={unit.order}
                           description={unit.description}
                           title = {unit.title}
                           lessons = {unit.lessons}
                           activeLesson = {courseProgress.activeLesson}
                           activeLessonPercentage = {lessonPercentage}
                           
                           
                           >
                             
                          </Unit>  
                      </div>

                ))
              }
         </FeedWrapper>
    </div>
  )
}

export default page