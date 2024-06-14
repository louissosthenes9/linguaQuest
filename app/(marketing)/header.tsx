import { Button } from "@/components/ui/button";
import {UserButton } from "@clerk/clerk-react";
import { ClerkLoaded,SignInButton, ClerkLoading, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
   <header className="h-20 w-full px-4 border-b-2 border-slate-20">
      <div className="lg:max-w-screen-lg mx-auto flex justify-between h-full items-center">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
             <Image 
                src={"/mascot.svg"}
                height={40}
                width={40}
                alt="mascot"
             />
            <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
               Lingua Quest
            </h1>
        </div>

        <ClerkLoading>
           <Loader className="h-5 animate-spin w-5 text-muted-foreground"/>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/"/>
          </SignedIn>
          <SignedOut > 
              <SignInButton mode="modal" >
                 <Button size={"lg"} variant={"ghost"}>
                     Login
                 </Button>
              </SignInButton> 
          </SignedOut>      
            
        </ClerkLoaded>
      </div>
   </header>
  )
}
