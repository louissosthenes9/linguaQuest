import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex flex-1 w-full flex-col lg:flex-row items-center justify-center p-4 gap-2">
     
        {/* container to hold the image component */}
       <div className="relative w-[240px] p-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0 ">
           <Image 
           src={"/hero.svg"}
           alt="hero image"
           fill
           />
           <div className="flex flex-col items-center gap-y-8">
              <h1 className="text-xl lg:text-3xl font-bold text-center text-neutral-600 max-w-[480px] ">Start to your journey to fluency with lingua Quest</h1>
           </div>
           <ClerkLoading>
              <Loader className="animate-spin h-5 w-5 text-muted-foreground" />
           </ClerkLoading>
           <ClerkLoaded>
            <SignedOut>
               <SignUpButton mode="modal">
                 <Button size={"lg"} variant={"secondary"}>
                    Get Started 
                 </Button>
               </SignUpButton>
            </SignedOut>
               <SignedIn>

               </SignedIn>
           </ClerkLoaded>
       </div>
      
   
    </div>
  );
}
