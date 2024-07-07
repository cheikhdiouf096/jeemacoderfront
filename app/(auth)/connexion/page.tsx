"use client";
import { Button } from "@/component/button";
import { Checkbox } from "@/component/form/checkox";
import FormInput from "@/component/form/input";
import Image from "next/image";
import imgForm from "../../../assets/img/3692685.jpg";
import googleImg from "../../../assets/img/googleImg.png";
import Titre1 from "@/component/h1";
import Jeem from "@/component/logojeemacode";
import { ChangeEvent, useState } from "react";

type Value = {
  email : string,
  password : string,
  remember : boolean
}

export default function Page() {
  const [value , setValue ] = useState<Value>({
    email : '',
    password : '',
    remember : false
  })
  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const input = e.currentTarget;
    setValue({...value , [input.id] : input.value})

    const formData = new FormData();
    formData.append('email' , value.email)
    formData.append('password' , value.password)
    
  //   for(let [key , value] of formData.entries()) {
  //   console.log(`${key} : ${value}`);}
  // }


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
                id="email"
                type="email"
                placeholder="email"
                value={value.email}
                onChange={handleChange}
                className=""
                legend="email"
              />
              <FormInput
                id="password"
                type="password"
                placeholder="********"
                value={value.password}
                onChange={handleChange}
                className=""
                legend="password"
              />
            </div>

            <div className="flex justify-between my-6">
              <Checkbox label="remenber me" checked={value.remember} />
              <a className="font-bold" href="/fgpwd">
                Mot de passe oublié?
              </a>
            </div>

            <div className="flex flex-col">
              <button type="submit" className="border px-5 py-2">se conecter</button>
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
              S&amp;inscrire
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
}