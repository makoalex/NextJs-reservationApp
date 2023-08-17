import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import { Cuisine, Location, PRICE, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export interface RestaurantCardType {
  id:number,
  name:string,
  mainImage:string,
  cuisine:Cuisine,
  location:Location
  price: PRICE,
  slug:string
}

const fetchRestaurant = async (): Promise<RestaurantCardType[]>=> {
  const restaurants = await prisma.restaurant.findMany({
    select:{
      id: true,
      name:true,
      mainImage:true,
      cuisine:true,
      slug:true,
      location:true,
      price:true,
    }
  });
  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurant();
 
  return (
    <main>
      {/* Header */}
      <Header />
      {/* Header */}
      {/* Cards */}
      <div className="py-3 px-35 m-5 flex flex-wrap">
        {/* Card */}
        {restaurants.map(restaurant =>
        <RestaurantCard restaurant = {restaurant} />
          )}
      
        {/* Card */}
      </div>
      {/* Cards */}
    </main>
  );
}
// 6lkuXKre5a8AlkSv p
