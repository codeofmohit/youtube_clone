import VideoCard from "./VideoCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { getOnLoadVideos } from "../store/thunk-reducers/getOnLoadVideos";

const VideosConatiner = () => {
  const videos = useAppSelector((state) => state.youtube?.videos);
  const isLoading = useAppSelector((state) => state.youtube?.loading);
  const dispatch = useAppDispatch();

  // on load : loading most popular videos
  useEffect(() => {
    if (videos?.length === 0) {
      dispatch(getOnLoadVideos());
    }
  }, [videos, dispatch]);

  if (isLoading) {
    return (
      <div className="loader flex justify-center items-center h-[80vh]">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="OnLoadVideos-container flex flex-wrap justify-evenly">
      {videos?.length &&
        videos.map((item) => {
          const id = typeof item.id == "string" ? item?.id : item?.id?.videoId;
          return <VideoCard data={item} key={id} suggested={false} />;
        })}
    </div>
  );
};
export default VideosConatiner;
