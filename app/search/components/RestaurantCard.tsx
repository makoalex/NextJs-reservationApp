import Price from '@/app/components/Price'
import { Cuisine, PRICE, Location } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

interface Restaurant {
  id: number;
  name: string;
  mainImage: string;
  price: PRICE;
  cuisine: Cuisine;
  location: Location;
  slug: string;
}
export default function RestaurantCard({restaurant}:{restaurant:Restaurant}) {
  return (
    <div className="border-b flex p-5 ml-6">
    <img
      src={restaurant.mainImage}
      className="w-[32%] rounded"
      alt=""
    />
    <section className="pl-5">
      <h2 className="text-2xl">{restaurant.name}</h2>
      <div className="flex items-start">
        <div className="flex mb-2">****</div>
        <p className="ml-2 text-sm">Awesome</p>
      </div>
      <section className="mb-7">
        <div className="font-light flex text-reg">
          <Price price={restaurant.price}/>
          <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
          <p className="mr-4 capitalize">{restaurant.location.name}</p>
        </div>
      </section>
      <section className=" font-light text-red-600 ">
        <Link href={`/restaurant/${restaurant.slug}`}> View more information</Link>
      </section>
    </section>

  </div>
  )
}
