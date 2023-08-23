import React from 'react';
import RestaurantNavBar from '../components/RestaurantNavBar';
import Menu from '../components/Menu';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient()
const fetchRestaurantMenu = async (slug:string)=>{
  const restaurant = await prisma.restaurant.findUnique({
    where:{
      slug
    },
    select:{
      items:true
    }
  })
  if (!restaurant){
    throw new Error
  }
  return restaurant.items

}

export default async  function RestaurantMenu({params}: {params: {slug:string}}) {
  const menu = await fetchRestaurantMenu(params.slug)

  
  
  return (
    <>

      {/* Description part */}
        <div className="bg-white w-[100%] rounded shadow p-3 -ml-5">
          {/* Restaurant Nav */}
          <RestaurantNavBar slug = {params.slug}/>
          {/* Restaurant Nav */}
          {/* Menu */}
          <Menu menu = {menu}/>
          {/* Menu */}
        </div>
      {/* Description part */}
    </>
  );
}
