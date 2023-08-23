import { Item } from '@prisma/client'
import React from 'react'

export default function MenuCard({item}:{item:Item}) {
  return (
    <div className='border rounded-sm p-3 w-[50%] mb-3'>
    <h3 className='text-lg font-bold'>{item.name}</h3>
    <p className='font-light mt-2 text-reg'> {item.description}</p>
  <p className="mt-7">{item.price}-</p>
  </div>
  )
}
