const VideoPlayer = ({ id }: { id: string | unknown }) => {
  return (
    <iframe
      width="840"
      height="472"
      src={`https://www.youtube.com/embed/${id}`}
      title="FunTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="rounded pt-6 w-8/12"
    ></iframe>
  );
};
export default VideoPlayer;
