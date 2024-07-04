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
            <Titre1 className="" title="Connexion" />
          <form className="">

          <div className="flex flex-col my-4">
            < FormInput type="email" placeholder="email" value="" className="" legend="email" />
            < FormInput type="password" placeholder="********" value="" className="" legend="password" />
          </div>


              <div className="flex justify-between my-6">
                <Checkbox label="remenber me" checked />
                <a  href="/fgpwd">
                  Mot de passe oublié?
                </a>

            </div>

            <div className="flex flex-col">
            <Button href="/" 
              className="bg-dark-blue text-center  text-white text-lg border-2 border-dark-blue  hover:bg-transparent hover:text-dark-blue" > se connecter </Button>
            <Button href="/" className=""> se connecter avec google </Button>
            </div>

          </form>
          <p className="text-center font-bold text-gray-500 text-xs ">
            Je n&apos;ai pas de compte <a className="text-red-500 " href="/inscription" >S`inscrire</a>
          </p>
        </div>
        <div className="divImg w-6/12">
          <Image src={imgForm} alt=""  />
        </div>
      </div>
      </Container>
  )
}
