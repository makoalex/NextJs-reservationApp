import NavBar from '@/app/components/NavBar'
import Link from 'next/link'
import React from 'react'


export default function Reserve() {
  return (
    <main className=" min-h-screen w-screen justify-between bg-gray-100">
    <main className="max-w-screen-2xl m-auto bg-white">
      {/* navbar */}
      <NavBar/>
      {/* navbar */}
      <section className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          {/* Header */}
          <section>
            <h3 className="font-bold">You're almost done</h3>
            <div className="mt-5 flex">
              <img
                src=" https://images.otstatic.com/prod/25294208/1/medium.jpg"
                className="width-32 h-18 rounded"
                alt=""
              />
              <div className="ml-4">
                <h1 className="text-2xl font-bold">Butcher and Banker NYC</h1>
                <div className="flex mt-3">
                  <p className="mr-6">Tues, 14, 2023</p>
                  <p className="mr-6">7:30pm</p>
                  <p className="mr-6">3 people</p>
                </div>
              </div>
            </div>
          </section>
          {/* Header */}
          {/* Form */}
          <section className="mt-10 flex flex-wrap justify-between w-[660px]">
            <input
              type="text"
              className="border rounded  p-3 w-80 mb-4"
              name=""
              id=""
              placeholder="First Name"
            />
            <input
              type="text"
              className="border rounded  p-3 w-80 mb-4"
              name=""
              id=""
              placeholder="Last Name"
            />
            <input
              type="text"
              className="border rounded  p-3 w-80 mb-4"
              name=""
              id=""
              placeholder="Email"
            />
            <input
              type="tel"
              className="border rounded  p-3 w-80 mb-4"
              name=""
              id=""
              placeholder="Phone Number"
            />
            <input
              type="text"
              className="border rounded  p-3 w-80 mb-4"
              name=""
              id=""
              placeholder="Occasion (optional)"
            />
            <input
              type="text"
              className="border rounded  p-3 w-80 mb-4"
              name=""
              id=""
              placeholder="Requests (optional)"
            />
            <button className=" bg-light-pink hover:bg-pink w-full p-3 text-white rounded disabled:bg-gray-300">
              {' '}
              Complete Reservation
            </button>
            <p className='text-sm mt-5'>
              By clicking “Complete reservation” you agree to the FindATable
              Terms of Use and Privacy Policy. Message & data rates may apply.
              You can opt out of receiving text messages at any time in your
              account settings or by replying STOP.
            </p>
          </section>
          {/* Form */}
        </div>
      </section>
    </main>
  </main>
  )
}
