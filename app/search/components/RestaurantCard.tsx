import Link from 'next/link'
import React from 'react'

export default function RestaurantCard() {
  return (
    <div className="border-b flex p-5">
    <img
      src="https://images.otstatic.com/prod/25294208/1/medium.jpg"
      className="w-[32%] rounded"
      alt=""
    />
    <section className="pl-5">
      <h2 className="text-2xl">Butcher and Banker NYC</h2>
      <div className="flex items-start">
        <div className="flex mb-2">****</div>
        <p className="ml-2 text-sm">Awesome</p>
      </div>
      <section className="mb-7">
        <div className="font-light flex text-reg">
          <p className="mr-4">$$$</p>
          <p className="mr-4">Steakhouse</p>
          <p className="mr-4">Midtown west</p>
        </div>
      </section>
      <section className="text-red">
        <Link href="/restaurant/Nordvegan"> View more information</Link>
      </section>
    </section>

  </div>
  )
}
