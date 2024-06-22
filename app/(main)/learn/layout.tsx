"use client"
type Props = {
    children : React.ReactNode
}

const MainLayout = ({
    children,
}: Props)=>{
   return(   
   <main className="bg-red-500">
        {children}
    </main>
    )
}

export default MainLayout