import { useNavigate } from "react-router-dom";
import { sideBaMenus } from "../constants/sideBarMenus";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getCategoriesVideos } from "../store/thunk-reducers/getCategoriesVideos";
import { addVideosType, clearSuggestedVideos } from "../store/slices/youtube";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const suggestedVideos = useAppSelector(
    (state) => state.youtube?.suggestedVideos
  );

  const videoType = useAppSelector((state) => state.youtube.videosType);

  const loadingVideosByCategories = (category: string) => {
    if (suggestedVideos.length !== 0) {
      dispatch(clearSuggestedVideos());
    }

    if (window.location.pathname !== "/") {
      navigate("/");
    }
    if (category === "Home") {
      videoType && dispatch(addVideosType("most-popular"));
      return;
    } else {
      dispatch(getCategoriesVideos(category));
      dispatch(addVideosType("category"));
    }
  };

  return (
    <div className="sideBar">
      <div className="mainBlock">
        <ul>
          {sideBaMenus.firstBlock.map((item) => {
            return (
              <li
                key={item.name}
                className="flex mx-1 px-1 items-center my-2 py-2 hover:bg-[#e5e5e5] hover:dark:bg-[#212121] hover:rounded cursor-pointer pl-2"
                onClick={() => {
                  loadingVideosByCategories(item.name);
                }}
              >
                <span className="mr-2">{item.icon}</span>
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <div className="secondaryBlock">
        <ul>
          {sideBaMenus.secondBlock.map((item) => {
            return (
              <li
                key={item.name}
                className="flex mx-1 px-1 items-center my-2 py-2 hover:bg-[#e5e5e5] hover:dark:bg-[#212121] hover:rounded cursor-pointer pl-2"
                onClick={() => {
                  loadingVideosByCategories(item.name);
                }}
              >
                <span className="mr-2">{item.icon}</span>
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
