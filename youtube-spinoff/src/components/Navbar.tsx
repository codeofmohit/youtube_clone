import { useContext, useState } from "react";
// importing icons
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
// importing context
import { ThemeContext } from "../theme/themeContext";
// importing actions from youtubeSlice
import {
  addSearchTerm,
  addVideosType,
  clearSuggestedVideos,
  toggleSideBar,
} from "../store/slices/youtube";
// importing useAppDiscpatch from store
import { useAppDispatch, useAppSelector } from "../store/hooks";
// import useFetchOnSearchVideos from "../utils/custom_hooks/useFetchOnSearchVideos";
import { getOnSearchVideos } from "../store/thunk-reducers/getOnSearchVideos";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const theme = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const suggestedVideos = useAppSelector(
    (state) => state.youtube?.suggestedVideos
  );

  const videoType = useAppSelector((state) => state.youtube.videosType);

  const sideBarHidden = useAppSelector((state) => state.youtube.sideBarHidden);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm !== "") {
      if (window.location.pathname !== "/") {
        navigate("/");
      }
      dispatch(addSearchTerm(searchTerm));
      // useFetchOnSearchVideos();
      dispatch(getOnSearchVideos(searchTerm));
      dispatch(addVideosType("searched"));
      setSearchTerm("");
    } else {
      alert("Search can not be blank! please provide a search value!");
    }
  };

  const switchThemeHandler = () => {
    theme.toggleCurrentTheme();
  };

  const iconSize = window.innerWidth < 450 ? "1.25em" : "1.5em";

  return (
    <div className="navBar bg-white dark:bg-[#0f0f0f] p-2 md:p-4 flex shadow-lg py-4 md:py-2">
      <div className="navLeft w-1/5 md:w-1/5 flex items-center">
        <div
          className={`hamBurgurMenu mr-2 md:mr-4 cursor-pointer ${
            !sideBarHidden && "rotate-90"
          }`}
          onClick={() => {
            dispatch(toggleSideBar());
          }}
        >
          <RxHamburgerMenu size={iconSize} />
        </div>
        <div
          className="logo flex items-center cursor-pointer"
          onClick={() => {
            if (suggestedVideos.length !== 0) {
              dispatch(clearSuggestedVideos());
            }
            videoType && dispatch(addVideosType("most-popular"));
            if (window.location.pathname !== "/") {
              navigate("/");
            }
          }}
        >
          <div className="FaYoutube mr-1 cursor-pointer">
            <FaYoutube size={iconSize} color="red" />
          </div>
          <span className="text-lg md:text-xl">FunTube</span>
          <sup className="text-xs md:text-inherit">IN</sup>
        </div>
      </div>
      <div className="navCenter w-4/5 md:w-4/5">
        <form
          className="flex items-center justify-end md:justify-center"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            placeholder="Search for videos"
            className="border p-1 pl-3 md:pl-4 w-2/3 md:w-1/2 rounded md:rounded-[2rem] mr-0 md:mr-2 dark:bg-[#212121]"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button type="submit" className=" -translate-x-10">
            <CiSearch />
          </button>
          <div
            className="microPhoneButton bg-[#e5e5e5] dark:text-[#212121] p-3 md:p-2 rounded-[2rem] cursor-pointer"
            onClick={switchThemeHandler}
            title="change the theme!"
          >
            {theme.currentTheme === "light" ? (
              <MdDarkMode />
            ) : (
              <MdOutlineDarkMode />
            )}
          </div>
        </form>
      </div>
      <div className="navRigh w-1/5 flex items-center justify-center hidden md:block">
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
