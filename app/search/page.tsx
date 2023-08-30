import React from 'react';
import Header from './components/Header';
import SearchSideBar from './components/SearchSideBar';
import RestaurantCard from './components/RestaurantCard';
import { Cuisine, PRICE, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const fecthRestaurantsByCity = (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    mainImage: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  if (!city) return prisma.restaurant.findMany({ select });
  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city,
        },
      },
    },
    select,
  });
};

const fetchLocations = async () => {
  return await prisma.location.findMany();
};
const fetchCuisine = async () => {
  return prisma.cuisine.findMany();
};

export default async function Search({
  searchParams,
}: {
  searchParams: { city?: string; cuisine?: Cuisine; price?: PRICE };
}) {
  const location = await fetchLocations();
  const cuisine = await fetchCuisine();
  const restaurants = await fecthRestaurantsByCity(searchParams.city);

  return (
    <>
      {/* Header */}
      <Header />
      {/* Header */}
      <section className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar
          locations={location}
          cuisines={cuisine}
          searchParams={searchParams}
        />
        {/* Search side bar */}
        <section className="w-5/6">
          {/* Restaurant card */}
          {restaurants.length ? (
            <>
              {restaurants.map((restaurant) => (
                <RestaurantCard restaurant={restaurant} />
              ))}
            </>
          ) : (
            <p>Sorry, we found no restaurants in your area</p>
          )}
          {/* Restaurant Card */}
        </section>
        {/* Search side bar */}
      </section>
    </>
  );
}
