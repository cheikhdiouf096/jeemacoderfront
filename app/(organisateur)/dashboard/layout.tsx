export default function Layout ({children} : {children : React.ReactNode}) {

    return (
        <div className="flex">
            <div>
                {/* Nav Bar */}LE NAV BAR
            </div>
            <div>{children} </div>
            <div></div>
        </div>
    )
}