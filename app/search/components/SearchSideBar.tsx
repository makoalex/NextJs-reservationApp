import React from 'react'

export default function SearchSideBar() {
  return (
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
  )
}
