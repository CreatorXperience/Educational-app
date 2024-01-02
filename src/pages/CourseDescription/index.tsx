import { useState } from "react";
import { useParams } from "react-router-dom";

import { TDatabase } from "../../types/type";
import { lightningIcon } from "../../constants/images";
import CourseBlock from "../../components/courseBlock";
import CourseDescriptionWrapper from "./CourseDescriptionWrapper";

import BlurredCircle from "../../components/blurredCircle/circle";
import useIntersectionObserver from "./hook/useIntersectionObserver";
import useFetchCourse from "./hook/useFetchCourse";
import useExpandAndRedirect from "./hook/useExpandAndRedirect";

const CoursDescription = () => {
  const { id } = useParams();
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const { navRef, topSection } = useIntersectionObserver();

  let myCourse: TDatabase = useFetchCourse(id as string);

  const { handleExpand, handleRedirectToVideo } = useExpandAndRedirect();

  return (
    <CourseDescriptionWrapper
      img={myCourse?.coverImage as string}
      isexpand={isExpand}
    >
      <div className="content-wrapper">
        <div className="course-content" ref={topSection}>
          <div className="go-back"> </div>
          <div className="content">
            <h1>{myCourse?.coverTitle}</h1>
            <p>{myCourse?.courseDescription}</p>
          </div>

          <BlurredCircle />
          <div className="course-card">
            <div className="course-image"></div>
            <div className="course-desc">
              Join 1,000,000+ students enrolled in ZTM courses!
            </div>

            <button
              className="start-btn"
              onClick={() => handleRedirectToVideo(myCourse._id)}
            >
              Start Learning Now
            </button>

            <div className="line"></div>

            <div className="course-header">This course includes:</div>

            <ul className="course-package">
              <li>Access to exclusive ZTM community</li>
              <li>Certificate of Completion</li>
              <li>
                Learn and master web development with zero prior knowledge
              </li>
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
        </div>
        <div className="course-nav" ref={navRef}>
          <div>
            <div className="nav-content">
              <p>
                <a href="#overview">Overview</a>
              </p>
              <p>
                <a href="#curriculum">Curriculum</a>
              </p>
              <p>
                {" "}
                <a href="#instructor">Instructor</a>
              </p>
            </div>
          </div>

          <div className="lightning">
            <div className="light">{lightningIcon()}</div>
          </div>
        </div>

        <BlurredCircle />

        <div className="overview-wrapper" id="overview">
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
              Welcome to <span>{myCourse?.coverTitle} course</span> , an
              engaging and comprehensive educational experience designed to
              empower you with valuable knowledge and skills. This course is
              crafted to cater to learners of all backgrounds and levels of
              expertise, making it accessible and beneficial for everyone.
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
                  content: `Gain a solid understanding of the fundamental concepts, theories, and principles related to  ${myCourse?.coverTitle}. Whether you're a beginner or an advanced learner, we will build a strong foundation for your knowledge.`,
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
              The {myCourse?.coverTitle} course is structured to provide a
              well-rounded educational experience. Here's an overview of the
              course structure:
            </div>

            <CourseBlock
              course={[
                {
                  title: `Introduction to ${myCourse?.coverTitle}`,
                  content: `We will begin with an exploration of the core concepts and background of  ${myCourse?.coverTitle}, ensuring everyone is on the same page.`,
                },
                {
                  title: "In-depth Modules:",
                  content: `Dive into the heart of the course through a series of in-depth modules. Each module will cover specific aspects of  ${myCourse?.coverTitle} and include lectures, readings, assignments, and assessments.`,
                },
                {
                  title: "Resources and Support:",
                  content:
                    "Access a wealth of resources, including textbooks, articles, videos, and online forums. Our support team and instructors are here to assist you on your learning journey.",
                },
                {
                  title: "Communication Skills:",
                  content: `Enhance your communication skills, both written and verbal, to effectively convey your ideas and insights about  ${myCourse?.coverTitle}. Clear and concise communication is a vital skill in any field.`,
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
                  content: `A deep understanding of  ${myCourse?.coverTitle} and its practical applications.`,
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
              the world of {myCourse?.coverTitle}.
            </div>

            <div className="overlay">
              <button onClick={() => handleExpand(isExpand, setIsExpand)}>
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

          <div className="accordion-container">
            <h1 id="curriculum">Curriculum</h1>
            {/* {myCourse?.courseContent.topic.map((course) => {
              return (
                <Accordion
                  desc={course.description}
                  title={course.title}
                  key={course.id}
                />
              );
            })} */}
          </div>
        </div>
        <div className="instructor-section" id="instructor">
          <div>
            <h1 className="instructor-header">Meet your instructor</h1>
            <p className="instructor-content">
              Your instructor (Andrei) isn't just an expert with years of
              real-world professional experience. He has been in your shoes. He
              makes learning fun. He makes complex topics feel simple. He will
              motivate you. He will push you. And he will go above and beyond to
              help you succeed.
            </p>
          </div>

          <BlurredCircle />

          <div className="instructor-container">
            <div className="instructors-image"></div>
            <div className="instructor-wrapper">
              <h1 className="instructors-name">Hi, I'm Andrei Neagoie!</h1>
              <p className="instructors-description">
                Andrei, lead instructor of Zero To Mastery Academy, has taught
                1,000,000+ students worldwide how to code and get hired. ZTM
                grads work for world-class companies like Apple, Google, Amazon,
                Tesla, IBM, Facebook, Shopify and many more.
              </p>

              <p className="instructors-name small">Andrei Neagoie</p>
              <p className="instructors-post">Senior Software Developer</p>
              <p className="instructors-handle">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </CourseDescriptionWrapper>
  );
};
export default CoursDescription;
