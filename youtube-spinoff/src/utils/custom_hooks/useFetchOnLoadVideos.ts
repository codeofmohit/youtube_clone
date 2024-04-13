import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getOnLoadVideos } from "../../store/thunk reducers/getOnLoadVideos";

const useFetchOnLoadVideos = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state?.youtube?.videos);
  // fetching onLoad Videos : mostPopularVideos
  useEffect(() => {
    // memoizing the dispatch/api-call
    if (videos?.length !== 20) {
      dispatch(getOnLoadVideos());
    }
  }, [dispatch, videos?.length]);
};
export default useFetchOnLoadVideos;
