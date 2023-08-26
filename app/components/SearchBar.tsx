'use client';
import React, { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';



export default function SearchBar() {

  const router = useRouter();
  const [location, setLocation] = useState('');

  const handleclick = () => {
    if (location === '') return;
    router.push(`/search?city=${location}`);
    setLocation('');
  };
  return (
    <section className="text-left py-2 m-auto flex justify-center">
      <input
        type="text"
        className="text-lg w-[450px] p-1 rounded mr-5"
        placeholder="City..."
        value={location}
        onChange={(e) => setLocation(e.target.value.toLowerCase())}
      />
      <button
        className="bg-gold p-2 px-5 text-sm rounded hover:bg-yellow text-white "
        onClick={() => {
          handleclick();
        }}
      >
        Find It
      </button>
    </section>
  );
}
