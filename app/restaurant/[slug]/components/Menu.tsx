import React from 'react'
import MenuCard from './MenuCard'

export default function Menu() {
  return (
    <main className="bg-white mt-10">
            <div>
              <div className="mt-4 pb-1 mb-1">
                <h1 className="text-lg">MENU</h1>
              </div>
              <div className="flex flex-wrap justify-between">
                {/* Menu Card */}
                <MenuCard />
                {/* Menu Card */}
              </div>
            </div>
          </main>
  )
}
