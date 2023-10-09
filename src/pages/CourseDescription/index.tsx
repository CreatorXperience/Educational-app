import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getData from "../../services/getData";
import { TDatabase } from "../../types/type";
import styled from "styled-components";
import { lightningIcon } from "../../constants/images";
import CourseBlock from "../../components/courseBlock";

const CoursDescription = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<TDatabase>();
  const [isExpand, setIsExpand] = useState<boolean>(false);

  useEffect(() => {
    getData<TDatabase | undefined>(setCourse, `data/${id}`);
  }, [id]);

  const handleExpand = () => {
    setIsExpand(!isExpand);
  };

  return (
    <CourseDescriptionWrapper
      img={course?.coverImage as string}
      isexpand={isExpand}
    >
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
            <div className="title">WHAT YOU'LL LEARN</div>
            <div className="greeting">
              Welcome to <span>{course?.coverTitle} course</span> , an engaging
              and comprehensive educational experience designed to empower you
              with valuable knowledge and skills. This course is crafted to
              cater to learners of all backgrounds and levels of expertise,
              making it accessible and beneficial for everyone.
            </div>

            <div className="obj-title">Course Objectives:</div>
            <div className="obj-desc">
              In this course, you will embark on a journey of discovery and
              learning, with the following key objectives:
            </div>

            <CourseBlock
              course={[
                {
                  title: "Understanding Fundamentals",
                  content: `Gain a solid understanding of the fundamental concepts, theories, and principles related to  ${course?.coverTitle}. Whether you're a beginner or an advanced learner, we will build a strong foundation for your knowledge.`,
                },
                {
                  title: "Self-paced Learning",
                  content:
                    "This course is designed to accommodate different learning styles and paces. You can tailor your learning experience to suit your needs while meeting course requirements.",
                },
                {
                  title: "Communication Skills",
                  content:
                    "Enhance your communication skills, both written and verbal, to effectively convey your ideas and insights about [Course Topic]. Clear and concise communication is a vital skill in any field.",
                },
              ]}
            />

            <div className="obj-title">Course Structure:</div>
            <div className="obj-desc">
              The {course?.coverTitle} course is structured to provide a
              well-rounded educational experience. Here's an overview of the
              course structure:
            </div>

            <CourseBlock
              course={[
                {
                  title: `Introduction to ${course?.coverTitle}`,
                  content: `We will begin with an exploration of the core concepts and background of  ${course?.coverTitle}, ensuring everyone is on the same page.`,
                },
                {
                  title: "In-depth Modules:",
                  content: `Dive into the heart of the course through a series of in-depth modules. Each module will cover specific aspects of  ${course?.coverTitle} and include lectures, readings, assignments, and assessments.`,
                },
                {
                  title: "Resources and Support:",
                  content:
                    "Access a wealth of resources, including textbooks, articles, videos, and online forums. Our support team and instructors are here to assist you on your learning journey.",
                },
                {
                  title: "Communication Skills:",
                  content: `Enhance your communication skills, both written and verbal, to effectively convey your ideas and insights about  ${course?.coverTitle}. Clear and concise communication is a vital skill in any field.`,
                },
              ]}
            />

            <div className="obj-title">Course Requirements:</div>
            <div className="obj-desc">
              To succeed in this course, you will need:
            </div>

            <CourseBlock
              course={[
                {
                  title: "Curiosity and Openness:",
                  content: "A willingness to explore new ideas and concepts.",
                },
                {
                  title: "Technology:",
                  content:
                    "Access to the necessary technology and tools for online learning (e.g., internet access, a computer).",
                },
                {
                  title: "Communication Skills:",
                  content:
                    "The ability to effectively communicate with instructors and fellow learners.",
                },
              ]}
            />

            <div className="obj-title">Course Benefits:</div>
            <div className="obj-desc">
              By the end of this course, you will have:
            </div>

            <CourseBlock
              course={[
                {
                  title: "A Strong Knowledge Base:",
                  content: `A deep understanding of  ${course?.coverTitle} and its practical applications.`,
                },
                {
                  title: "Enhanced Skills:",
                  content:
                    "Improved critical thinking, problem-solving, and communication skills.",
                },
                {
                  title: "Communication Skills:",
                  content:
                    "The ability to effectively communicate with instructors and fellow learners.",
                },
              ]}
            />

            <div className="obj-desc">
              We look forward to embarking on this educational journey with you.
              Remember that learning is a continuous process, and this course is
              just the beginning. Let's explore, discover, and grow together in
              the world of {course?.coverTitle}.
            </div>

            <div className="overlay">
              <button onClick={() => handleExpand()}>
                {isExpand ? "Collapse" : "Expand"}
                <i className="fa-solid fa-caret-down"></i>{" "}
              </button>
              <div className="caret"></div>
            </div>
          </div>
          <div className="start-card">
            <h2>When's the best time to get started? Today!</h2>
            <p>
              There's never a bad time to learn in-demand skills. But the
              sooner, the better. So start learning to code today by joining the
              ZTM Academy. You'll have a clear roadmap to developing the skills
              to build your own projects, get hired, and advance your career.
            </p>

            <button>START LEARNING NOW</button>
          </div>
        </div>
      </div>
    </CourseDescriptionWrapper>
  );
};
export default CoursDescription;

