import NavBar from '@/app/components/NavBar'
import React from 'react'
import Header from './components/Header'
import Form from './components/Form'


export default function Reserve() {
  return (
    <main className=" min-h-screen w-screen justify-between bg-gray-100">
    <main className="max-w-screen-2xl m-auto bg-white">
      {/* navbar */}
      <NavBar/>
      {/* navbar */}
      <section className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          {/* Header */}
          <Header />
          {/* Header */}
          {/* Form */}
           <Form />
          {/* Form */}
        </div>
      </section>
    </main>
  </main>
  )
}
