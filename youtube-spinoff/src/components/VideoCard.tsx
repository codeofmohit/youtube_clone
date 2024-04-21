import { useNavigate } from "react-router-dom";
import { YoutubeVideo } from "../types/Types";
import { useAppDispatch } from "../store/hooks";
import {
  addChannelName,
  addChannelId,
  addCurrentPlayingVideo,
} from "../store/slices/youtube";
import { timeStampFormatter } from "../utils/utilities/timeStampFormatter";
import { countFormatter } from "../utils/utilities/countFormatter";

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
        const channelId = data?.snippet?.channelId
          ? data?.snippet?.channelId
          : "UC3XBkDeCVXCoCofFgfUZXGw";
        dispatch(addChannelName(channelName));
        dispatch(addChannelId(channelId));
        dispatch(addCurrentPlayingVideo(data));
        navigate(`/watch/${navigateToID}/${channelName}`);
      }}
    >
      <div className="imageContainer">
        <img
          src={data?.snippet?.thumbnails?.medium?.url}
          alt={data?.snippet?.title}
        />
      </div>
      <div className="infoContainer p-1 text-sm">
        <p className="font-medium break-before-all p-1 line-clamp-2">
          {data?.snippet?.title}
        </p>
        <hr />
        <div className="otherDetails ">
          <p className="p-1 line-clamp-1  font-medium -mb-1">
            {data?.snippet?.channelTitle}
          </p>
          <div className="viewCountPublishedAt flex gap-1 p-1 text-xs text-[#606060] dark:text-[#AAAAAA]">
            {data?.statistics?.viewCount && (
              <p>{countFormatter(data?.statistics?.viewCount)} views | </p>
            )}
            <p>{timeStampFormatter(data?.snippet?.publishedAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;
