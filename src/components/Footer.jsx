import { useState, useContext } from 'react';
import '../App.css';
import { SearchContext } from '../contexts/SearchContext';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {

    return (
        <section className="h-[calc(100vh_-_5rem)] mt-20 bg-footer bg-cover bg-amber-900/50 bg-center">
            <div className="flex flex-col md:flex-row justify-start md:justify-start h-[calc(100vh_-_5rem)] w-full">
                
                <div className="flex order-1 md:order-2 justify-center bg-white/50 backdrop-blur-lg w-full md:w-[45%] h-fit md:h-full pb-16 pt-4 md:pt-[4.3125rem]">
                    <div className="font-lancelot text-[#111] text-[4rem] md:text-[8.125rem] leading-[3rem] md:leading-[6.25rem] text-center">
                        Adorn <br /> <span className='text-[3rem] md:text-[6.25rem]'>Home Decor</span>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Footer;