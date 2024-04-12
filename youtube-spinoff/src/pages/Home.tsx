import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideosContainer from "../components/VideosContainer";

const Home = () => {
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
          <VideosContainer />
        </div>
      </main>
    </div>
  );
};
export default Home;
