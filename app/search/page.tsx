import Link from 'next/link'
import React from 'react'
import NavBar from '../components/NavBar'

export default function Search() {
  return (
    <main className=" min-h-screen w-screen justify-between bg-gray-100">
  <main className="max-w-screen-2xl m-auto bg-white">
    {/* navbar */}
    <NavBar/>
    {/* navbar */} 
    {/* Header */}
    <section className=" bg-gradient-to-r from-[#a8a8a8] to-[#3b3758]">
      {/* SearchBar */}
      <section className="text-left py-2 m-auto flex justify-center">
        <input
          type="text"
          className="text-lg w-[450px] p-1 rounded mr-5"
          placeholder="State... City...Town"
        />
        <button
          className="bg-light-pink p-2 px-4 text-sm rounded hover:bg-pink"
        >
          Find It
        </button>
      </section>
      {/* SearchBAR */}
    </section>
    {/* Header */}
    <section className="flex py-4 m-auto w-2/3 justify-between items-start">
      <div className="w-1/5">
        <div className="border-b pb-4">
          <h1 className="mb-2">Region</h1>
          <p className="font-light text-reg">Toronto</p>
          <p className="font-light text-reg">San Francisco</p>
          <p className="font-light text-reg">Oslo Norway</p>
          <p className="font-light text-reg">New York</p>
        </div>
        <div className="border-b pb-4">
          <h1 className="mb-2">Cuisine</h1>
          <p className="font-light text-reg">Mexican</p>
          <p className="font-light text-reg">Italian</p>
          <p className="font-light text-reg">Chinese</p>
          <p className="font-light text-reg">Persian</p>
        </div>
        <div className="mt-3 pb-4">
          <h1 className="mb-2">Price</h1>
          <div className="flex">
            <button
              className="border rounded-l p-2 w-full text-reg font-light "
            >
              $
            </button>
            <button
              className="border-r border-t border-b  p-2 w-full text-reg font-light "
            >
              $$
            </button>
            <button
              className="border-r border-t border-b  rounded-r p-2 w-full text-reg font-light "
            >
              $$$
            </button>
          </div>
        </div>
      </div>
      {/* Search side bar */}
      <section className="w-5/6">
        {/* Restaurant card */}
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
            <section className="text-pink">
              <a href=""> View more information</a>
            </section>
          </section>
        </div>
        {/* Restaurant Card */}
      </section>
      {/* Search side bar */}
    </section>
  </main>
</main>

  )
}
