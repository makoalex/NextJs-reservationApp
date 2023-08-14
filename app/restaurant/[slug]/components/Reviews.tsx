import React from 'react'

export default function Reviews() {
  return (
    <div>
    <h1 className="font-bold text-2xl mt-10 mb-7 border-b pb-5">
      {' '}
      100 People are saying:
    </h1>
    <div>
      {/* Review Card */}
      <section className="border-b pb-7 mb-7">
        <div className="flex">
          <div className="w-1/6 flex flex-col items-center">
            <div className="rounded-full bg-green w-16 h-16 flex justify-center items-center">
              <h2 className="text-white text-reg2">Mako</h2>
            </div>
            <p className="text-center">Mako Alex</p>
          </div>
          <section className="ml-10 w-5/6">
            <div className="flex items-center">
              <div className="flex mr-5">****</div>
            </div>
            <div className="mt-5">
              <p className="text-reg font-light">
                Very tasty food, we have been back three times during
                our stay in Oslo to try everything on the menu it was
                all excellent. Can’t recommend it enough. Buddha bowl,
                rainbow salad, curry, tofu skewers all delicious
              </p>
            </div>
          </section>
        </div>
      </section>
      {/* Review Card */}
    </div>
  </div>
  )
}
