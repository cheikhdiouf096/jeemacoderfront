"use client"
import { Button } from "@/component/button";
import { Checkbox } from "@/component/form/checkox";
import FormInput from "@/component/form/input";
import { Container } from "@/component/container";
import Image from "next/image";
import  imgForm  from "../../../assets/img/3692685.jpg";
import Titre1 from "@/component/h1";

export default function Page() {
  return (
      <Container className="flex justify-center h-screen items-center">
        <div className="flex bg-white w-full items-center px-8 py-4 rounded">
        <div className="w-6/12">
        <Titre1 className=""  title="Inscription"/>
          <form className="">

          <div className="flex flex-col my-4">
            <div className="flex row justify between">
            < FormInput type="name" placeholder="Entrez votre prenom" value="" className="" legend="Prenom" />
            < FormInput type="name" placeholder="Entrez votre nom" value="" className="" legend="Nom" />
            </div>
            < FormInput type="email" placeholder="email" value="" className="" legend="email" />
            <div className="flex row justify between">
            < FormInput type="password" placeholder="********" value="" className="" legend="Password" />
            < FormInput type="password" placeholder="********" value="" className="" legend="Confirm Password" />
            </div>
          </div>


              <div className="flex justify-between my-6">
                <Checkbox label="Accepter les conditions d'utilsations" checked />
                
            </div>

            <div className="flex flex-col">
            <Button href="/inscription" 
              className="bg-dark-blue text-center  text-white text-lg border-2 border-dark-blue  hover:bg-transparent hover:text-dark-blue" > se connecter </Button>
            <Button href="/" className=""> se connecter avec google </Button>
            </div>

          </form>
          <p className="text-center font-bold text-gray-500 text-xs ">
            J&apos;ai déja un compte <a className="text-red-500 " href="/connexion" >Se connecter</a>
          </p>
        </div>
        <div className="divImg w-6/12">
          <Image src={imgForm} alt=""  />
        </div>
      </div>
      </Container>
  )
}
