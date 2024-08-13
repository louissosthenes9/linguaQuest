
import FeedWrapper from '@/components/FeedWrapper'
import StickyWrapper from '@/components/StickyWrapper'
import React from 'react'
import Header from './Header'
import UserProgress from '@/components/UserProgress'
import { getUserProgress, getCourses } from '@/db/queries'
import { redirect } from 'next/navigation'

const page = async () => {
  const  userProgressData =  getUserProgress()

  const [userProgress] = await Promise.all(
   [ 
    userProgressData
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
         </FeedWrapper>
    </div>
  )
}

export default page