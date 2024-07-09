export const Avatar = ({name , email} : {name : string , email : string}) => {
    return <div className="max-w-full flex gap-1 items-center">
        <div className="size-10 border rounded-full "></div>
        <div className="flex flex-col ">
            <span className="text-xs font-semibold">{name} </span>
            <span className="text-xs text-[#636364]">{email} </span>
        </div>
    </div>
}