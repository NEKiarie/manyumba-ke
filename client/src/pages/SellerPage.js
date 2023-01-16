import React from 'react'
import Header from '../components/Header'
import Footer  from '../components/Footer'
import SellerDetails from '../components/SellerDetails'

const SellerPage = () => {
  return (
    <section className='bg-white' >
      <Header />
      <SellerDetails />
      <Footer />
    </section>
  )
}

export default SellerPage
