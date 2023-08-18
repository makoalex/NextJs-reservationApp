import Link from 'next/link'
import React from 'react'
import { RestaurantCardType } from '../page'
import Price from './Price'

interface Props {
  restaurant: RestaurantCardType
}

export default function RestaurantCard({restaurant}:Props) {
  return (
    <div className="w-64 h-70 m-auto px-auto  cursor-pointer flex grow-1  rounded border overflow-hidden">
    <Link href={`/restaurant/${restaurant.slug}`}>
      <img 
        src={restaurant.mainImage}
        alt=""
        className="mr-2 h-48 w-80"
      />
      <div className="p-1 m-2">
        <h3 className="font-bold m-2  text 2xl:">{restaurant.name}</h3>
        <div className="flex items-start">
          <div className=" flex mb-2">*****</div>
          <p className="ml-2 text-xsm">77 Reviews</p>
        </div>
        <section className="flex text-reg font-light capitalize mb-2">
          <p className="font-light mr-3">{restaurant.cuisine.name}</p>
         <Price price={restaurant.price}/>
          <p>{restaurant.location.name}</p>
        </section>
        <p className="text-sm mt-1 font-bold ">
          Booked 3 times today
        </p>
      </div>
    </Link>
  </div>
  )
}
