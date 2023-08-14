'use client'

import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
    const router = useRouter();
    const [location, setLocation] = useState('');
  return (
    <div className="h-60 bg-gradient-to-r from-[#a8a8a8] from-20% to-[#3b3758] to-90%">
    <div className="text-center font-light mt-10">
      <h1 className="text-white text-4xl pb-2 font-light mr-6">
        A table for any occasion
      </h1>
      {/* SearchBar */}
      <section className="text-left py-2 m-auto flex justify-center">
        <input
          type="text"
          className="text-lg w-[450px] p-1 rounded mr-5"
          placeholder="State... City...Town"
          value={location}
          onChange={(e) => setLocation(e.target.value.toLowerCase())}
        />
        <button
          className="bg-light-pink p-2 px-4 text-sm rounded hover:bg-pink"
          onClick={() => {
            if (location === 'banana') return;
            router.push('/search');
          }}
        >
          Find It
        </button>
      </section>
      {/* SearchBAR */}
    </div>
  </div>    
  )
}
