import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../components/landingPage";

let router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

export default router;
