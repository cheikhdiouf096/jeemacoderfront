

export default function example() {
  return (
    <div className="shadow-md bg-gray-400 h-screen flex flex-col items-center justify-center">
       <div>
           <p className="mt-2 text-lg text-white-600 font-bold">
              Jeema<span className="text-red-500">coder</span>  
           </p>
       </div>

      <div className="bg-white w-full max-w-xs">
        <div>
          <div className="divForm my-4">
            
          <h1 className="text-center text-lg font-bold my-6">Connexion</h1>
          <form className="rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Nom
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nom" />
          </div>
          <div className="mb-4">
            <legend>Email</legend>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" />
          </div>
          <div className="mb-6">
            <legend >
              Mot de passe
            </legend>
            <input className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            <div className="flex row">
              <div className="">
              <input type="checkbox" name="check" id="check" />
              <label htmlFor="check">Remember me</label>
              </div>
              <div>
                <a className="inline float-left align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                  Mot de passe oublié?
                </a>
            </div>
            </div>
          </div>
          <div className="">
            <div>
            <button className="bg-blue-500  w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Connexion
            </button>
            <button className="bg-yellow-500  w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Connexion with google
            </button>
            </div>
          </div>
        </form>
          <p className="text-center font-bold text-gray-500 text-xs ">
            Je n'ai pas de compte <a className="text-red-500 " href="http://inscription">S'inscrire</a>
          </p>
          </div>
          <div className="divImgform">
            
          </div>
        </div>
        
      </div>
    </div>
  )
}
