import {Button} from "@/component/button";
import { MobileNav } from "@/component/menuHamburger";
import { NavBar } from "@/component/navBar";

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
        
        <Button href="/" className="bg-foreground-green  text-white text-xl ">
          Rejoindre
        </Button>
      </div>
    </main>
  );
}
