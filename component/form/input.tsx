"use client"
import clsx from 'clsx'

import React, { ChangeEvent, useState } from 'react'

export default function FormInput({id , type, value, placeholder, className, legend , onChange} : 
  {id :string , type : string , value :  string|number, placeholder : string, className: string, 
  label?: string, legend?: string , 
  onChange : (e : ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className='my-6'>
      <legend >{legend}</legend>
      <input  id={id}
              type={type} 
              value={value} 
              onChange={onChange}
              placeholder={placeholder} 
              className={clsx(` shadow appearance-none border rounded w-full m-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`, className)} />
              
    </div>
  )
}
