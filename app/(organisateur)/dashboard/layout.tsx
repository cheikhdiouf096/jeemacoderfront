import { NavBar } from "@/component/dashboards/NavBar";

export default function Layout ({children} : {children : React.ReactNode}) {

    return (
        <div className="flex">
            <div>
                <NavBar />
            </div>
            <div>{children} </div>
            <div></div>
        </div>
    )
}