"use client"
import { Button } from "@/component/button";
import { Checkbox } from "@/component/form/checkox";
import FormInput from "@/component/form/input";
import { Container } from "@/component/container";

export default function example() {
  return (<Container className="flex justify-center items-center">

      <div className="bg-white w-full max-w-xs">
        <div>
            
          <form className="rounded px-8 pt-6 pb-8 mb-4">

          <div className="flex flex-col gap-5">
            < FormInput type="email" placeholder="email" value="" className="" legend="name" />
            < FormInput type="password" placeholder="********" value="" className="" legend="password" />

          </div>
          <div className="mb-6">
           
            <div className="flex flex-col">
              <div className=" flex gap-2">
              <Checkbox label="remenber me" checked />
              </div>
              <div>
                <a  href="#">
                  Mot de passe oublié?
                </a>
            </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col">
            <Button href="/inscription" 
              className="bg-dark-blue text-center  text-white text-lg border-2 border-dark-blue  hover:bg-transparent hover:text-dark-blue" > se connecter </Button>
            <Button href="/" className=""> se onnecter avec google </Button>
            </div>
          </div>
        </form>
          <p className="text-center font-bold text-gray-500 text-xs ">
            Je n&apos;ai pas de compte <a className="text-red-500 " href="http://inscription">S`inscrire</a>
          </p>
        </div>
      </div>
      </Container>
  )
}
