
import NavBar from '@/app/components/NavBar'
import React from 'react'
import Header from '../components/Header'
import RestaurantNavBar from '../components/RestaurantNavBar'
import Menu from '../components/Menu'

export default function RestaurantMenu() {
  return (
    <main className=" min-h-screen w-screen justify-between bg-gray-100">
    <main className="max-w-screen-2xl m-auto bg-white">
      {/* navbar */}
      <NavBar/>
      {/* navbar */}
      {/* Header */}
   <Header/>
      {/* Header */}
      {/* Description part */}
      <section className="flex m-auto w-2/3 start-0 -mt-11">
        <div className="bg-white w-[100%] rounded shadow p-3 -ml-5">
          {/* Restaurant Nav */}
          <RestaurantNavBar />
          {/* Restaurant Nav */}
          {/* Menu */}
            <Menu/>
          {/* Menu */}
        </div>
      </section>
      {/* Description part */}
    </main>
  </main>
  )
}
