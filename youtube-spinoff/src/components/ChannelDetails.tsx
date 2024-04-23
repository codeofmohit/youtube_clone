import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { countFormatter } from "../utils/utilities/countFormatter";
import { timeStampFormatter } from "../utils/utilities/timeStampFormatter";
import ErrorBox from "./ErrorBox";

const ChannelDetails = () => {
  const [subscribeBtn, setSubscribeBtn] = useState<boolean>(true);

  const channelDetails = useAppSelector(
    (state) => state.youtube?.channelDetails
  );

  const currentPlayingVideoDetails = useAppSelector(
    (state) => state.youtube?.currentPlayingVideo
  );

  useEffect(() => {
    setSubscribeBtn(true);
  }, []);

  if (!channelDetails) {
    return <ErrorBox />;
  }

  return (
    <div className="videoInfo flex flex-col gap-2">
      <div className="videoTitle">
        <h1 className="font-bold text-xl py-6">
          {currentPlayingVideoDetails?.snippet?.title}
        </h1>
      </div>
      <div className="channelDetails flex items-center gap-8 mb-4">
        <div className="channelInfo flex justify-center items-center gap-2">
          <div className="channelImg">
            <img
              className="w-[40px] h-[40px] rounded-[50%]"
              src={channelDetails[0]?.snippet?.thumbnails?.default?.url}
              alt="channelLogo"
            />
          </div>
          <div className="channelInfo">
            <div className="channelName font-bold">
              {channelDetails[0]?.snippet?.title}
            </div>
            <div className="subsCount text-sm">
              {countFormatter(channelDetails[0]?.statistics.subscriberCount)}{" "}
              &nbsp;
              <span>subscribers</span>
            </div>
          </div>
        </div>
        <div
          className="subscribeBtn"
          onClick={() => {
            setSubscribeBtn(!subscribeBtn);
          }}
        >
          <button className="font-medium bg-[#f2f2f2] dark:bg-[#292828] px-6 py-3 rounded-[30px]">
            {subscribeBtn ? "Subscribe" : "Subscribed"}
          </button>
        </div>
      </div>
      <div className="videoDetails bg-[#f2f2f2] dark:bg-[#292828] p-4 rounded flex flex-col gap-2 mb-4">
        <div className="publishedAt font-medium text-sm">
          <span>Published at : </span>
          {timeStampFormatter(currentPlayingVideoDetails?.snippet?.publishedAt)}
        </div>
        <div className="description text-sm">
          {currentPlayingVideoDetails?.snippet?.description}
        </div>
      </div>
    </div>
  );
};
export default ChannelDetails;
