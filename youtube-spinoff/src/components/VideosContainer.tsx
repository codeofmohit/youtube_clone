import VideoCard from "./VideoCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { getOnLoadVideos } from "../store/thunk-reducers/getOnLoadVideos";
import ErrorBox from "./ErrorBox";
import { addVideosType, loadFromCache } from "../store/slices/youtube";

const VideosConatiner = () => {
  const videos = useAppSelector((state) => state.youtube?.videos);
  const isLoading = useAppSelector((state) => state.youtube?.loading);
  const dispatch = useAppDispatch();
  // checking for errors
  const isError = useAppSelector((state) => state.youtube.error);

  const videosType = useAppSelector((state) => state.youtube.videosType);

  const cachedHomePageVideos = useAppSelector(
    (state) => state.youtube.cachedHomePageVideos
  );

  // on load : loading most popular videos with caching algorith to avoid unnecesry api call's [highly optimised]
  useEffect(() => {
    // case of only 1st load
    if (videos?.length === 0) {
      dispatch(getOnLoadVideos());
    } else {
      // case of NOT the 1st time load [via internal routing]
      if (videosType === "most-popular") {
        // check if videos are in cache, then don't make api call, instead load from cache
        if (cachedHomePageVideos) {
          dispatch(loadFromCache());
        } else {
          dispatch(getOnLoadVideos());
        }
        dispatch(addVideosType(null));
      }
    }
  }, [videos, dispatch, videosType, cachedHomePageVideos]);

  if (isLoading) {
    return (
      <div className="loader flex justify-center items-center h-[80vh]">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    if (isError?.onLoad || isError?.onSearch || isError?.onCategory) {
      return <ErrorBox />;
    }
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
