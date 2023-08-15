import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';


export default function Home() {
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
