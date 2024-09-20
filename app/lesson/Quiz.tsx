'use client'
import { challengeOptions, challenges } from '@/db/schema';
import React, { useState } from 'react'
import Header from './Header';


type Props = {
  initialPercentage:number;
  initialHearts:number;
  initialLessonId:number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed:boolean;
    challengeOptions:typeof challengeOptions.$inferSelect[]
  })[];
  userSubscription:any
}

const Quiz = ({
initialHearts,
initialLessonId,
initialPercentage,
initialLessonChallenges,
userSubscription,

} : Props) => {
    const [challenges, setChallenges] = useState(initialLessonChallenges);
    const [hearts,setHearts] = useState(initialHearts);
    const [percentage,setPercentage] = useState(initialPercentage) 
    const [activeIndex,setActiveIndex] = useState(()=>{
      const uncompletedIndex = challenges.findIndex((challenge)=>{
        
      })
    })
 
    return (
    <>
        <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
        />

        <div className='flex-1'>
            <div className="h-full flex items-center justify-center">
                <div className="lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
                     <h1 className='text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700'>
                            
                     </h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Quiz