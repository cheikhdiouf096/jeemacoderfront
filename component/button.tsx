import Link from 'next/link'
import React from 'react'

export const Button = ({children , href , className} : {children : React.ReactNode , href : string , className : string }) => {
  return (
    <Link href={href} className={`${className} font-semibold `}>
            {children}
    </Link>
  )
}
