import React from 'react'
import SearchBar from './SearchBar';

export default function Header() {

  return (
    <div className="h-72 bg-gradient-to-r  from-[#102310]  to-[#113e21] pt-6">
    <div className="text-center font-light mt-10">
      <h1 className="text-white text-4xl pb-2 font-sans font-thin items-center">
        A table for any occasion
      </h1>
      {/* SearchBar */}
      <SearchBar/>
      {/* SearchBAR */}
    </div>
  </div>    
  )
}
