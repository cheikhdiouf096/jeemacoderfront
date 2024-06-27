"use client"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const linkData = [
    {href : '/' , link : 'acceuil'},
    {href : '' , link : 'service'},
    {href : '' , link : 'FAQ'}
  ]

export const MobileNav = () => {
    const [ isVisible , setIsVisible ] = useState<string>('hamMenu')
    const toggleMenu = () => {
        if(isVisible == "hamMenu") {
            setIsVisible('hamMenuOn')
        } else {
        setIsVisible('hamMenu')
        }
}

return (<div>
        <div  className="flex justify-between bg-white h-10 py-3 items-center px-2 ">
          <button onClick={toggleMenu}>
            <HamburgerMenuIcon className="size-8" />
          </button>
          <h1 className="font-semibold">JEMACODER </h1>
        </div>
          <div className={isVisible} >
            <HamburgerMenu />
          </div>
      </div>
    )
}

const HamburgerMenu = () => {
const pathName = usePathname()

    return (<ul className="py-2">
        {
          linkData.map((d , i) => (
              <li key={i}>
                <Link className={clsx("font-semibold px-4 h-10 text-center py-3", 
                {"bg-white  text-base-blue  " : pathName === d.href }
                )}
                    href={d.href} >{d.link}
                </Link>
                </li>
          ))
        }
      </ul>)
}