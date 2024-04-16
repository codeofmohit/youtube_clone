import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Watch from "../pages/Watch";
import Error from "../pages/Error";
import VideosConatiner from "../components/VideosContainer";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [{ path: "/", element: <VideosConatiner /> }],
  },

  {
    path: "/watch/:id/:channel",
    element: <Watch />,
  },
]);

export default routes;
