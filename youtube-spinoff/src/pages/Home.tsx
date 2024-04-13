import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import useFetchOnLoadVideos from "../utils/custom_hooks/useFetchOnLoadVideos";

const Home = () => {
  // fetching videos onLoad videos
  useFetchOnLoadVideos();
  return (
    <div className="homePage">
      <nav className="mb-2">
        <Navbar />
      </nav>
      <main className="flex">
        <aside className="w-2/12 p-2">
          <Sidebar />
        </aside>
        <div className="videosConatiner w-10/12 p-2">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default Home;
