import React from 'react'

export default function Title({name}:{name:string}) {
  return (
    <section className="mt-4  border-b pb-6">
    <h1 className="text-5xl font-bold">{name}</h1>
  </section>
  )
}