import React from 'react'

export default function Description( {description}: {description:string}) {
  return (
    <div className="mt-4">
    <p className="text-lg font-light mt-4">
      {description}
    </p>
  </div>
  )
}
