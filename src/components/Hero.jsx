import { useState, useEffect, useContext } from 'react';
import '../App.css'
import smallArrow from './../assets/icons/small-arrow.svg'
import longArrow from './../assets/icons/long-arrow.svg'
import { SearchContext } from '../contexts/SearchContext';
import { UsersContext } from '../contexts/UsersContext';

const Hero = () => {
    const { users } = useContext(UsersContext)
    const { searchStr } = useContext(SearchContext);

    const filteredUsers = users && users.filter(user => user.name.toLowerCase().includes(searchStr));

    return (
        <section className="h-screen bg-hero bg-cover bg-center">
            <div className='bg-white text-center pt-20'>
                {!filteredUsers ? (<div>Loading users...</div>) : filteredUsers.map(user => (<div key={user.id}>{user.name}</div>))}
            </div>
            <div className="flex justify-end h-screen w-full pt-[4.3125rem]">
                <div className='flex flex-col bg-white aspect-square h-fit px-10 rounded-full font-workSans font-medium text-lg items-center justify-center -mr-[6rem] z-50 mt-[18rem] cursor-pointer hover:scale-90 active:scale-100 transition duration-200'>
                    <div>Go to catalogue</div>
                    <div>
                        <img src={smallArrow} alt="" />
                        <img src={longArrow} alt="" />
                    </div>
                </div>
                <div className="bg-white/50 backdrop-blur-lg w-[45%] font-lancelot text-[#111] text-[130px] leading-[100px] text-center pt-20">Adorn <br /> <span className='text-[100px]'>Home Decor</span> </div>
            </div>
        </section>
    )
}

export default Hero;