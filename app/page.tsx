"use client"
import Link from "next/link";
import {  usePathname } from "next/navigation";
import clsx from "clsx";
import {Button} from "@/component/button";
import { MobileNav } from "@/component/menuHamburger";

const linkData = [
  {href : '/' , link : 'acceuil'},
  {href : '' , link : 'service'},
  {href : '' , link : 'FAQ'}
]


export default function Home() {


  return (
    <main className="">
      {/* nav bar */}
      <NavBar />
      {/* hamburger nav */}
      <div className="hidden max-md:block ">
        <MobileNav />  
      </div>

      <div className="max-w-4xl m-auto text-white ">
        {/* page aceuil */}
        <h1 className="text-center text-6xl font-extrabold p-10 max-sm:text-4xl">
          Vos hackatons <br /> en <span className="text-foreground-green ">mieux</span>
        </h1>
        <p className="max-w-2xl text-center p-5 text-lg m-auto max-sm:text-xl">
          la meilleur plateforme d&apos;organisation et de gestion d&apos;hackaton dans le monde de demain.
        </p>
      </div>
      
      <div className="flex justify-center items-center gap-10 p-5">
        
        <Button href="/" className="bg-foreground-green py-2 px-5 rounded-md text-white text-xl ">
          Rejoindre
        </Button>

      </div>
    </main>
  );
}

const NavBar = () => {
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
              <li>
                <Link className={clsx("font-semibold flex items-center px-4 h-7 rounded-md text-white" , 
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
