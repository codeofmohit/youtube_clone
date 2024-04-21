import { useAppDispatch, useAppSelector } from "../store/hooks";
import ChannelDetails from "./ChannelDetails";
import CommentThreads from "./CommentThread";
import { getCommentsDetails } from "../store/thunk-reducers/getCommentsDetails";
import { getChannelDetails } from "../store/thunk-reducers/getChannelDetails";
import { useEffect } from "react";

const VideoPlayer = ({ id }: { id: any }) => {
  const channelId = useAppSelector((state) => state.youtube?.channelId);
  const dispatch = useAppDispatch();
  const channelDetails = useAppSelector(
    (state) => state.youtube?.channelDetails
  );
  const commentsDetails = useAppSelector((state) => state.youtube?.comments);

  useEffect(() => {
    //call thunk reducer to get the channelInfo
    dispatch(getChannelDetails(channelId));
    dispatch(getCommentsDetails(id));
  }, [dispatch, channelId, id]);

  if (!channelDetails || !commentsDetails) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="videoDetails w-8/12">
      <div className="videoPlayer pt-6 ">
        <iframe
          width="800"
          height="472"
          src={`https://www.youtube.com/embed/${id}`}
          title="FunTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded"
        ></iframe>
      </div>
      <ChannelDetails />
      <CommentThreads />
    </div>
  );
};
export default VideoPlayer;
