"use client"
import Link from "next/link";
import {  usePathname } from "next/navigation";
import clsx from "clsx";

export default function Home() {
  const pathName = usePathname()
  
  const linkData = [
    {href : '/' , link : 'acceuil'},
    {href : '' , link : 'service'},
    {href : '' , link : 'FAQ'}
  ]

  return (
    <main className="border">
      {/* nav bar */}
      <nav className="h-24  flex justify-around items-center">
        <div>
          LOGO
        </div>
        <div>
          <ul className="flex gap-10">
            {
              linkData.map((d , i) => (
                <div key={i}>
                  <li>
                    <Link className={clsx("font-semibold flex items-center px-4 h-7 rounded-md" , 
                    {"bg-white  text-base-blue  " : pathName === d.href }
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
          <button>login</button>
          <button>sign in</button>
        </div>
      </nav>
      <div className="max-w-4xl border m-auto text-black ">
        {/* page aceuil */}
        <h1 className="text-center text-6xl font-extrabold p-10">
          VOS HACKATONS <br /> EN MIEUX
        </h1>
        <p className="max-w-2xl text-center p-5 text-lg m-auto">
          la meilleur plateforme d&apos;organisation et de gestion d&apos;hackaton dans le monde de demain.
        </p>
      </div>

    </main>
  );
}
