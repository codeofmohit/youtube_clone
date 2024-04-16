import VideoCard from "../components/VideoCard";
const VideoSuggestions = ({ suggestedVideos }: any) => {
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
