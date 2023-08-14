import Link from 'next/link'
import React from 'react'

export default function RestaurantCard() {
  return (
    <div className="w-64 h-70 cursor-pointer  rounded border overflow-hidden">
    <Link href={'/restaurant/Nordvegan'}>
      <img
        src="https://resizer.otstatic.com/v2/photos/wide-huge/3/46953593.webp"
        alt=""
        className="mr-2"
      />
      <div className="p-1 m-2">
        <h3 className="font-bold mb-2 text 2xl:">Nordvegan</h3>
        <div className="flex items-start">
          <div className=" flex mb-2">*****</div>
          <p className="ml-2 text-xsm">77 Reviews</p>
        </div>
        <section className="flex text-reg font-light capitalize mb-2">
          <p className="font-light mr-3">vegan</p>
          <p className=" mr-3">$$$</p>
          <p>Oslo</p>
        </section>
        <p className="text-sm mt-1 font-bold ">
          Booked 3 times today
        </p>
      </div>
    </Link>
  </div>
  )
}
