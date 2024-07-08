import { NavLinks } from "./navLinks"
import { Profil } from "./profil"

export const SideBar = () => {
    return (<div className="h-screen max-w-60 flex flex-col justify-between bg-white">
        <div>
            <div className="h-20 w-full border ">

            </div>
            <NavLinks />
        </div>
        <div>
            <Profil />
        </div>
    </div>)
}
export const NavBar = () => {
    return (
        <>

        </>
    )
}