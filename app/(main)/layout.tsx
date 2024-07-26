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
      <Sidebar className="hidden lg:flex"/>
      <main className="lg:pl-[256px] h-full lg:pt-0 pt-[50px]">
        <div className="max-w-[1056px] mt-6 mx-auto h-full">
           {children}
        </div>
      </main>
    </>
    )
}

export default MainLayout