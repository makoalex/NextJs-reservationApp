import NavBar from './components/NavBar';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';


export default function Home() {
  return (
    <main className=" min-h-screen w-screen justify-between bg-gray-100">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* navbar */}
        <NavBar/>
        {/* navbar */}
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
      </main>
    </main>
  );
}
