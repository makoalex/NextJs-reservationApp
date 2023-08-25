import Link from 'next/link';
import React from 'react';
import NavBar from '../components/NavBar';
import Header from './components/Header';
import SearchSideBar from './components/SearchSideBar';
import RestaurantCard from './components/RestaurantCard';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const fecthRestaurantsByCity = (city: string |undefined) => {
  if(!city) return prisma.restaurant.findMany()
  return  prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city,
        },
      },
    },
    select: {
      id: true,
      name: true,
      mainImage: true,
      price: true,
      cuisine: true,
      location: true,
      slug:true,   
    },
  });
};

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  const restaurants = await fecthRestaurantsByCity(searchParams.city)

  return (
    <>
      {/* Header */}
      <Header />
      {/* Header */}
      <section className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        {/* Search side bar */}
        <section className="w-5/6">
          {/* Restaurant card */}
          <RestaurantCard />
          {/* Restaurant Card */}
        </section>
        {/* Search side bar */}
      </section>
    </>
  );
}
