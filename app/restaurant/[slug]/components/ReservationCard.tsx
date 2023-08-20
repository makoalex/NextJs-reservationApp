'use client'
import React from 'react'

export default function ReservationCard() {
  return (
    <div className="fixed bg-white w-[18%] rounded pb-3 ml-14 shadow">
    <div className="text-center border-b pb-3 mt-1 font-bold">
      <h4 className="ml-5 text-lg">Make a Reservation</h4>
    </div>
    <div className="my-3 flex flex-col ml-2">
      <label htmlFor="">Party Of:</label>
      <select name="" className="py-2 border-b font-light mb-2" id="">
        <option value=" ">1 person</option>
        <option value="">2 people</option>
      </select>
    </div>
    <div className="flex justify-between">
      <div className="flex flex-col w-[48%] ml-2">
        <label htmlFor="">Date</label>
        <input
          type="text"
          className="py-1 border-b  w-[28% ]"
        />
      </div>
      <div className="flex flex-col w-[48%] ml-2">
        <label htmlFor="">Time</label>
        <select name="" id="" className="py-1 border-b font-light mø">
          <option value="">7pm</option>
          <option value="">8pm</option>
        </select>
      </div>
    </div>
    <section className="mt-5 p-2">
      <button className="bg-gold hover:bg-yellow rounded w-full py-3 px-10 text-white font-bold">
        Find your time
      </button>
    </section>
  </div>
  )
}
