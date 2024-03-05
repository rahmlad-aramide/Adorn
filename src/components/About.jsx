import React from "react";
import PropTypes from "prop-types";
import aboutImage from "../assets/images/about.jpg";
import arrowRight from "../assets/icons/arrow-right-red.svg";

const About = (props) => {
  return (
    <div className="mt-[3.5rem] mb-[3.75rem] min-h-screen bg-white py-[4.3125rem] px-8 shadow md:px-[4.25rem] lg:px-[6.25rem]">
      <div className="mb-9">
        <img src={aboutImage} alt="About us" />
      </div>
      <div className="mb-[1.625rem] font-lancelot text-xl">About Us</div>
      <div className="mb-[1.625rem] max-w-[57ch] font-workSans text-lg">
        With a focus on a variety of markets and designs, we are acknowledged as
        an industry leader in terms of contract furniture product quality,
        design, and engineering. We are a full-service interior design and
        production firm distinguished by our unwavering commitment to quality
        and cutting-edge design approaches.
      </div>
      <div className="font-workSans">
        <button className="group flex items-center border border-secondary py-2 px-5 text-lg font-light text-secondary">
          Read More
          <img
            src={arrowRight}
            alt="arrow right"
            className="ml-2 group-hover:ml-4"
          />
        </button>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
