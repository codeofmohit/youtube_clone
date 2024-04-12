import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { FaFireFlameCurved } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi";
import { IoMusicalNotes } from "react-icons/io5";
import { MdLocalMovies } from "react-icons/md";
import { CgMediaLive } from "react-icons/cg";
import { CgGames } from "react-icons/cg";
import { FaNewspaper } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { FaPodcast } from "react-icons/fa";

export const sideBaMenus = {
  firstBlock: [
    { name: "Home", icon: <GoHomeFill /> },
    { name: "Shorts", icon: <SiYoutubeshorts /> },
    { name: "Trending", icon: <FaFireFlameCurved /> },
  ],
  secondBlock: [
    { name: "Shopping", icon: <HiShoppingBag /> },
    { name: "Music", icon: <IoMusicalNotes /> },
    { name: "Movies", icon: <MdLocalMovies /> },
    { name: "Live", icon: <CgMediaLive /> },
    { name: "Gaming", icon: <CgGames /> },
    { name: "News", icon: <FaNewspaper /> },
    { name: "Sports", icon: <FaTrophy /> },
    { name: "Courses", icon: <FaLightbulb /> },
    { name: "Fasion & Beauti", icon: <GiClothes /> },
    { name: "Podcasts", icon: <FaPodcast /> },
  ],
};
