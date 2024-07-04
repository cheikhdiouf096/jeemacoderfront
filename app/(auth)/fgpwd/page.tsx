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
            <Titre1 className="" title="Mot de passe oublié" />
          <form className="">
            <div className="flex flex-col my-4">
                < FormInput type="email" placeholder="email" value="" className="" legend="email" />
            </div>
            <div className="flex flex-col">
            <Button href="/" className="bg-dark-blue text-center  text-white text-lg border-2 border-dark-blue  hover:bg-transparent hover:text-dark-blue" >Envoyer</Button>
            </div>
          </form>
          <p className="text-center font-bold text-gray-500 text-xs my-4">
            Revenir à la <a className="text-red-500 " href="/connexion" >Connexion</a>
          </p>
        </div>
        <div className="divImg w-6/12">
          <Image src={imgForm} alt=""  />
        </div>
      </div>
      </Container>
  )
}
