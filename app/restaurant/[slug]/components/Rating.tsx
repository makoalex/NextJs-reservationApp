import React from 'react'

export default function Rating() {
  return (
    <div className="flex items-end">
    <div className="rating mt-2 flex items-center">
      <p>*****</p>
      <p className="text-reg ml-3"> 4.6</p>
    </div>
    <div>
      <p className="text-reg ml-4"> 1305 Reviews</p>
    </div>
  </div>
  )
}
