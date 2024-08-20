
import FeedWrapper from '@/components/FeedWrapper'
import StickyWrapper from '@/components/StickyWrapper'
import React from 'react'
import Header from './Header'
import UserProgress from '@/components/UserProgress'
import { getUserProgress, getCourses, getUnits } from '@/db/queries'
import { redirect } from 'next/navigation'
import { unitsRelations } from '@/db/schema'
import Unit from './Unit'

const page = async () => {
  const  userProgressData =  getUserProgress()
  const  unitsData        =  getUnits()

  const [userProgress,units] = await Promise.all(
   [ 
    userProgressData,
    unitsData
  ]
  )

  if(!userProgress || !userProgress.activeCourse){
     redirect("/courses")
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
                           activeLesson = {null}
                           activeLessonPercentage = {0}
                           
                           
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