/* 

target finishing navbar in this pomodoro : 17 mins, lightening dev speed. 

icons needed [sequence wise]

1> hamburger menu [dark + light]
2> youtube icon [dark + light, both]
3> search icon [dark + light]
4> microphone icon [dark + light]
5> theme changer icon [dark + light]
6> user icon [for sign in button] [dark + light]

navbar ui plan 
left centre right

Note : not a css project, don't waste time in perfecting the styling

*/

// importing icons
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navBar bg-white dark:bg-[#0f0f0f] p-4 dark:text-white flex">
      <div className="navLeft w-1/5 flex items-center">
        <div className="hamBurgurMenu mr-4">
          <RxHamburgerMenu size={"1.5em"} />
        </div>
        <div className="FaYoutube mr-1">
          <FaYoutube size={"1.75em"} color="red" />
        </div>
        <span className="text-xl">YouTube</span>
        <sup>IN</sup>
      </div>
      <div className="navCenter w-4/5">
        <form className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search"
            className="border p-1 pl-4 w-1/2 rounded-[2rem] mr-2 dark:bg-[#212121]"
          />
          <button type="submit" className=" -translate-x-10">
            <CiSearch />
          </button>
          <div className="microPhoneButton bg-[#e5e5e5] dark:bg-[#212121] p-2 rounded-[2rem] cursor-pointer">
            <MdDarkMode />
          </div>
        </form>
      </div>
      <div className="navRigh w-1/5 flex items-center justify-center">
        <button className="signInBtn flex items-center justify-center border rounded-[2rem] px-3 py-1 text-sky-800 dark:text-sky-400">
          <div className="userIocn mr-2">
            <FaRegCircleUser />
          </div>
          <span>Sign in</span>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
