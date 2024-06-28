"use client"
import clsx from "clsx";
import Link from "next/link";
import {  usePathname } from "next/navigation";

const linkData = [
    {href : '/' , link : 'acceuil'},
    {href : '' , link : 'service'},
    {href : '' , link : 'FAQ'}
  ]
  

export const NavBar = () => {
    const pathName = usePathname()
  
    return (<nav className="h-24  flex justify-around items-center max-md:hidden ">
      <div>
        <h1 className="font-semibold">JEMACODER</h1>
      </div>
      <div>
        <ul className="flex gap-10">
          {
            linkData.map((d , i) => (
              <div key={i}>
                <li className="text-white">
                  <Link className={clsx("font-semibold flex items-center px-4 h-7 rounded-md" , 
                  {"bg-white  text-base-blue " : pathName === d.href }
                  )}
                      href={d.href} >{d.link}
                  </Link>
                  </li>
              </div>
            ))
          }
        </ul>
      </div>
      <div className="flex gap-5">
        <Link href="/login" className="bg-base-blue text-white px-3 py-1 rounded-md font-semibold">
          se connecter
        </Link>
        <Link href="/signin" className="font-semibold text-base-blue border px-4 rounded-md">
          s&apos;inscrire
        </Link>
      </div>
    </nav>
      
  )
  }
  
