import React from 'react'

export default function Form() {
  return (
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
  )
}
