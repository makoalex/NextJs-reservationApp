import Link from 'next/link'
import React from 'react'

export default function RestaurantNavBar() {
  return (
    <nav className="flex text-reg border-b pb-2">
            <Link className="mr-7" href={"/restaurant/Nordvegan"}>
              overview
            </Link>
            <Link  className="mr-7" href={"/restaurant/Nordvegan/menu"}>
              Menu
            </Link>
          </nav>
  )
}
