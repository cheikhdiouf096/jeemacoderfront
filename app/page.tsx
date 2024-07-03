'use client'
import {Button} from "@/component/button";
import FormInput from "@/component/form/input";
import Hero from "@/component/hero";
import { MobileNav } from "@/component/menuHamburger";
import { NavBar } from "@/component/navBar";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState('');

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
