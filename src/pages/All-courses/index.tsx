import { useState } from "react";
import styled from "styled-components";
import ExploreCourses from "../../components/popularCourses";

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

const AllCoursesWrapper = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid red;

  .all-courses-container {
    width: 70%;
    border: 1px solid white;
    height: auto;
    margin: 0 auto;

    .header-section {
      .course-header {
        font-size: 60px;
        color: white;
        font-family: DM sans;
        font-weight: 600;
        margin-bottom: 20px;
      }

      p {
        color: white;
        font-family: DM sans;
        font-weight: 100;
        font-size: 18px;
        width: 60%;
      }

      h3 {
        color: white;
        font-family: DM sans;
        font-weight: 600;
        font-size: 20px;
        width: 60%;
        margin-top: 20px;
      }
    }

    .course-packet {
      width: 100%;
      display: flex;
      justify-content: space-between;
      place-items: center;
      margin-top: 50px;

      .packet-card {
        width: 30%;
        height: 180px;
        background: #37265d;
        padding: 12px;
        display: flex;
        justify-content: center;
        flex-flow: column;
        align-items: center;

        h1 {
          color: white;
          font-family: Inter;
          font-size: 30px;
        }

        p {
          font-family: Inter;
          font-weight: 400;
          color: white;
        }
      }
    }

    .explore-courses-wrapper {
      width: 100%;
      border: 1px solid red;
      height: 300px;
      position: relative;

      h1 {
        position: absolute;
        top: 18px;
        z-index: 20;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        background-color: #2c1f4a;
        padding: 12px;
        font-family: Inter;
      }
      .explore-container {
        width: 100%;
        height: 200px;
        border: 1px solid gray;
        top: 50px;
        position: absolute;
        z-index: 0;
        padding-top: 50px;
        border-radius: 15px;

        .upper-btn {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

          margin-top: 10px;

          button {
            padding: 12px;
            border-radius: 30px;
            font-family: Inter;
            font-size: 14px;
            border: 3px solid #7f56d9;
            background: transparent;
            color: white;
            cursor: pointer;
            margin: 2px;
            width: 100%;
          }

          button:hover {
            background: #7f56d94d;
            border: 3px solid white;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .all-courses-container {
      width: 100%;

      .header-section {
        .course-header {
          font-size: 40px;
          padding: 12px;
        }
        h3 {
          font-size: 16px;
          width: 100%;
          padding: 12px;
        }
        p {
          font-size: 14px;
          width: 100%;
          padding: 12px;
        }
      }

      .course-packet {
        justify-content: space-around;
        .packet-card {
          height: 120px;

          h1 {
            font-size: 18px;
          }

          p {
            font-size: 12px;
          }
        }
      }
      .explore-courses-wrapper {
        width: 100%;
        border: 1px solid red;
        height: 800px;
        position: relative;

        h1 {
          position: absolute;
          top: 18px;
          z-index: 20;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          background-color: #2c1f4a;
          padding: 12px;
          font-family: Inter;
        }
        .explore-container {
          width: 100%;
          height: 200px;
          top: 50px;
          padding-top: 50px;

          .upper-btn {
            margin-top: 80px;
            place-items: center;

            button {
              width: 80%;
            }

            button:hover {
              background: #7f56d94d;
              border: 3px solid white;
            }
          }
        }
      }
    }
  }
`;
