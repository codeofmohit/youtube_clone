import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="homePage">
      <nav className="mb-2 w-full fixed z-10">
        <Navbar />
      </nav>
      <main className="flex translate-y-16">
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
