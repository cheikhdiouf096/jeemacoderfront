"use client"
import { DashboardIcon, ListBulletIcon, ViewGridIcon } from "@radix-ui/react-icons"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface LinkData{
    name : string,
    href : string ,
    icone : React.ReactNode
}
const linkData = [
    {name : "Dashboard" , href : '/dashboard' , icone : DashboardIcon},
    {name : "Overview/stat" , href : '/' , icone : ViewGridIcon },
    {name : "Mes Hackathons" , href : '/' , icone : ListBulletIcon},
]

export const NavLinks = () => {
    const pathName = usePathname()

    return <ul className="">
        {
            linkData.map((d , i) => {
                const Icon = d.icone 
                return <li key={i} className={clsx("px-5 flex w-full py-2 gap-5 items-center hover:bg-[#F47E11]" , 
                    {"bg-[#F47E11] text-white font-semibold" : pathName == d.href})}>
                    <Icon />
                    <Link href={d.href} className="text-xs ">
                        {d.name}
                    </Link>
                </li>
    })
        }
    </ul>  
}

