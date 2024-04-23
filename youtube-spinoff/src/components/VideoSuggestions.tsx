import VideoCard from "../components/VideoCard";
import { useAppSelector } from "../store/hooks";
import Spinner from "./Spinner";
import ErrorBox from "./ErrorBox";

const VideoSuggestions = ({ suggestedVideos }: any) => {
  const loading = useAppSelector((state) => state?.youtube?.loading_suggested);

  // checking for errors
  const isError = useAppSelector((state) => state.youtube.error);

  if (loading) {
    return (
      <div className="loader flex justify-center items-center h-[50vh]">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    if (isError?.onSuggestions) {
      return <ErrorBox />;
    }
  }

  return (
    <div className="videoSuggestions m-6 w-4/12 px-4">
      <h1 className="text-xl mb-2">Suggested Videos</h1>
      <hr className="w-full" />
      {suggestedVideos?.length !== 0 ? (
        suggestedVideos.map((item: any) => {
          const id = typeof item.id == "string" ? item?.id : item?.id?.videoId;
          return <VideoCard data={item} key={id} suggested={true} />;
        })
      ) : (
        <ErrorBox />
      )}
    </div>
  );
};
export default VideoSuggestions;
