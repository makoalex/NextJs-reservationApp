import { PrismaClient, Location, Cuisine } from '@prisma/client';
import React from 'react';

export default function SearchSideBar({
  locations,
  cuisines,
}: {
  locations: Location[];
  cuisines: Cuisine[];
}) {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <p className=" font-light text-reg capitalize " key={location.id}>
            {location.name}
          </p>
        ))}
      </div>
      <div className="border-b pb-4">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <p className=" font-light text-reg capitalize" key={cuisine.id}>
            {cuisine.name}
          </p>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="border rounded-l p-2 w-full text-reg font-light ">
            $
          </button>
          <button className="border-r border-t border-b  p-2 w-full text-reg font-light ">
            $$
          </button>
          <button className="border-r border-t border-b  rounded-r p-2 w-full text-reg font-light ">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
}
