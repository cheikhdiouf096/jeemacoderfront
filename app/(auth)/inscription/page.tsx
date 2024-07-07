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
import { ChangeEvent, useState } from "react";


type Value = {
  firstname : string , 
  lastname : string,
  email : string,
  password : string,
  status : string ,
}

export default function Page() {

  const [value , setValue ] = useState<Value>({
    firstname : '',
    lastname : '',
    email : '',
    password : '',
    status : '',
  })
const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
  const input = e.currentTarget;
  setValue({...value , [input.id] : input.value})
}
const [photo , setPhoto ] = useState<File | null >(null)
const role_id = 2

const handleSubmit = ((e : ChangeEvent<HTMLFormElement> ) => {
  e.preventDefault()
  if(!photo) {console.log('no file selected') 
      return }

  const formData = new FormData()
  formData.append('photo' , photo)
  formData.append('firstname' , value.firstname)
  formData.append('lastname' , value.lastname)
  formData.append('email' , value.email)
  formData.append('password' , value.password)
  formData.append('status' , value.status)
  formData.append('role_id' , role_id.toString())

  // for(let [key , value] of formData.entries()) {
  //   console.log(`${key} : ${value}`);
  // }
  
})
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
          <form className="" onSubmit={handleSubmit}>
            <div className="flex flex-col my-2">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="md:mx-1 mb-2 md:mb-0">
                  <FormInput
                    type="name"
                    placeholder="Entrez votre prenom"
                    value={value.firstname}
                    className=""
                    legend="Prenom"
                    id="firstname"
                    onChange={handleChange}
                  />
                </div>
                <div className="md:mx-1 mb-2 md:mb-0">
                  <FormInput
                    type="name"
                    placeholder="Entrez votre nom"
                    value={value.lastname}
                    onChange={handleChange}
                    className=""
                    id="lastname"
                    legend="Nom"
                  />
                </div>
              </div>
              <FormInput
                id="email"
                type="email"
                placeholder="email"
                value={value.email}
                onChange={handleChange}
                className="mb-2"
                legend="email"
              />
                <div className="md:mx-1 mb-2 md:mb-0">
                  <FormInput
                    id="password"
                    type="password"
                    placeholder="********"
                    value={value.password}
                    onChange={handleChange}
                    className=""
                    legend="Password"
                  />
                </div>
                <div className="md:mx-1 mb-2 md:mb-0">
                  <FormInput
                  id='status'
                    type="name"
                    placeholder="developpeur"
                    value={value.status}
                    onChange={handleChange}
                    className=""
                    legend="votre proffession "
                  />
                </div>
                <input type="file" placeholder="add pp" accept=".jpg,.png,.svg" id="image" onChange={(e : ChangeEvent<HTMLInputElement>) => {
                  if(e.target.files && e.target.files.length > 0 ) {setPhoto(e.target.files[0])}
                }} />
            </div>
            <div className="flex justify-between my-4">
              <Checkbox label="Accepter les conditions d'utilisation" checked />
            </div>
            <div className="flex flex-col">
              <button type="submit" className="border px-5 py-1">
                S&apos;inscrire
              </button>
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
          <p className="text-center text-xl font-bold text-gray-500 mt-4">
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
