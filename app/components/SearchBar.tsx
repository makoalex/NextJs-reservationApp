'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const router = useRouter();
    const [location, setLocation] = useState('');
  return (
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
  )
}
