import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import { PrismaClient } from '@prisma/client';


const prisma =  new PrismaClient()

const fetchRestaurant = async()=>{
  const restaurants = await prisma.restaurant.findMany()
  return restaurants
}


export default async function Home() {
  const restaurants = await fetchRestaurant()
  console.log({restaurants})
  return (
  
        <main>
          {/* Header */}
          <Header/>
          {/* Header */}
          {/* Cards */}
          <div className="py-3 px-35 m-5 flex flex-wrap">
            {/* Card */}
           <RestaurantCard />
            {/* Card */}
          </div>
          {/* Cards */}
        </main>
 
   
  );
}
// 6lkuXKre5a8AlkSv p