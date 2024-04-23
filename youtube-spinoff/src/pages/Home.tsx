import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useAppSelector } from "../store/hooks";

const Home = () => {
  const isSideBarHidden = useAppSelector(
    (state) => state?.youtube?.sideBarHidden
  );

  return (
    <div className="homePage">
      <nav className="mb-1 md:mb-2 w-full fixed z-10">
        <Navbar />
      </nav>
      <main className="flex translate-y-12 md:translate-y-16">
        {!isSideBarHidden && (
          <aside className="w-2/12 p-1 md:p-2">
            <Sidebar />
          </aside>
        )}
        <div
          className={`videosConatiner ${
            !isSideBarHidden ? "w-10/12" : "w-12/12"
          } p-1 md:p-2`}
        >
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Home;
