import { useNavigate } from "react-router-dom";
import { YoutubeVideo } from "../types/Types";
import { useAppDispatch } from "../store/hooks";
import { addChannelName, clearSuggestedVideos } from "../store/slices/youtube";

const VideoCard = ({
  data,
  suggested,
}: {
  data: YoutubeVideo;
  suggested: boolean;
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div
      className={`videoCard m-2 shadow-lg border rounded ${
        !suggested ? "w-2/12" : "w-[80%] my-4"
      }  cursor-pointer`}
      onClick={() => {
        const navigateToID =
          typeof data.id == "string" ? data?.id : data?.id?.videoId;
        const channelName = data?.snippet?.channelTitle
          ? data?.snippet?.channelTitle
          : "random";
        dispatch(addChannelName(channelName));
        navigate(`/watch/${navigateToID}/${channelName}`);
      }}
    >
      <div className="imageContainer">
        <img
          src={data?.snippet?.thumbnails?.medium?.url}
          alt={data?.snippet?.title}
        />
      </div>
      <div className="infoContainer p-1">
        <p className="font-medium text-sm bg-slate-200 dark:bg-slate-800 p-1 rounded-l my-1 text-center">
          {data?.snippet?.channelTitle}
        </p>
        <p className=" break-before-all p-1 text-sm line-clamp-2">
          {data?.snippet?.title}
        </p>
      </div>
    </div>
  );
};
export default VideoCard;
