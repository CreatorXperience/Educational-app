import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../components/landingPage";
import Courses from "../pages/Courses";
import ROUTES from "../routes/routes";

let router = createBrowserRouter([
  {
    path: ROUTES.landingPage,
    element: <LandingPage />,
  },
  {
    path: ROUTES.course,
    element: <Courses />,
  },
]);

export default router;
