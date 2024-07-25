import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";

export default function MobileSideBar() {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="text-white" />       
        </SheetTrigger>
        <SheetContent className="p-0 z-[100]" side={"left"}>
            <Sidebar/>
        </SheetContent>
    </Sheet>
  )
}
