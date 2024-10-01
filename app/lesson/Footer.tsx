import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { is } from "drizzle-orm";
import { CheckCircle, XCircle } from "lucide-react";
import {useKey, useMedia} from "react-use"


type Props = {
    onCheck: ()=> void;
    status: "correct" |  "wrong"  | "none" | "completed"
    disabled?: boolean;
    lessonId:boolean;
  }
const Footer = ({
  onCheck,
  status,
  disabled,
  lessonId
} : Props) => {
  useKey("Enter",onCheck, {}, [onCheck])

  const isMobile = useMedia("(max-width:1024)")
  return (
    <footer className={cn(
      "lg:h-[140px] h-[100px] border-t-2 lg:mt-8",
      status === "correct" && "border-transparent bg-green-200",
      status === "wrong" && "border-t-transparent bg-rose-200"

    )}>
              <div className="max-w-[1140px] h-full mx-auto flex items-center justify-between px-6 lg:px-10">
                    {status === "correct" && (
                      <div className="text-green-500 font-bold text-base lg:text-2xl">
                         <CheckCircle className="size-6 lg:size-10 mr-4 "/>
                           Nicely done !
                      </div>
                    )}
                    {status === "wrong" && (
                      <div className="text-rose-500 font-bold text-base lg:text-2xl">
                         <XCircle className="size-6 lg:size-10 mr-4 "/>
                          Try Again.
                      </div>
                    )}
                    {status === "completed" && (
                      <Button 
                      variant={'default'}
                      size={isMobile ? "sm" : "lg"}
                      onClick={()=>window.location.href = `/lesson/${lessonId}`}
                      className="text-rose-500 font-bold text-base lg:text-2xl">
                         Practice Again
                      </Button>
                    )}
                     <Button 
                     disabled = {disabled}
                     className="ml-auto"
                     onClick={onCheck}
                     size={isMobile ? "sm" : "lg"}
                     variant={status=== "wrong" ? "danger" : "secondary"}
                     
                     >
                      {status === "none"  && "check"}
                      {status === "correct"  && "next"}
                      {status === "wrong"  && "retry"}
                      {status === "completed"  && "continue"}
                      
                      </Button> 
               </div> 
    </footer>
  )
}

export default Footer