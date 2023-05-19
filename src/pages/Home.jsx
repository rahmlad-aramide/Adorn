import React from "react";
import {
  About,
  Catalog,
  Categories,
  Footer,
  Hero,
  NewArrivals,
  Sales,
} from "../components";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <div className="bg-tertiary/10">
      <ToastContainer />
      <Hero />
      <Catalog />
      <Categories />
      <About />
      <Sales />
      <NewArrivals />
      <Footer />
    </div>
  );
};

export default Home;
