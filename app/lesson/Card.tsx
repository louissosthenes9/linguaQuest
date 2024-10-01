import { challenges } from "@/db/schema"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useCallback } from "react"
import { useAudio, useKey } from "react-use"

type Props = {
    imageSrc: string | null
    audioSrc: string | null
    id: number
    text: string
    selected?: boolean
    status: "correct" | "wrong" | "none"
    shortcut: string
    onClick: () => void
    type: typeof challenges.$inferSelect["type"]
    disabled: boolean | undefined
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
}: Props) => {
    const [audio, _, controls] = useAudio({ src: audioSrc || "" })

    const handleClick = useCallback(() => {
        if (disabled) return;
        onClick();  // Fixed: changed onclick to onClick
        controls.play()
    }, [disabled, onClick, controls])  // Fixed: changed onclick to onClick in dependency array

    useKey(shortcut, handleClick, {}, [handleClick])

    return (
        <div
            onClick={handleClick}
            className={cn(
                "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2",
                selected && "border-sky-300 bg-sky-100 hover:bg-sky-100",  // Changed hover color for selected state
                selected && status === "correct" && "border-green-300 bg-green-100 hover:bg-green-100",
                selected && status === "wrong" && "border-rose-300 bg-rose-100 hover:bg-rose-100",
                disabled && "pointer-events-none hover:bg-white opacity-50",  // Added opacity for disabled state
                type === "ASSIST" && "lg:p-3 w-full"
            )}
        >
            {audio}
            {imageSrc && (
                <div className="relative aspect-square mb-4 max-h-[80px] lg:max-h-[150px] w-full">
                    <Image
                        src={imageSrc}
                        fill
                        alt={text}
                        aria-label={text}
                    />
                </div>
            )}
            <div className={cn(
                "flex items-center justify-between",
                type === "ASSIST" && "flex-row-reverse",
            )}>
                {type === "ASSIST" && <div />}
                <p className={cn(
                    "text-neutral-600 text-sm lg:text-base",
                    selected && "text-sky-500",
                    selected && status === "correct" && "text-green-500",
                    selected && status === "wrong" && "text-rose-500",  // Fixed: changed "correct" to "wrong"
                )}>
                    {text}
                </p>
                <div className={cn(
                    "lg:w-[30px] lg:h-[30px] border-2 flex items-center justify-center rounded-lg text-neutral-400 lg:text-[15px] text-xs font-semibold",
                    selected && "border-sky-300 text-sky-500",
                    selected && status === "correct" && "border-green-300 text-green-500",
                    selected && status === "wrong" && "border-rose-300 text-rose-500",  // Fixed: changed "correct" to "wrong"
                )}>
                    {shortcut}
                </div>
            </div>
        </div>
    )
}

export default Card