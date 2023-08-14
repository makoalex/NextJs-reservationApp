import React from 'react'

export default function Header() {
  return (
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
  )
}
