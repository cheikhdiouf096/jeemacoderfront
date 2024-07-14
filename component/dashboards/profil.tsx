"use client"
import { BellIcon } from "@radix-ui/react-icons"
import { Avatar } from "../avatar"

export const Profil = () => {
    return <div className="h-40 bg-muted m-3 p-3 justify-between flex flex-col rounded-md">
    <div className="flex justify-between">
        <span className="text-xs">notificatios</span> 
        <BellIcon /> 
    </div>
    <Avatar name="Kaly Diallo" email="lilkaExample@gmail.com"/>
    </div>
}
