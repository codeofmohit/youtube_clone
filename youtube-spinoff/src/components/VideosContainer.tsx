import VideoCard from "./VideoCard";
import { useAppSelector } from "../store/hooks";
import Spinner from "./Spinner";

const VideosConatiner = () => {
  const videos = useAppSelector((state) => state.youtube?.videos);
  const isLoading = useAppSelector((state) => state.youtube?.loading);

  if (isLoading) {
    return (
      <div className="loader flex justify-center items-center h-[80vh]">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="OnLoadVideos-container flex flex-wrap justify-evenly">
      {videos.map((item) => {
        const id = typeof item.id == "string" ? item?.id : item?.id?.videoId;
        return <VideoCard data={item} key={id} />;
      })}
    </div>
  );
};
export default VideosConatiner;
