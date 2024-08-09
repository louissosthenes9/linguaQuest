
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

  if(!userProgress || !userProgressData){
      redirect("/courses")
  }



  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
         <StickyWrapper>
               <UserProgress
                activeCourse = {{title:"Spanish",imageSrc:"/es.svg"}}
                hearts ={5}
                points ={100}
                hasActiveSubscription={false}
               />
         </StickyWrapper>

         <FeedWrapper>
            <Header title = "spanish"/>
         </FeedWrapper>
    </div>
  )
}

export default page