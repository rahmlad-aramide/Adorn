import { useState, useContext } from 'react';
import '../App.css';
import { SearchContext } from '../contexts/SearchContext';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {

    return (
        <section className="h-[calc(100vh_-_5rem)] mt-20 bg-footer bg-cover bg-amber-900/50 bg-center">
            <div className="flex flex-col md:flex-row justify-start md:justify-start h-[calc(100vh_-_5rem)] w-full">
                <div className="flex flex-col justify-between order-1 md:order-2 bg-[#121212]/40 text-white font-workSans backdrop-blur-lg w-full md:w-[45%] h-fit md:h-full pb-3 pt-4 md:pt-[3.75rem] pl-[3.125rem]">
                    <div>
                        <div className="font-lancelot text-white text-[1rem] md:text-[2.8125rem] leading-[2rem] md:leading-[3.0625rem]">
                            Meet Us
                        </div>
                        <div className='grid grid-cols-3'>
                            <div>
                                Package & Pricing
                            </div>
                            <div className='font-Montserrat'>
                                Terms & Conditions
                            </div>
                            <div>
                                Support
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Socials</div>
                        <div>&copy; 2023 - Adorn. All rights reserved</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;