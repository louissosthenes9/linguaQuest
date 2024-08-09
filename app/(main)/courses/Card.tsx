import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";
type Props ={
    title:string;
    id:number;
    imageSrc:string;
    onClick:(id:number)=>void;
    disabled?:boolean;
    active?:boolean;
}
export default function Card({
    title,
    id,
    imageSrc,
    disabled,
    onClick,
    active,
}:Props) {
  return (
    <div
    onClick = {()=>onClick(id)}
    className={cn("h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer justify-between p-3 pb-6 min-h-[217px] flex flex-col items-center min-w-[200px]",disabled && "pointer-events-none opacity-50")}
    >

        <div className="w-full flex items-center justify-end min-h-[24px]">
          {
            active && (
              <div className="round bg-green-600 flex items-center justify-center p-1.5">
                  <Check className="stroke-[4] h-4 w-4 text-white" />
              </div>
            ) 
          }

        </div>

        <Image
         src={imageSrc} 
         alt={title}
         height ={70}
         width={93.33}
         
         />
         <p className="text-neutral-700 text-center font-bold">{title}</p>
    </div>
  )
}
