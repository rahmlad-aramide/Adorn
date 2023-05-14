import React from 'react'
import { About, Catalog, Categories, Contact, Footer, Hero, NewArrivals, Sales } from '../components';

const Home = () => {

  return (
    <>
      <Hero />
      <Catalog />
      <Categories />
      <About />
      <Sales />
      <NewArrivals />
      <Contact />
      <Footer />
    </>
  )
}

export default Home