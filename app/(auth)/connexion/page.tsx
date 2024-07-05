"use client";
import { Button } from "@/component/button";
import { Checkbox } from "@/component/form/checkox";
import FormInput from "@/component/form/input";
import Image from "next/image";
import imgForm from "../../../assets/img/3692685.jpg";
import googleImg from "../../../assets/img/googleImg.png";
import Titre1 from "@/component/h1";
import Jeem from "@/component/logojeemacode";

export default function Page() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="text-center mb-4">
        <div className="flex justify-center">
          <span>
            <Jeem className="text-red-500" title="<" />
            <Jeem className="" title="/>" />
          </span>
        </div>
        <div className="flex justify-center">
          <Jeem className="text-red-500" title="Jeema" />
          <Jeem className="" title="Coder" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-white w-full max-w-4xl items-center p-8 rounded">
        <div className="w-full md:w-1/2">
          <Titre1 className="" title="Connexion" />
          <form className="">
            <div className="flex flex-col my-4">
              <FormInput
                type="email"
                placeholder="email"
                value=""
                className=""
                legend="email"
              />
              <FormInput
                type="password"
                placeholder="********"
                value=""
                className=""
                legend="password"
              />
            </div>

            <div className="flex justify-between my-6">
              <Checkbox label="remenber me" checked />
              <a className="font-bold" href="/fgpwd">
                Mot de passe oublié?
              </a>
            </div>

            <div className="flex flex-col">
              <Button
                href="/"
                className="bg-dark-blue my-2 text-center text-white text-lg border-2 border-dark-blue hover:bg-transparent hover:text-dark-blue"
              >
                se connecter
              </Button>
              <Button
                href="/"
                className="border my-2 flex items-center justify-center"
              >
                <Image
                  className="inline"
                  src={googleImg}
                  width={15}
                  height={15}
                  alt="logo google"
                />
                <span>se connecter avec google</span>
              </Button>
            </div>
          </form>
          <p className="text-center font-bold text-gray-500 text-xs mt-4">
            Je n&apos;ai pas de compte{" "}
            <a className="text-red-500" href="/inscription">
              S&apos;inscrire
            </a>
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <Image src={imgForm} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}
