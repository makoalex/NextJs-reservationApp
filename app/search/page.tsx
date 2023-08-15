import Link from 'next/link';
import React from 'react';
import NavBar from '../components/NavBar';
import Header from './components/Header';
import SearchSideBar from './components/SearchSideBar';
import RestaurantCard from './components/RestaurantCard';

export default function Search() {
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
