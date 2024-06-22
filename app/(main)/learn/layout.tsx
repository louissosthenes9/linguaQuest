"use client"

import Sidebar from "@/components/Sidebar"

type Props = {
    children : React.ReactNode
}

const MainLayout = ({
    children,
}: Props)=>{
   return(   
    <>
    <Sidebar />
      <main className="pl-[256px] h-full">
        div
      </main>
    </>
    )
}

export default MainLayout