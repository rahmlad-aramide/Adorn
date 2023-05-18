import React from 'react'
import PropTypes from 'prop-types'
import aboutImage from '../assets/images/about.jpg'
import arrowRight from '../assets/icons/arrow-right-red.svg'

const About = props => {
  return (
    <div className='min-h-screen bg-white shadow mt-[3.5rem] py-[4.3125rem] px-8 md:px-[4.25rem] lg:px-[6.25rem] mb-[3.75rem]'>
      <div className='mb-9'>
        <img src={aboutImage} alt="About us" />
      </div>
      <div className='font-lancelot text-xl mb-[1.625rem]'>About Us</div>
      <div className='font-workSans max-w-[57ch] text-lg mb-[1.625rem]'>
        With a focus on a variety of markets and designs, we are acknowledged as an industry leader in terms of contract furniture product quality, design, and engineering. We are a full-service interior design and production firm distinguished by our unwavering commitment to quality and cutting-edge design approaches.
      </div>
      <div className='font-workSans'>
        <button className='flex items-center py-2 px-5 text-secondary text-lg font-light border border-secondary group'>
          Read More
          <img src={arrowRight} alt="arrow right" className='ml-2 group-hover:ml-4' />
        </button>
      </div>
    </div>
  )
}

About.propTypes = {}

export default About