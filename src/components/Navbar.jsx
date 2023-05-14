import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Search } from '../components';
import { UserContext } from '../contexts/UserContext';
import { signUserOut } from '../lib/firebase/firebase.utils'
import userImg from './../assets/icons/avatar.svg';
import heart from './../assets/icons/heart.svg';
import cart from './../assets/icons/cart.svg';
import login from './../assets/icons/login.png';
import logout from './../assets/icons/logout.png';
import { notify } from '../App';

const Navbar = () => {
    const { user } = useContext(UserContext);
    
    const handleSignOut = async() => {
        await signUserOut();
        notify("Signed out successfully")
    }

    return (
        <>
            <div className='bg-white h-[4.3125rem] flex items-center fixed w-full z-50'>
                <div className='flex justify-between w-[90%] items-center max-w-[1140px] mx-auto'>
                    <div className='font-lancelot text-3xl md:text-5xl'>
                        <Link to='/'>Adorn</Link>
                    </div>
                    <div>
                        <Search />
                    </div>
                    <div className='flex'>
                        <div className='flex flex-col justify-center cursor-pointer hover:scale-125 active:scale-100 transition duration-200'>
                            <img src={userImg} alt="Avatar" className='h-6' />
                            <div className='text-sm'>Profile</div>
                        </div>
                        <div className='flex flex-col justify-center ml-4 md:ml-[3.9375rem] cursor-pointer hover:scale-125 active:scale-100 transition duration-200'>
                            <img src={heart} alt="Favorites" className='h-6' />
                            <div className='text-sm'>Favorites</div>
                        </div>
                        <div className='flex flex-col justify-center ml-4 md:ml-[3.5187rem] cursor-pointer hover:scale-125 active:scale-100 transition duration-200'>
                            <img src={cart} alt="Cart" className='h-6' />
                            <div className='text-sm'>Cart</div>
                        </div>
                        {!user? 
                        <Link to="/sign-in" className='flex'>
                            <div className='flex flex-col justify-center items-center ml-4 md:ml-[3.5187rem] cursor-pointer hover:scale-125 active:scale-100 transition duration-200'>
                                <img className='w-[24px] opacity-75' src={login} alt="Login" />
                                <div className='text-sm'>Sign In</div>
                            </div>
                        </Link>
                        : 
                        <div onClick={handleSignOut} className='flex flex-col justify-center items-center ml-4 md:ml-[3.5187rem] cursor-pointer hover:scale-125 active:scale-100 transition duration-200'>
                            <img className='w-[24px] opacity-75' src={logout} alt="Login" />
                            <div className='text-sm'>Sign Out</div>
                        </div>
                        }
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar;