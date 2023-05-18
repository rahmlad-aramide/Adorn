import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { SearchContext } from '../contexts/SearchContext';
import { UserContext } from '../contexts/UserContext';
import '../App.css'
import smallArrow from './../assets/icons/arrow-short.svg'
import longArrow from './../assets/icons/arrow-long.svg'

const Hero = () => {
    const { users } = useContext(UserContext)
    const { searchStr } = useContext(SearchContext);

    const filteredUsers = users && users.filter(user => user.name.toLowerCase().includes(searchStr));

    return (
        <section className="h-screen bg-hero bg-cover bg-amber-900/50 bg-center shadow-lg">
            {/* <div className='bg-white text-center pt-20'>
                {!filteredUsers ? (<div>Loading users...</div>) : filteredUsers.map(user => (<div key={user.id}>{user.name}</div>))}
            </div> */}
            <div className="flex flex-col md:flex-row justify-start md:justify-end h-screen w-full pt-[4.3125rem]">
                <HashLink to="#catalogue" className='z-50 order-2 md:order-1 flex justify-center'>
                    <div className='flex flex-col bg-white aspect-square max-w-fit md:max-w-[20ch] h-fit px-4 rounded-full font-workSans font-medium text-lg items-center justify-center mr-0 md:-mr-[6rem] -mt-16 md:mt-[45vh] cursor-pointer hover:scale-90 active:scale-100 transition duration-200'>
                        <div className="text-center max-w-[8ch] md:max-w-full">Go to catalogue</div>
                        <div className="grid w-fit px-2 md:px-0">
                            <img src={smallArrow} alt="" className="flex order-2 md:order-1 w-4/5" />
                            <img src={longArrow} alt="" className="flex order-1 md:order-2 w-full"/>
                        </div>
                    </div>
                </HashLink>
                <div className="flex order-1 md:order-2 justify-center bg-white/50 backdrop-blur-lg w-full md:w-[45%] h-fit md:h-full pb-16 pt-4 md:pt-[4.3125rem]">
                    <div className="font-lancelot text-[#111] text-[4rem] md:text-[8.125rem] leading-[3rem] md:leading-[6.25rem] text-center">
                        Adorn <br /> <span className='text-[3rem] md:text-[6.25rem]'>Home Decor</span>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Hero;