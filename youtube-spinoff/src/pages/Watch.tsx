import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoPlayer from "../components/VideoPlayer";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getSuggestedVideos } from "../store/thunk-reducers/getSuggestedVideos";
import VideoSuggestions from "../components/VideoSuggestions";

const Watch = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const suggestedVideos = useAppSelector(
    (state) => state?.youtube?.suggestedVideos
  );

  const channelName = useAppSelector((state) => state?.youtube?.channelName);

  useEffect(() => {
    // Call getSuggestedVideos only if channelName has changed
    if (suggestedVideos?.length === 0) {
      dispatch(getSuggestedVideos(channelName));
    }
  }, [dispatch, channelName]);

  return (
    <div className="homePage">
      <nav className="mb-2 w-full fixed z-10">
        <Navbar />
      </nav>
      <main className="flex translate-y-16 w-full">
        <aside className="w-2/12 p-2">
          <Sidebar />
        </aside>
        <div className="currentPlayingVideo flex w-10/12">
          <VideoPlayer id={id} />
          <VideoSuggestions suggestedVideos={suggestedVideos} />
        </div>
      </main>
    </div>
  );
};
export default Watch;
