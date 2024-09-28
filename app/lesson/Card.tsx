import { challenges } from "@/db/schema"
import { cn } from "@/lib/utils"
import Image from "next/image"

type Props ={
    imageSrc:string | null
    audioSrc:string | null
    id:number
    text:string
    selected?:boolean
    status:"correct" | "wrong"| "none"
    shortcut:string
    onClick: ()=>void
    type : typeof challenges.$inferSelect["type"]
    disabled:boolean | undefined

}
const Card = ({
 status,
 text,
 disabled,
 imageSrc,
 shortcut,
 selected,
 id,
 onClick,
 type,
 audioSrc
}:Props) => {
  return (
    <div 
    onClick={()=>{}}
    className={cn(
      "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer  active:border-b-2"
      ,selected && "border-sky-300 bg-sky-100 "

      ,selected && status === "correct" && "border-green-300 bg-green-100 hover:bg-gray-100"
      ,selected && status === "wrong" && "border-rose-300 bg-rose-100 hover:bg-rose-100"
      ,disabled && "pointer-events-none hover:bg-white"
      ,type === "ASSIST" && "lg:p-3 w-full"
 
      )}
    >
           {
           imageSrc 
           &&
           (
            <div
            className="relative aspect-square mb-4 max-h-[80px] lg:max-h-[150px] w-full"
            >
                 <Image
                  src={imageSrc}
                  fill
                  alt={text}
                  aria-label={text}
                 />
            </div>

           )
           }
    </div>
  )
}

export default Card