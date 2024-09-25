import { challenges } from "@/db/schema"

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
    <div>Card</div>
  )
}

export default Card