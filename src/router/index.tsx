import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../components/landingPage";
import Courses from "../pages/Courses";
import ROUTES from "../routes/routes";
import CoursDescription from "../pages/CourseDescription";

let router = createBrowserRouter([
  {
    path: ROUTES.landingPage,
    element: <LandingPage />,
  },
  {
    path: ROUTES.course,
    element: <Courses />,
  },
  {
    path: ROUTES.selectedCourse,
    element: <CoursDescription />,
  },
]);

export default router;
