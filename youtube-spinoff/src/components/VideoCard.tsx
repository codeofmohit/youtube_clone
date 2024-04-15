import { useNavigate } from "react-router-dom";
import { YoutubeVideo } from "../types/Types";

const VideoCard = ({ data }: { data: YoutubeVideo }) => {
  const navigate = useNavigate();
  return (
    <div
      className="videoCard m-2 shadow-lg border rounded  w-2/12 cursor-pointer"
      onClick={() => {
        const navigateTo =
          typeof data.id == "string" ? data?.id : data?.id?.videoId;
        navigate(`/watch/${navigateTo}`);
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
