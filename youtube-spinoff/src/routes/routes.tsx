import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Watch from "../pages/Watch";
import Error from "../pages/Error";
import OnLoadVideos from "../components/OnLoadVideos";
import SearchedVideos from "../components/SearchedVideos";
import CategoryVideos from "../components/CategoryVideos";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <OnLoadVideos /> },
      { path: "/search_results/:id", element: <SearchedVideos /> },
      { path: "/category/:id", element: <CategoryVideos /> },
    ],
  },

  {
    path: "/watch/:id",
    element: <Watch />,
  },
]);

export default routes;
