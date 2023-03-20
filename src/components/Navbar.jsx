import { Search } from '../components';
import user from './../assets/icons/avatar.svg';
import heart from './../assets/icons/heart.svg';
import cart from './../assets/icons/cart.svg';

const Navbar = () => {
    return (
        <div className='bg-white h-[4.3125rem] flex items-center fixed w-full z-50'>
            <div className='flex justify-between w-[90%] items-center max-w-[1140px] mx-auto'>
                <div className='font-lancelot text-5xl'>
                    Adorn
                </div>
                <div>
                    <Search />
                </div>
                <div className='flex'>
                    <div className='cursor-pointer hover:scale-90 active:scale-100 transition duration-300'>
                        <img src={user} alt="Avatar" />
                    </div>
                    <div className='ml-[3.9375rem]'>
                        <img src={heart} alt="Favorites" />
                    </div>
                    <div className='ml-[3.5187rem]'>
                        <img src={cart} alt="Cart" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;