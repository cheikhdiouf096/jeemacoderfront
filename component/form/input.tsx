"use client"
import clsx from 'clsx'

import React, { useState } from 'react'

export default function FormInput({type, value, placeholder, className,label,  legend} : {type : string , value :  string|number, placeholder : string, className: string, label?: string, legend?: string }) {

  return (
    <div>
      <legend >{legend}</legend>
      <input type={type} value={value} placeholder={placeholder}
        className={clsx(` shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`, className)} />
    </div>
  )
}
