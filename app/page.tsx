'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [location, setLocation] = useState('');
  return (
    <main className=" min-h-screen w-screen justify-between bg-gray-100">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* navbar */}
        <nav className="bg-white p-2 flex justify-between">
          <Link href="/" className="font-bold text-gray-700 text-2xl">
            {' '}
            FindATable{' '}
          </Link>
          <div>
            <div className="flex">
              <button className="bg-light-pink hover:bg-pink p-2 px-4 rounded mr-2 text-sm text-white">
                Sign In
              </button>
              <button className="p-2 px-4 hover:bg-slate-100 rounded mr-2 text-sm">
                SignUp
              </button>
            </div>
          </div>
        </nav>
        {/* navbar */}
        <main>
          {/* Header */}
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
          {/* Header */}
          {/* Cards */}
          <div className="py-3 px-35 m-5 flex flex-wrap">
            {/* Card */}
            <div className="w-64 h-70 cursor-pointer  rounded border overflow-hidden">
              <Link href={'/restaurant/Nordvegan'}>
                <img
                  src="https://resizer.otstatic.com/v2/photos/wide-huge/3/46953593.webp"
                  alt=""
                  className="mr-2"
                />
                <div className="p-1 m-2">
                  <h3 className="font-bold mb-2 text 2xl:">Nordvegan</h3>
                  <div className="flex items-start">
                    <div className=" flex mb-2">*****</div>
                    <p className="ml-2 text-xsm">77 Reviews</p>
                  </div>
                  <section className="flex text-reg font-light capitalize mb-2">
                    <p className="font-light mr-3">vegan</p>
                    <p className=" mr-3">$$$</p>
                    <p>Oslo</p>
                  </section>
                  <p className="text-sm mt-1 font-bold ">
                    Booked 3 times today
                  </p>
                </div>
              </Link>
            </div>
            {/* Card */}
          </div>
          {/* Cards */}
        </main>
      </main>
    </main>
  );
}
