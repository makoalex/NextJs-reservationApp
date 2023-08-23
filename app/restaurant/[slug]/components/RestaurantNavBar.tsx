import Link from 'next/link'
import React from 'react'

export default function RestaurantNavBar({slug}:{slug:string}) {
  return (
    <nav className="flex text-reg border-b pb-2">
            <Link className="mr-7" href={`/restaurant/${slug}`}>
              overview
            </Link>
            <Link  className="mr-7" href={`/restaurant/${slug}/menu`}>
              Menu
            </Link>
          </nav>
  )
}
