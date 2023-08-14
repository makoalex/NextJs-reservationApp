import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
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
 
  )
}
