import { useState } from "react";
import ExploreCourses from "../../components/popularCourses";
import AllCoursesWrapper from "./AllCoursesWrapper";

const AllCourses = () => {
  const [course, setCourse] = useState<string | undefined>();
  return (
    <AllCoursesWrapper>
      <div className="all-courses-container">
        <div className="header-section">
          <div className="course-header">AgileLearner Courses</div>
          <p>
            Level up your career with ZTM courses. The most up-to-date tech
            courses online. Go from complete beginner to getting hired, or
            upskill to advance your career.
          </p>
          <h3>
            Click START LEARNING on any course below to start learning for free
            (no signup required!).
          </h3>
        </div>

        <div className="course-packet">
          <div className="packet-card">
            <h1>11,500+</h1>
            <div className="rect"></div>
            <p>lessons</p>
          </div>
          <div className="packet-card">
            <h1>11,500+</h1>
            <div className="rect"></div>
            <p>lessons</p>
          </div>
          <div className="packet-card">
            <h1>11,500+</h1>
            <div className="rect"></div>
            <p>lessons</p>
          </div>
        </div>

        <div className="explore-courses-wrapper">
          <h1>Explore courses</h1>
          <div className="explore-container">
            <div className="upper-btn">
              <button>DEVELOPMENT</button>
              <button>COURSE</button>
              <button>CYBER SECURITY</button>
              <button>CLOUD & DEVOPS</button>
              <button>Course</button>
              <button>Course</button>
              <button>Course</button>
              <button>Course</button>
              <button>Course</button>
              <button>Course</button>
            </div>

            <div className="upper-btn"></div>
          </div>
        </div>
      </div>
    </AllCoursesWrapper>
  );
};

export default AllCourses;