const CourseDescriptionWrapper = styled.div<{ img: string; isexpand: boolean }>`
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
      height: auto;
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
          padding: 12px;
        }
      }
    }

    .course-nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 12px;
      background: linear-gradient(180deg, #3f205e, #340c58);
      color: white;
      height: 60px;

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
        height: ${(props) => (props.isexpand ? "1700px" : "520px")};
        background-color: white;
        padding: 10px;
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        margin-top: 20px;

        .overlay {
          position: absolute;
          bottom: 0;
          width: 100%;

          button {
            width: 200px;
            padding: 10px;
            border: 2px solid #7f56d9;
            margin: 10px;
            font-family: Inter;
            font-size: 16px;
            background-color: transparent;
            border-radius: 20px;
            color: #7f56d9;
            position: ${(props) => (props.isexpand ? "relative" : "absolute")};
            top: ${(props) => (props.isexpand ? "5px" : "50px")};
            left: 50%;
            transform: translateX(-50%);
            z-index: 8;
          }

          .caret {
            font-size: 30px;
            width: 100%;
            height: 150px;
            background: white;
            filter: blur(50px);
            display: ${(props) => (props.isexpand ? "none" : "block")};
            z-index: 5;
          }
        }

        .title {
          text-align: center;
          font-family: Inter;
          font-size: 20px;
          font-weight: 700;
          padding: 12px;
          color: #7f56d9;
        }

        .greeting {
          font-size: 16px;
          font-family: Inter;
          font-weight: 200;
          padding: 12px;
        }

        .obj-title {
          font-family: Inter;
          font-size: 20px;
          font-weight: 700;
          padding: 12px;
          color: #7f56d9;
          margin-top: 20px;
        }

        .obj-desc {
          font-size: 16px;
          font-family: Inter;
          font-weight: 200;
          padding: 12px;
        }

        .course-requirement {
          font-size: 16px;
          font-family: Inter;
          font-weight: 200;
          padding: 12px;

          li {
            margin: 20px 10px;

            span {
              font-weight: 700;
              color: #7f56d9;
            }
          }

          li::marker {
            color: #7f56d9;
          }
        }
      }

      .start-card {
        width: 40%;
        height: 300px;
        background-color: white;
        margin-top: 30px;
        border-radius: 20px;
        display: flex;
        flex-flow: column;
        padding: 20px;

        h2 {
          font-size: 25px;
          font-family: Inter;
          font-weight: 700;
          padding: 12px;
        }

        p {
          font-size: 16px;
          font-family: Inter;
          font-weight: 200;
          line-height: 25px;
          padding: 12px;
        }

        button {
          width: 40%;
          padding: 15px;
          border-radius: 35px;
          border: none;
          background-color: #7f56d9;
          font-size: 14px;
          font-family: Inter;
          color: white;
          margin-top: 20px;
        }
      }
    }
  }
`;
