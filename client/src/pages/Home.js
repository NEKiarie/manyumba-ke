import React from 'react';

import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FeaturedProperty from './FeaturedProperty';


const Home = () => {
  return <div className='min-h-[1900px] bg-white'>
    <Header />
    <Banner />
    <FeaturedProperty />
    <Footer />
  </div>;
};

export default Home;
