import { Location, Cuisine, PRICE } from '@prisma/client';
import React from 'react';
import Link from 'next/link';
import Price from '@/app/components/Price';

export default function SearchSideBar({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
})

{
  const prices = [
    {
      price: PRICE.CHEAP,
      label: '$',
    },
    {
      price: PRICE.REGULAR,
      label: '$$',
    },
    {
      price: PRICE.EXPENSIVE,
      label: '$$$',
    },
  ];
  return (
    <div className="w-1/5 ">
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <Link
            href={{
              pathname: '/search',
              query: {
                city: location.name,
              },
            }}
            className=" font-light text-reg capitalize "
            key={location.id}
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                cuisine: cuisine.name,
              },
            }}
            className=" font-light text-reg capitalize flex flex-col "
            key={cuisine.id}
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices.map(({price, label})=>(
              <Link
              href={{
                pathname: '/search',
                query: {
                  ...searchParams,
                  price,
                },
              }}
            >
              <button className="border rounded-l p-2 w-full text-reg font-light ">
                {label}
              </button>
            </Link>
            
          ))} 
        </div>
      </div>
    </div>
  );
}
