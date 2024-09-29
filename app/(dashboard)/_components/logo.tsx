import Image from "next/image"

export const Logo = () => {
    return (
        <div className="flex items-center gap-3">
            <Image src='/assets/logo.svg' alt="lanit-edu-logo" width={50} height={50} className="h-10 w-10"/>
            <p className="text-muted-foreground text-sm">
                <span className="text-blue-700 font-black text-2xl">LANIT.</span> edu
            </p>
        </div>

    )
}