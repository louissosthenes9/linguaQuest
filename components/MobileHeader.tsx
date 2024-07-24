import MobileSideBar from './MobileSideBar'
export const MobileHeader = () => {
    return (
        <nav className="lg:hidden px-6 h-[50px]  fixed top-0 bg-green-500 flex items-center border-b w-full z-50">
           <MobileSideBar/>
        </nav>
    )
}