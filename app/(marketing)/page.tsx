import { Button } from "@/components/ui/button";
import {ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, SignUpButton} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex flex-1 md:w-full flex-col lg:flex-row items-center justify-center p-4 gap-2">
     
        {/* container to hold the image component */}
       <div className="relative w-[240px] p-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0 ">
           <Image 
           src={"/hero.svg"}
           alt="hero image"
           fill={true}
           priority={true}
           />
       </div>
           <div className="flex flex-col items-center gap-y-8">
              <h1 className="text-xl lg:text-3xl font-bold text-center text-neutral-600 max-w-[480px] mx-auto">Start to your journey to fluency with lingua Quest</h1>
           </div>
           <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
               <ClerkLoading>
                   <Loader className="animate-spin h-5 w-5 text-muted-foreground" />
               </ClerkLoading>
               <ClerkLoaded>
                   <SignedOut>
                       <SignUpButton mode="modal">
                           <Button className = "w-full" size={"lg"} variant={"secondary"} asChild>
                               Get Started
                           </Button>
                       </SignUpButton>

                       <SignInButton mode={"modal"}>
                            <Button size={"lg"} variant={"primaryOutline"}>
                                I already have an account
                            </Button>
                       </SignInButton>
                   </SignedOut>

                   <SignedIn>
                            <Button
                                className={"w-full"}
                                asChild
                                size={"lg"} variant={"secondary"}>
                                <Link href="/learn">
                                   Continue learning
                                </Link>
                            </Button>
                   </SignedIn>
               </ClerkLoaded>

           </div>
    </div>
  );
}
