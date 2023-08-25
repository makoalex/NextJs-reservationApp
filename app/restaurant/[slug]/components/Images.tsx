import React from 'react';

export default function Images({ images }: { images: string[] }) {
  return (
    <>
      <h1 className="font-bold text-lg mt-7 mb-7 border-b pb-7">
        {' '}
        {`${images.length} photo${images.length > 1 ? 's' : ''}`}
      </h1>
      <div className="flex flex-wrap">
        {images.map((image) => (
          <img className="w-64 h-64 m-1 shadow " src={image} alt="" />
        ))}
      </div>
    </>
  );
}
