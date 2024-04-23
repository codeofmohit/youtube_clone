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
    <div className="videoSuggestions m-0 md:m-6 w-12/12 md:w-4/12 px-0 md:px-4">
      <h1 className="md:text-xl mb-2 pt-4 md:pt-0 font-medium md:font-normal">
        Suggested Videos
      </h1>
      <hr className="md:w-full" />
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
