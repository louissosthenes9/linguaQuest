"use client"
import Footer from "./footer"
import Header from "./header"
import "../../app/globals.css";
type Props = {
    children:React.ReactNode
}

export default function Marketinglayout({children}:Props) {
  return (
    <div
    className="min-h-screen flex flex-col "
    >  
        <Header />
        <main className="flex-1 flex-col items-center justify-center">
        {children}
        </main>
        <Footer />
    </div>
  )
}
