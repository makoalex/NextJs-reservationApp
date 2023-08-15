import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '../../html/logo.png'

export default function NavBar() {
  return (
    <nav className="bg-white h-14 body-font font-raleway-300  flex justify-between items-center">
          <Link href="/" className="font-bold flex text-gray-700 items-center text-2xl">
            <img className='w-[80px] h-[80px]  ' src='logo.png' alt="" />
        
            <h3 className='ml-0'>ReservEats</h3>
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
