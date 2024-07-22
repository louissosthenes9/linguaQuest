import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  return (
      <footer className="hidden lg:flex h-20 w-full border-t-2 border-slate-200 p-2 ">
          <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
              <Button size={"lg"} variant={"ghost"} className="w-full">
                  <Image src={"/es.svg"} alt={"Spanish"} height={32} width={40}/>Spanish
              </Button>
          </div>

          <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
              <Button size={"lg"} variant={"ghost"} className="w-full">
                  <Image src={"/it.svg"} alt={"Italian"} height={32} width={40}/>Italian
              </Button>
          </div>

          <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
              <Button size={"lg"} variant={"ghost"} className="w-full">
                  <Image src={"/fr.svg"} alt={"Italian"} height={32} width={40}/>French
              </Button>
          </div>


          <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
              <Button size={"lg"} variant={"ghost"} className="w-full">
                  <Image src={"/jp.svg"} alt={"Japanese"} height={32} width={40}/>Japanese
              </Button>
          </div>

          <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
              <Button size={"lg"} variant={"ghost"} className="w-full">
                  <Image src={"/hr.svg"} alt={"Croatian"} height={32} width={40}/>Croatian
              </Button>
          </div>
      </footer>
  )
}
