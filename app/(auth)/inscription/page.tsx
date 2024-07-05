 "use client";
import { Button } from "@/component/button";
import { Checkbox } from "@/component/form/checkox";
import FormInput from "@/component/form/input";
import { Container } from "@/component/container";
import Image from "next/image";
import imgForm from "../../../assets/img/3692685.jpg";
import googleImg from "../../../assets/img/googleImg.png";
import Titre1 from "@/component/h1";
import Jeem from "@/component/logojeemacode";

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
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

      <Container className="flex flex-col md:flex-row w-full max-w-4xl bg-white items-center px-4 md:px-8 py-4 rounded">
        <div className="w-full md:w-1/2 p-4">
          <Titre1 className="text-center" title="Inscription" />
          <form className="">
            <div className="flex flex-col my-2">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="md:mx-1 mb-2 md:mb-0">
                  <FormInput
                    type="name"
                    placeholder="Entrez votre prenom"
                    value=""
                    className=""
                    legend="Prenom"
                  />
                </div>
                <div className="md:mx-1 mb-2 md:mb-0">
                  <FormInput
                    type="name"
                    placeholder="Entrez votre nom"
                    value=""
                    className=""
                    legend="Nom"
                  />
                </div>
              </div>
              <FormInput
                type="email"
                placeholder="email"
                value=""
                className="mb-2"
                legend="email"
              />
              <div className="flex flex-col md:flex-row justify-between">
                <div className="md:mx-1 mb-2 md:mb-0">
                  <FormInput
                    type="password"
                    placeholder="********"
                    value=""
                    className=""
                    legend="Password"
                  />
                </div>
                <div className="md:mx-1 mb-2 md:mb-0">
                  <FormInput
                    type="password"
                    placeholder="********"
                    value=""
                    className=""
                    legend="Confirm Password"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between my-4">
              <Checkbox label="Accepter les conditions d'utilisation" checked />
            </div>
            <div className="flex flex-col">
              <Button
                href="/"
                className="bg-dark-blue text-center my-2 text-white text-lg border-2 border-dark-blue hover:bg-transparent hover:text-dark-blue"
              >
                S'inscrire
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
          <p className="text-center text-xl font-bold text-gray-500 text-xs mt-4">
            J&apos;ai déjà un compte{" "}
            <a className="text-red-500" href="/connexion">
              Se connecter
            </a>
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <Image src={imgForm} alt="" className="w-full" />
        </div>
      </Container>
    </div>
  );
}
