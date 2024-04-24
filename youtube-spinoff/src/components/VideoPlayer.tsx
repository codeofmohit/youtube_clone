import { useAppDispatch, useAppSelector } from "../store/hooks";
import ChannelDetails from "./ChannelDetails";
import CommentThreads from "./CommentThread";
import { getCommentsDetails } from "../store/thunk-reducers/getCommentsDetails";
import { getChannelDetails } from "../store/thunk-reducers/getChannelDetails";
import { useEffect } from "react";
import ErrorBox from "./ErrorBox";
import VideoSuggestions from "./VideoSuggestions";
import { ifMobile } from "../constants/constant";

const VideoPlayer = ({ id }: { id: any }) => {
  const channelId = useAppSelector((state) => state.youtube?.channelId);
  const dispatch = useAppDispatch();

  const suggestedVideos = useAppSelector(
    (state) => state?.youtube?.suggestedVideos
  );

  useEffect(() => {
    //call thunk reducer to get the channelInfo
    dispatch(getChannelDetails(channelId));
    dispatch(getCommentsDetails(id));
  }, [dispatch, channelId, id]);

  if (!id) {
    return <ErrorBox />;
  }

  const playerHeightResponsive = window.innerWidth < 450 ? "200" : "472";

  return (
    <div className="videoDetails w-12/12 md:w-8/12 px-4">
      <div className="videoPlayer pt-6 ">
        <iframe
          height={playerHeightResponsive}
          src={`https://www.youtube.com/embed/${id}`}
          title="FunTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className={`rounded aspect-auto w-[100%]`}
        ></iframe>
      </div>
      <ChannelDetails />
      <CommentThreads />
      {ifMobile && <VideoSuggestions suggestedVideos={suggestedVideos} />}
    </div>
  );
};
export default VideoPlayer;
