import React from 'react'

export default function Images() {
  return (
    <>
    <h1 className="font-bold text-lg mt-10 mb-7 border-b pb-7">
    {' '}
    5 photos
  </h1>
  <div className="flex flex-wrap">
    <img
      src="https://resizer.otstatic.com/v2/photos/xlarge/2/46953738.webp"
      alt=""
      className="h-44 w-66 mb-1 mr-1"
    />
    <img
      src="https://resizer.otstatic.com/v2/photos/xlarge/2/46953745.webp"
      alt=""
      className="h-44 w-66 mb-1 mr-1"
    />
    <img
      src="https://resizer.otstatic.com/v2/photos/xlarge/1/46953727.webp"
      alt=""
      className="h-44 w-66 mb-1 mr-1"
    />
    <img
      src="https://resizer.otstatic.com/v2/photos/xlarge/1/46953723.webp"
      alt=""
      className="h-44 w-66 mb-1 mr-1"
    />
    <img
      src="https://resizer.otstatic.com/v2/photos/xlarge/1/47389620.webp"
      alt=""
      className="h-44 w-66 mb-1 mr-1"
    />
  </div>
  </>
  )
}
