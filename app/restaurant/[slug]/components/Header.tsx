import React from 'react'

export default function Header({name}:{name: string}) {
  const renderTitle = () =>{
    const nameArray = name.split('-')
    nameArray[nameArray.length -1] = `(${nameArray[nameArray.length-1]})`
    return nameArray.join(" ")
  }
  return (
    <section className="h-96 overflow-hidden">
        <div className=" bg-gradient-to-r  from-[#102310]  to-[#113e21] pt-6 h-full flex justify-center items-center">
          <h1 className="text-7xl text-white capitalize text-shadow text-center font-sans font-thin">
            {renderTitle()}
          </h1>
        </div>
      </section>
  )
}
