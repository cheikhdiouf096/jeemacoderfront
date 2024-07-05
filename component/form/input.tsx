"use client"
import clsx from 'clsx'

import React, { useState } from 'react'

export default function FormInput({type, value, placeholder, className, legend} : {type : string , value :  string|number, placeholder : string, className: string, label?: string, legend?: string }) {
  const [Inputvalue , setInputValue ] = useState(value)
  return (
    <div className='my-6'>
      <legend >{legend}</legend>
      <input  type={type} 
              value={Inputvalue} 
              placeholder={placeholder} 
              onChange={(e) => {setInputValue(e.target.value)}}
              className={clsx(` shadow appearance-none border rounded w-full m-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`, className)} />
    </div>
  )
}
