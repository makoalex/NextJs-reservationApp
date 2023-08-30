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
}) {
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
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                price: PRICE.CHEAP,
              },
            }}
          >
            <button className="border rounded-l p-2 w-full text-reg font-light ">
              $
            </button>
          </Link>
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                price: PRICE.REGULAR,
              },
            }}
            className="border-r border-t border-b  p-2 w-full text-reg font-light "
          >
            $$
          </Link>
          <Link
            href={{
              pathname: '/search',
              query: {
                ...searchParams,
                price: PRICE.EXPENSIVE,
              },
            }}
            className="border-r border-t border-b  rounded-r p-2 w-full text-reg font-light "
          >
            $$$
          </Link>
        </div>
      </div>
    </div>
  );
}
