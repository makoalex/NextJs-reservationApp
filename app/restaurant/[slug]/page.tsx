import React from 'react';
import RestaurantNavBar from './components/RestaurantNavBar';
import Title from './components/Title';
import Rating from './components/Rating';
import Description from './components/Description';
import Images from './components/Images';
import Reviews from './components/Reviews';
import ReservationCard from './components/ReservationCard';
import { PrismaClient } from '@prisma/client';

interface Restaurant {
  id: number;
    name: string;
    description: string;
    images: string[];
    slug: string
}

const prisma = new PrismaClient()
const fetchRestaurantBySlug = async (slug: string) :Promise<Restaurant>=>{
  const restaurant = await prisma.restaurant.findUnique({where:{slug},
  select:{
    id : true,
    name : true,
    description : true,
    images : true,
    slug : true
  }
  })

  if(!restaurant){
    throw new Error
  }
  return restaurant
}

export default async function RestaurantDetails({params}:{params:{slug:string}}) {
  const restaurant = await fetchRestaurantBySlug(params.slug)

  return (
    <>
      {/* Description part */}
        <div className="bg-white w-[70%] rounded shadow p-3 -ml-5">
          {/* Restaurant Nav */}
          <RestaurantNavBar slug= {restaurant.slug} />
          {/* Restaurant Nav */}
          {/* Title */}
          <Title name = {restaurant.name} />
          {/* Title */}
          {/* Rating */}
          <Rating />
          {/* Ratings */}
          {/* Description */}
          <Description description={restaurant.description} />
          {/* Description */}
          {/* Images */}
          <Images  images = {restaurant.images}/>
          {/* Images */}
          {/* Review */}
          <Reviews />
          {/* Review */}
        </div>
        <div className="w-[29%] relative text-reg">
          <ReservationCard />
        </div>
    
    </>
  );
}
