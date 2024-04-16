import VideoCard from "../components/VideoCard";
import { useAppSelector } from "../store/hooks";
import Spinner from "./Spinner";
const VideoSuggestions = ({ suggestedVideos }: any) => {
  const loading = useAppSelector((state) => state?.youtube?.loading_suggested);

  if (loading) {
    return (
      <div className="loader flex justify-center items-center h-[50vh]">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="videoSuggestions m-6 w-4/12">
      <h1 className="text-xl mb-2">Suggested Videos</h1>
      <hr className="w-full" />
      {suggestedVideos?.length &&
        suggestedVideos.map((item: any) => {
          const id = typeof item.id == "string" ? item?.id : item?.id?.videoId;
          return <VideoCard data={item} key={id} suggested={true} />;
        })}
    </div>
  );
};
export default VideoSuggestions;
