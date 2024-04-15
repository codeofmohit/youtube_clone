import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Watch from "../pages/Watch";
import Error from "../pages/Error";
import VideosConatiner from "../components/VideosContainer";
import CategoryVideos from "../components/CategoryVideos";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <VideosConatiner /> },
      { path: "/category/:id", element: <CategoryVideos /> },
    ],
  },

  {
    path: "/watch/:id",
    element: <Watch />,
  },
]);

export default routes;
