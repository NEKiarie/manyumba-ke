import React from 'react';

import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HouseList from '../components/HouseList';


const Home = () => {
  return <div className='min-h-[1900px] bg-white'>
    <Header />
    <Banner />
    <HouseList />
    <Footer />
  </div>;
};

export default Home;
