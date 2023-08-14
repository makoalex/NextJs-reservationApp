import React from 'react'

export default function Header() {
  return (
     <section className=" bg-gradient-to-r from-[#a8a8a8] to-[#3b3758]">
     {/* SearchBar */}
     <section className="text-left py-2 m-auto flex justify-center">
       <input
         type="text"
         className="text-lg w-[450px] p-1 rounded mr-5"
         placeholder="State... City...Town"
       />
       <button
         className="bg-light-pink p-2 px-4 text-sm rounded hover:bg-pink"
       >
         Find It
       </button>
     </section>
     {/* SearchBAR */}
   </section>
  )
}
