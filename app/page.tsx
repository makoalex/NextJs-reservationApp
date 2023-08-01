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
              <button className="bg-light-orange hover:bg-orange p-2 px-4 rounded mr-2 text-sm text-white">
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
          <div className="h-60 bg-gradient-to-r from-[#031d44] to-[#3d5a80]">
            <div className="text-center font-light mt-10">
              <h1 className="text-white text-4xl pb-2">
                A table for any occasion
              </h1>
              {/* SearchBar */}
              <section className="text-left py-2 m-auto flex justify-center">
                <input
                  type="text"
                  className="text-lg w-[450px] p-1 rounded mr-5"
                  placeholder="State... City...Town"
                />
                <button className="bg-light-orange p-2 px-4 text-sm rounded hover:bg-orange">
                  Find It
                </button>
              </section>
              {/* SearchBAR */}
            </div>
          </div>
          {/* Header */}
          {/* Cards */}
          <div className="py-3 px-35 mt-10 ml-4 flex flex-wrap">
            {/* Card */}
            <div className="w-64 h-70 cursor-pointer  rounded border overflow-hidden">
              <img
                src="https://resizer.otstatic.com/v2/photos/wide-huge/3/46953593.webp"
                alt=""
                className=""
              />
              <div className='pb-1'>
                <h3 className='font-bold mb-2 text 2xl:'>Nordvegan</h3>
                <p className='text-reg font-light'>$$$</p>
                <div className='flex items-start'>
                  <div className=' flex mb-2'>*****</div>
                  <p className='ml-2 text-xsm'>77 Reviews</p>
                </div>
                <section className='flex'>
                <p className='font-thin mr-3 capitalize'>vegan</p>

              </section>
              </div>
            
            </div>
            {/* Card */}
          </div>
          {/* Cards */}
        </main>
      </main>
    </main>
  );
}
