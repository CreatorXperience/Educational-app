import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getData from "../../services/getData";
import { TDatabase } from "../../types/type";
import Card from "../../components/Card";
import styled from "styled-components";
import { lightningIcon } from "../../constants/images";

const CoursDescription = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<TDatabase>();

  useEffect(() => {
    getData<TDatabase | undefined>(setCourse, `data/${id}`);
  }, []);

  return (
    <CourseDescriptionWrapper img={course?.coverImage as string}>
      {/* <div>{course && <Card data={course as TDatabase} />}</div> */}

      <div className="content-wrapper">
        <div className="course-card">
          <div className="course-image"></div>
          <div className="course-desc">
            Join 1,000,000+ students enrolled in ZTM courses!
          </div>

          <button className="start-btn">Start Learning Now</button>

          <div className="line"></div>

          <div className="course-header">This course includes:</div>

          <ul className="course-package">
            <li>Access to exclusive ZTM community</li>
            <li>Certificate of Completion</li>
            <li>Learn and master web development with zero prior knowledge</li>
            <li>
              Unlimited access to all courses, workshops, career paths and
              resources
            </li>
          </ul>

          <div className="line"></div>

          <div className="course-header">Prerequisites:</div>

          <ul className="course-package">
            <li>A willingness and enthusiasm to learn</li>
            <li>
              A computer (Windows, Mac, or Linux) with an internet connection
            </li>
          </ul>
        </div>
        <div className="course-content">
          <div className="go-back"></div>
          <div className="content">
            <h1>{course?.coverTitle}</h1>
            <p>{course?.courseDescription}</p>
          </div>
        </div>
        <div className="course-nav">
          <div>
            <div className="nav-content">
              <p>Overview</p>
              <p>Curriculum</p>
              <p>Instructor</p>
            </div>
          </div>
        </div>
        <div className="lightning">
          <div className="light">{lightningIcon()}</div>
        </div>

        <div className="overview-wrapper">
          <div className="overview">
            <h1 className="overview-header">Course overview</h1>
            <p className="content">
              {" "}
              Learn to code from scratch, get hired, and have fun along the way
              with the most modern, up-to-date (fully updated for 2023) coding
              bootcamp on the web! We guarantee you that this is the best coding
              bootcamp that you can find if you want to go from an absolute
              beginner to getting hired as a developer this year.
            </p>
          </div>

          <div className="main-overview">
            <div className="greeting">
              Welcome to <span>[Course Name]</span> , an engaging and
              comprehensive educational experience designed to empower you with
              valuable knowledge and skills. This course is crafted to cater to
              learners of all backgrounds and levels of expertise, making it
              accessible and beneficial for everyone.
            </div>
          </div>
        </div>
      </div>
    </CourseDescriptionWrapper>
  );
};
export default CoursDescription;

const CourseDescriptionWrapper = styled.div<{ img: string }>`
  .content-wrapper {
    position: relative;

    .course-card {
      width: 500px;
      height: 900px;
      background-color: white;
      display: flex;
      flex-flow: column;
      align-items: center;
      border: 1px;
      position: absolute;
      right: 200px;
      top: 100px;
      border-radius: 5px;

      .course-image {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        width: 100%;
        height: 220px;
        background-image: url(${(props) => props.img});
        background-size: cover;
      }

      .course-desc {
        font-size: 20px;
        font-family: Inter;
        text-align: center;
        font-weight: 700;
        margin-top: 20px;
      }

      .start-btn {
        width: 90%;
        padding: 24px;
        border-radius: 35px;
        margin-top: 20px;
        border: none;
        background-color: #7f56d9;
        font-size: 20px;
        color: white;
        font-weight: 700;
      }

      .line {
        width: 90%;
        height: 1px;
        background-color: lightgrey;
        margin-top: 50px;
      }

      .course-header {
        text-align: center;
        font-size: 22px;
        font-weight: 700;
        font-family: Inter;
        margin-top: 10px;
      }

      .course-package {
        padding: 0 40px;
        li {
          margin: 10px;
          font-size: 18px;
          font-family: Inter;
          font-weight: 200;
        }

        li::marker {
          color: #7f56d9;
        }
      }
    }

    .course-content {
      width: 100%;
      height: 300px;
      background: linear-gradient(180deg, #c1d8fc, #e1c1ff);

      .content {
        width: 80%;
        margin-left: 200px;

        h1 {
          width: 50%;
          padding-top: 50px;
          font-size: 60px;
          font-family: Inter;
        }

        p {
          font-size: 25px;
          font-family: Inter;
          width: 60%;
        }
      }
    }

    .course-nav {
      display: flex;
      flex-direction: column;
      padding: 12px;
      background: linear-gradient(180deg, #3f205e, #340c58);
      color: white;

      .nav-content {
        display: flex;
        justify-content: space-between;
        width: 30%;
        margin-left: 200px;

        p {
          font-size: 18px;
          font-family: Inter;
        }
      }
    }

    .lightning {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .overview-wrapper {
      /* display: flex; */
      margin-left: 200px;
      .overview {
        width: 55%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .overview-header {
          text-align: center;
          color: white;
          font-size: 35px;
          font-family: Inter;
          line-height: 50px;
        }

        .content {
          color: white;
          font-size: 18px;
          font-family: Inter;
          font-weight: 600;
          line-height: 30px;
        }
      }

      .main-overview {
        width: 55%;
        height: 600px;
        background-color: white;
        padding: 10px;

        .greeting {
          font-size: 20px;
          font-family: Inter;
        }
      }
    }
  }
`;
