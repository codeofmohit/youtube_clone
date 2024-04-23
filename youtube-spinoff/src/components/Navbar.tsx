import { useContext, useEffect, useState } from "react";
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
import { useSelector } from "react-redux";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const theme = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const suggestedVideos = useAppSelector(
    (state) => state.youtube?.suggestedVideos
  );

  const videoType = useAppSelector((state) => state.youtube.videosType);

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

  return (
    <div className="navBar bg-white dark:bg-[#0f0f0f] p-4 flex">
      <div className="navLeft w-1/5 flex items-center">
        <div
          className="hamBurgurMenu mr-4 cursor-pointer"
          onClick={() => {
            dispatch(toggleSideBar());
          }}
        >
          <RxHamburgerMenu size={"1.5em"} />
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
            <FaYoutube size={"1.75em"} color="red" />
          </div>
          <span className="text-xl">FunTube</span>
          <sup>IN</sup>
        </div>
      </div>
      <div className="navCenter w-4/5">
        <form
          className="flex items-center justify-center"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            placeholder="Search"
            className="border p-1 pl-4 w-1/2 rounded-[2rem] mr-2 dark:bg-[#212121]"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button type="submit" className=" -translate-x-10">
            <CiSearch />
          </button>
          <div
            className="microPhoneButton bg-[#e5e5e5] dark:text-[#212121] p-2 rounded-[2rem] cursor-pointer"
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
