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
      className={`videoCard bg-[#f2f2f2] dark:bg-[#292828] m-2 shadow-md border rounded-xl md:rounded ${
        !suggested ? "w-5/12 md:w-2/12" : "w-[95%] md:w-[80%] my-4"
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
        if (suggested) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      <div className="imageContainer">
        <img
          className=" rounded-xl md:rounded-none"
          src={data?.snippet?.thumbnails?.medium?.url}
          alt={data?.snippet?.title}
        />
      </div>
      <div className="infoContainer p-1 text-xs md:text-sm ">
        <p className="font-medium  leading-relaxed md:leading-normal break-before-all p-1 line-clamp-2">
          {data?.snippet?.title}
        </p>
        <hr />
        <div className="otherDetails">
          <p className="p-1 line-clamp-1  font-medium -mb-1">
            {data?.snippet?.channelTitle}
          </p>
          <div className="viewCountPublishedAt flex gap-1 p-1 text-xs text-[#606060] dark:text-[#AAAAAA]">
            {data?.statistics?.viewCount && (
              <p className="">
                {countFormatter(data?.statistics?.viewCount)} views |{" "}
              </p>
            )}
            <p>{timeStampFormatter(data?.snippet?.publishedAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;
