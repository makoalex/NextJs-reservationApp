import React from 'react'
import MenuCard from './MenuCard'
import { Item } from '@prisma/client'

export default function Menu({menu}:{menu:Item[]}) {
  return (
    <main className="bg-white mt-10">
            <div>
              <div className="mt-4 pb-1 mb-1">
                <h1 className="text-lg">MENU</h1>
              </div>
            {menu.length ? (
                <div className="flex flex-wrap justify-between">
                {/* Menu Card */}
                {menu.map(item=>(
                  <MenuCard key= {item.id} item= {item} />
                ))}
                {/* Menu Card */}
              </div>
            ) :(
              <div className="flex flex-wrap justify-between">
              {/* Menu Card */}
              <p>This restaurant doesn't have a menu</p>
              {/* Menu Card */}
            </div>
            )}
            </div>
          </main>
  )
}
