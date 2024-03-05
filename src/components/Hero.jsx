import { useContext } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { SearchContext } from "../contexts/SearchContext";
import { UserContext } from "../contexts/UserContext";
import "../App.css";
import smallArrow from "./../assets/icons/arrow-short.svg";
import longArrow from "./../assets/icons/arrow-long.svg";

const Hero = () => {
  const { users } = useContext(UserContext);
  const { searchStr } = useContext(SearchContext);

  const filteredUsers =
    users &&
    users.filter((user) => user.name.toLowerCase().includes(searchStr));

  return (
    <section className="h-screen bg-amber-900/50 bg-hero bg-cover bg-center shadow-lg">
      {/* <div className='bg-white text-center pt-20'>
                {!filteredUsers ? (<div>Loading users...</div>) : filteredUsers.map(user => (<div key={user.id}>{user.name}</div>))}
            </div> */}
      <div className="flex h-screen w-full flex-col justify-start pt-[4.3125rem] md:flex-row md:justify-end">
        <HashLink
          to="#catalogue"
          className="z-50 order-2 flex justify-center md:order-1"
        >
          <div className="mr-0 -mt-16 flex aspect-square h-fit max-w-fit cursor-pointer flex-col items-center justify-center rounded-full bg-white px-4 font-workSans text-lg font-medium transition duration-200 hover:scale-90 active:scale-100 md:-mr-[6rem] md:mt-[45vh] md:max-w-[20ch]">
            <div className="max-w-[8ch] text-center md:max-w-full">
              Go to catalogue
            </div>
            <div className="grid w-fit px-2 md:px-0">
              <img
                src={smallArrow}
                alt=""
                className="order-2 flex w-4/5 md:order-1"
              />
              <img
                src={longArrow}
                alt=""
                className="order-1 flex w-full md:order-2"
              />
            </div>
          </div>
        </HashLink>
        <div className="order-1 flex h-fit w-full justify-center bg-white/50 pb-16 pt-4 backdrop-blur-lg md:order-2 md:h-full md:w-[45%] md:pt-[4.3125rem]">
          <div className="text-center font-lancelot text-[4rem] leading-[3rem] text-[#111] md:text-[8.125rem] md:leading-[6.25rem]">
            Adorn <br />{" "}
            <span className="text-[3rem] md:text-[6.25rem]">Home Decor</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
