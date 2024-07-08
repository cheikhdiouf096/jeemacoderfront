import { DashboardIcon } from "@radix-ui/react-icons"

interface LinkData{
    name : string,
    href : string ,
    icone : React.ReactNode
}
const linkData = [
    {name : "Dashboard" , href : '/' , icone : DashboardIcon},
    {name : "Overview" , href : '/' , icone : DashboardIcon},
    {name : "hackatons" , href : '/' , icone : DashboardIcon},
]

export const NavLinks = () => {
    
    return <div className="h-screen bg-white max-w-xl">

    </div>
}

