import Link from 'next/link'
import React from 'react'

export default function RestaurantMenu() {
  return (
    <main className=" min-h-screen w-screen justify-between bg-gray-100">
    <main className="max-w-screen-2xl m-auto bg-white">
      {/* navbar */}
      <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
          {" "}FindATable{" "}
        </Link>
        <div>
          <div className="flex">
            <button className="bg-light-pink hover:bg-pink p-2 px-4 rounded mr-2 text-sm text-white">
              Sign In
            </button>
            <button className="p-2 px-4 hover:bg-slate-100 rounded mr-2 text-sm">
              SignUp
            </button>
          </div>
        </div>
      </nav>
      {/* navbar */}
      {/* Header */}
      <section className="h-96 overflow-hidden">
        <div className=" bg-gradient-to-r from-[#6f6e6e] to-[#3b3758]  h-full flex justify-center items-center">
          <h1 className="text-7xl text-white capitalize text-shadow text-center font-light">
            Nordvegan (Oslo)
          </h1>
        </div>
      </section>
      {/* Header */}
      {/* Description part */}
      <section className="flex m-auto w-2/3 start-0 -mt-11">
        <div className="bg-white w-[100%] rounded shadow p-3 -ml-5">
          {/* Restaurant Nav */}
          <nav className="flex text-reg border-b pb-2">
            <a className="mr-7" href="#">
              overview
            </a>
            <a className="mr-7" href="">
              Menu
            </a>
          </nav>
          {/* Restaurant Nav */}
          {/* Menu */}
          <main className="bg-white mt-10">
            <div>
              <div className="mt-4 pb-1 mb-1">
                <h1 className="text-lg">MENU</h1>
              </div>
              <div className="flex flex-wrap justify-between">
                {/* Menu Card */}
                <div className='border rounded-sm p-3 w-[50%] mb-3'>
                  <h3 className='text-lg font-bold'>Fried dumplings</h3>
                  <p className='font-light mt-2 text-reg'> Also called Gyoza, these Japanese-style dumplings are very popular.</p>
                <p className="mt-7">130 ,-</p>
                </div>
                {/* Menu Card */}
              </div>
            </div>
          </main>
          {/* Menu */}
        </div>
      </section>
      {/* Description part */}
    </main>
  </main>
  )
}
