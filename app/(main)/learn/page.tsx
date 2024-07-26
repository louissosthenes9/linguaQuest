
import FeedWrapper from '@/components/FeedWrapper'
import StickyWrapper from '@/components/StickyWrapper'
import React from 'react'
import Header from './Header'

const page = () => {
  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
         <StickyWrapper>
               sticky wrapper
         </StickyWrapper>

         <FeedWrapper>
            <Header title = "spanish"/>
         </FeedWrapper>
    </div>
  )
}

export default page