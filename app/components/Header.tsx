import React from 'react'
import SearchBar from './SearchBar';

export default function Header() {

  return (
    <div className="h-60 bg-gradient-to-r from-[#a8a8a8] from-20% to-[#3b3758] to-90%">
    <div className="text-center font-light mt-10">
      <h1 className="text-white text-4xl pb-2 font-light mr-6">
        A table for any occasion
      </h1>
      {/* SearchBar */}
      <SearchBar/>
      {/* SearchBAR */}
    </div>
  </div>    
  )
}
