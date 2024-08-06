import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
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

        <div className="w-full flex items-center justify-end min-[24px]">
          {
            active && (
              <div>
                  <Check className="text-white" />
              </div>
            )
          }

        </div>

    </div>
  )
}
