import { useAppSelector } from "../store/hooks";
import Comment from "./Comment";
import ErrorBox from "./ErrorBox";

const CommentThreads = () => {
  const commentThreads = useAppSelector((state) => state?.youtube?.comments);

  if (commentThreads.length === 0) {
    return <ErrorBox />;
  }

  return (
    <div className="commentThread">
      <h1 className="mt-4 mb-8 font-medium">Comments : </h1>
      <div className="commentList flex flex-col gap-2">
        {commentThreads.map((comment: any) => {
          return (
            <Comment
              userImg={
                comment?.snippet?.topLevelComment?.snippet
                  ?.authorProfileImageUrl
              }
              userHandle={
                comment?.snippet?.topLevelComment?.snippet?.authorDisplayName
              }
              publishedAt={
                comment?.snippet?.topLevelComment?.snippet?.publishedAt
              }
              displayText={
                comment?.snippet?.topLevelComment?.snippet?.textDisplay
              }
              likesCount={comment?.snippet?.topLevelComment?.snippet?.likeCount}
              totalReplyCount={comment?.snippet?.totalReplyCount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentThreads;
