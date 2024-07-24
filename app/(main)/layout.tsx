"use client"

import Sidebar from "@/components/Sidebar"
import {MobileHeader} from "@/components/MobileHeader";
import React from "react";

type Props = {
    children : React.ReactNode
}

const MainLayout = ({
    children,
}: Props)=>{
   return(   
    <>
      <MobileHeader />
      <Sidebar/>
      <main className="pl-[256px] h-full">
        {children}
      </main>
    </>
    )
}

export default MainLayout