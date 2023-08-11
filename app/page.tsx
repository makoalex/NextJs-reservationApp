import Image from 'next/image';

export default function Home() {
  return (
    <main className=" min-h-screen w-screen justify-between bg-gray-100">
    <main className="max-w-screen-2xl m-auto bg-white">
      {/* navbar */}
      <nav className="bg-white p-2 flex justify-between">
        <a href="" className="font-bold text-gray-700 text-2xl">
          FindATable
        </a>
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
      {/* Header */}
      <section className='h-96 overflow-hidden'>
        <div className=' bg-gradient-to-r from-[#a8a8a8] to-[#3b3758]  h-full flex justify-center items-center'>
          <h1 className='text-7xl text-white capitalize text-shadow text-center font-light'>Nordvegan (Oslo)</h1>
        </div>
      </section>
      {/* Header */}
      </main>
      </main>
  );
}
