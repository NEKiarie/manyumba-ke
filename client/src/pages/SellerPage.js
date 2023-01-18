import React from 'react'
import Header from '../components/Header'
import Footer  from '../components/Footer'
import SellerDetails from '../components/SellerDetails'
import SellerPropertyDetails from '../components/SellerPropertyDetails'

const SellerPage = () => {
  return (
    <section className='bg-white' >
      <Header />
      <SellerPropertyDetails />
      <Footer />
    </section>
  )
}

export default SellerPage
