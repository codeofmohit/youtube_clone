import { useAppDispatch, useAppSelector } from "../store/hooks";
import ChannelDetails from "./ChannelDetails";
import CommentThreads from "./CommentThread";
import { getCommentsDetails } from "../store/thunk-reducers/getCommentsDetails";
import { getChannelDetails } from "../store/thunk-reducers/getChannelDetails";
import { useEffect } from "react";
import ErrorBox from "./ErrorBox";

const VideoPlayer = ({ id }: { id: any }) => {
  const channelId = useAppSelector((state) => state.youtube?.channelId);
  const dispatch = useAppDispatch();

  const sideBarHidden = useAppSelector(
    (state) => state?.youtube?.sideBarHidden
  );

  useEffect(() => {
    //call thunk reducer to get the channelInfo
    dispatch(getChannelDetails(channelId));
    dispatch(getCommentsDetails(id));
  }, [dispatch, channelId, id]);

  if (!id) {
    return <ErrorBox />;
  }

  return (
    <div className="videoDetails w-8/12 px-4">
      <div className="videoPlayer pt-6 ">
        <iframe
          width={`${!sideBarHidden ? "800" : "950"}`}
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
