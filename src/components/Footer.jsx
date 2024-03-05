import { useState, useContext } from "react";
import "../App.css";
import { SearchContext } from "../contexts/SearchContext";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <section className="mt-20 h-[calc(100vh_-_5rem)] bg-amber-900/50 bg-footer bg-cover bg-center">
      <div className="flex h-[calc(100vh_-_5rem)] w-full flex-col justify-start md:flex-row md:justify-start">
        <div className="order-1 flex h-fit w-full flex-col justify-between bg-[#121212]/40 pb-3 pt-4 pl-[3.125rem] font-workSans text-white backdrop-blur-lg md:order-2 md:h-full md:w-[45%] md:pt-[3.75rem]">
          <div>
            <div className="font-lancelot text-[1rem] leading-[2rem] text-white md:text-[2.8125rem] md:leading-[3.0625rem]">
              Meet Us
            </div>
            <div className="grid grid-cols-3">
              <div>Package & Pricing</div>
              <div className="font-Montserrat">Terms & Conditions</div>
              <div>Support</div>
            </div>
          </div>
          <div>
            <div>Socials</div>
            <div>&copy; 2023 - Adorn. All rights reserved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
