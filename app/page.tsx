import {Button} from "@/component/button";
import Hero from "@/component/hero";
import { MobileNav } from "@/component/menuHamburger";
import { NavBar } from "@/component/navBar";

export default function Home() {

  return (
    <main className="font-mono">
      {/* nav bar */}
      <NavBar />
      {/* hamburger nav */}
      <div className="hidden max-md:block ">
        <MobileNav />  
      </div>

      <Hero />
    </main>
  );
}
