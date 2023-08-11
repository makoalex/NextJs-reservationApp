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
      {/* Description part */}
      <section className='flex m-auto w-2/3 start-0 -mt-11'>
        <div className='bg-white w-[70%] rounded shadow p-3'>
      {/* Restaurant Nav */}
      <nav className='flex text-reg border-b pb-2'>
        <a  className='mr-7' href="#">overview</a>
        <a className='mr-7' href="">Menu</a>
      </nav>
      {/* Restaurant Nav */}
      {/* Title */}
      <section className='mt-4  border-b pb-6'>
        <h1 className='text-5xl font-bold'>Nordvegan</h1> 
      </section>
      {/* Title */}
      {/* Rating */}
      <div className='flex items-end'>
        <div className='rating mt-2 flex items-center'>
          <p>*****</p>
          <p className='text-reg ml-3'> 4.6</p>
        </div>
        <div>
          <p className="text-reg ml-4"> 1305 Reviews</p>
        </div>
      </div>
      {/* Ratings */}
      {/* Description */}
      <div mt-4>
        <p className='text-lg font-light mt-4'>
        We believe that good food goes beyond good taste.
Nordvegan is not just a vegan food business (even though our food is pretty delicious!), it is a global calling to the people of the world asking them to help protect our beautiful planet while enjoying our equally beautiful food and living a more sustainable lifestyle.

Our deli-style restaurant can be found in the local downtown area of Oslo, and serves up healthy plant-based food full of nutrient-dense ingredients. Whether you pop in for lunch or enjoy a hearty dinner, you can enjoy fresh vegan meals from a menu designed by a Michelin-star-trained chef – so you know it will be of the highest quality.

As well as proving that vegan food can be tasty as well as nutritious, we also help educate people on how to make constructive changes to eating habits, daily activities and more sustainable living. Stop by today and know you are supporting a true passion project, as well as doing your bit to help avert the global warming crisis.
        </p>
      </div>
      {/* Description */}
      {/* Images */}
      <h1 className='font-bold text-lg mt-10 mb-7 border-b pb-7'> 5 photos</h1>
      <div className="flex flex-wrap">
        <img src="https://resizer.otstatic.com/v2/photos/xlarge/2/46953738.webp" alt="" className="h-44 w-66 mb-1 mr-1" />
        <img src="https://resizer.otstatic.com/v2/photos/xlarge/2/46953745.webp" alt="" className="h-44 w-66 mb-1 mr-1" />
        <img src="https://resizer.otstatic.com/v2/photos/xlarge/1/46953727.webp" alt="" className="h-44 w-66 mb-1 mr-1" />
        <img src="https://resizer.otstatic.com/v2/photos/xlarge/1/46953723.webp" alt="" className="h-44 w-66 mb-1 mr-1" />
        <img src="https://resizer.otstatic.com/v2/photos/xlarge/1/47389620.webp" alt="" className="h-44 w-66 mb-1 mr-1" />
      </div>
      {/* Images */}
      {/* Review */}
      <div>
        <h1 className='font-bold text-2xl mt-10 mb-7 border-b pb-5'> 100 People are saying:
        </h1>
        <div>
          {/* Review Card */}
          <section className="border-b pb-7 mb-7">
            <div className="flex">
              <div className='w-1/6 flex flex-col items-center'>
                <div className="rounded-full bg-green w-16 h-16 flex justify-center items-center">
                  <h2 className="text-white text-reg2">Mako</h2>
                </div>
                <p className='text-center'>Mako Alex</p>
              </div>
              <section className='ml-10 w-5/6'>
               <div className='flex items-center'>
                <div className="flex mr-5">
                  ****
                </div>
               </div>
               <div className="mt-5">
                <p className="text-reg font-light">
                Very tasty food, we have been back three times during our stay in Oslo to try everything on the menu it was all excellent. Can’t recommend it enough. Buddha bowl, rainbow salad, curry, tofu skewers all delicious
                </p>
               </div>

              </section>
            </div>
          </section>
          {/* Revieq Card */}
        </div>
      </div>
      {/* Review */}

        </div>
      </section>
    {/* Restaurant Nav */}
      {/* Restaurant Nav */}
      {/* Description part */}
      {/* Reservation card  Portion */}
      
      {/* Reservation card Portion */}
   

      </main>
      </main>
  );
}
