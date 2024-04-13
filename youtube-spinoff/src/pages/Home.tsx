import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { getOnLoadVideos } from "../store/thunk reducers/getOnLoadVideos";
import { useEffect } from "react";

import { useAppDispatch } from "../store/hooks";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("coming in use effect calling onLoad thunk function");
    dispatch(getOnLoadVideos());
  }, [dispatch]);

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
