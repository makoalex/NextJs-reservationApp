import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png'

export default function NavBar() {
  return (
    <nav className="bg-white h-14 body-font font-raleway-300  flex grow-1 justify-between items-center">
          <Link href="/" className="font-bold flex text-gray-700 items-center text-2xl">
           
           <Image
           src={logo}
           alt='logo image'
           width={80}
           height={80}/>
        
            <h3 className='ml-0 font-sans antialiased'>ReservEats</h3>
          </Link>
          <div>
            <div className="flex">
              <button className="bg-gold hover:bg-yellow p-2 px-5 rounded mr-2 text-sm text-white">
                Sign In
              </button>
              <button className="p-1 px-6 hover:bg-slate-100 rounded mr-2 text-sm">
                SignUp
              </button>
            </div>
          </div>
        </nav>
 
  )
}
