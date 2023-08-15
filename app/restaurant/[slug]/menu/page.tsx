import NavBar from '@/app/components/NavBar';
import React from 'react';
import Header from '../components/Header';
import RestaurantNavBar from '../components/RestaurantNavBar';
import Menu from '../components/Menu';

export default function RestaurantMenu() {
  return (
    <>

      {/* Description part */}
        <div className="bg-white w-[100%] rounded shadow p-3 -ml-5">
          {/* Restaurant Nav */}
          <RestaurantNavBar />
          {/* Restaurant Nav */}
          {/* Menu */}
          <Menu />
          {/* Menu */}
        </div>
      {/* Description part */}
    </>
  );
}
