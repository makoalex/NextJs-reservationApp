import NavBar from '@/app/components/NavBar'
import React from 'react'
import Header from './components/Header'
import RestaurantNavBar from './components/RestaurantNavBar'
import Title from './components/Title'
import Rating from './components/Rating'
import Description from './components/Description'
import Images from './components/Images'
import Reviews from './components/Reviews'
import ReservationCard from './components/ReservationCard'

export default function RestaurantDetails() {
  return (
    <main className=" min-h-screen w-screen justify-between bg-gray-100">
    <main className="max-w-screen-2xl m-auto bg-white">
      {/* navbar */}
     <NavBar />
      {/* navbar */}
      {/* Header */}
        <Header />
      {/* Header */}
      {/* Description part */}
      <section className="flex m-auto w-2/3 start-0 -mt-11">
        <div className="bg-white w-[70%] rounded shadow p-3 -ml-5">
          {/* Restaurant Nav */}
            <RestaurantNavBar />
          {/* Restaurant Nav */}
          {/* Title */}
            <Title />
          {/* Title */}
          {/* Rating */}
              <Rating />
          {/* Ratings */}
          {/* Description */}
            <Description />
          {/* Description */}
          {/* Images */}
            <Images />
          {/* Images */}
          {/* Review */}
          <Reviews />
          {/* Review */}
        </div>
        <div className="w-[29%] relative text-reg">
         <ReservationCard />
        </div>
      </section>
    </main>
  </main>
  )
}
