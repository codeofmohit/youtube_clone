import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoPlayer from "../components/VideoPlayer";

const Watch = () => {
  const { id } = useParams();

  return (
    <div className="homePage">
      <nav className="mb-2 w-full fixed z-10">
        <Navbar />
      </nav>
      <main className="flex translate-y-16">
        <aside className="w-2/12 p-2">
          <Sidebar />
        </aside>
        <div className="currentPlayingVideo">
          <VideoPlayer id={id} />
        </div>
      </main>
    </div>
  );
};
export default Watch;
