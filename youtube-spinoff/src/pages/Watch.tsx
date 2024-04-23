import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoPlayer from "../components/VideoPlayer";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getSuggestedVideos } from "../store/thunk-reducers/getSuggestedVideos";
import VideoSuggestions from "../components/VideoSuggestions";
import Footer from "../components/Footer";

const Watch = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const suggestedVideos = useAppSelector(
    (state) => state?.youtube?.suggestedVideos
  );

  const isSideBarHidden = useAppSelector(
    (state) => state?.youtube?.sideBarHidden
  );

  const channelName = useAppSelector((state) => state?.youtube?.channelName);

  useEffect(() => {
    // Call getSuggestedVideos only if channelName has changed
    if (suggestedVideos?.length === 0) {
      dispatch(getSuggestedVideos(channelName));
    }
  }, [dispatch, channelName, suggestedVideos]);

  return (
    <div className="watchPage">
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
          className={`currentPlayingVideo flex ${
            !isSideBarHidden ? "w-10/12" : "w-12/12"
          } `}
        >
          <VideoPlayer id={id} />
          <VideoSuggestions suggestedVideos={suggestedVideos} />
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Watch;
