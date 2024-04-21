import { timeStampFormatter } from "../utils/utilities/timeStampFormatter";

const Comment = ({ userImg, userHandle, publishedAt, displayText }: any) => {
  return (
    <div className="comment flex gap-4 my-2">
      <div className="userAvatar">
        <img
          className="w-[40px] h-[40px] rounded-[50%]"
          src={userImg}
          alt={userHandle}
        />
      </div>
      <div className="commentDetails text-sm">
        <div className="userHandlePublishedAt flex items-center gap-2">
          <div className="userHandle font-medium">{userHandle}</div>
          <div className="publishedAt text-slate-600 dark:text-slate-400">
            {timeStampFormatter(publishedAt)}
          </div>
        </div>
        <div className="displayText my-1">{displayText}</div>
      </div>
    </div>
  );
};

export default Comment;
