import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../components/landingPage";
// import Courses from "../pages/Courses";
import ROUTES from "../routes/routes";
import CoursDescription from "../pages/CourseDescription";
import AllCourses from "../pages/All-courses";
import VideoPage from "../pages/VideoPage";

let router = createBrowserRouter([
  {
    path: ROUTES.landingPage,
    element: <LandingPage />,
  },
  {
    path: ROUTES.course,
    element: "<div>replace this with Courses</div>",
  },
  {
    path: ROUTES.selectedCourse,
    element: <CoursDescription />,
  },
  {
    path: ROUTES.allCourse,
    element: <AllCourses />,
  },
  {
    path: ROUTES.videoPages,
    element: <VideoPage />,
  },
]);

export default router;
