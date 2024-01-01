import VideoPageWrapper from "./VideoPageWrapper";
import { useContext, useLayoutEffect, useState } from "react";
import { NavContext } from "../../App";
import SideNav from "../../components/sideNav";
import SearchBar from "../../components/searchBar";
import CourseComponent from "../../components/courseComponent";
import useFetchVideoCourse from "./hooks/useFetchVideoCourse";

const VideoPage = () => {
  const setIsHideNav = useContext(NavContext);
  const [count] = useState<number>(0);

  useLayoutEffect(() => {
    if (setIsHideNav) setIsHideNav(false);
  }, [setIsHideNav]);

  const data = useFetchVideoCourse(count);
  return (
    <VideoPageWrapper>
      <SideNav />

      <div className="sideContentBar">
        <div className="header">
          <p>AgileLearner.com</p>
          <a href="www.facebook.com">View all courses</a>
        </div>

        <SearchBar />

        <div className="category">
          <p>Design</p>

          <div className="container">
            {data &&
              data?.map((content, i) => {
                if (new RegExp(content.category, "i").exec("Python") && i < 6) {
                  return (
                    <CourseComponent
                      key={content._id}
                      content={content.courseDescription}
                      title={content.coverTitle}
                      img={content.coverImage}
                    />
                  );
                }
                return "";
              })}
          </div>

          <p>Development</p>

          <div className="container">
            {data &&
              data?.map((content) => {
                if (
                  new RegExp(content.category, "i").exec("backend Development")
                ) {
                  return (
                    <CourseComponent
                      key={content._id}
                      content={content.courseDescription}
                      title={content.coverTitle}
                      img={content.coverImage}
                    />
                  );
                }
                return "";
              })}
          </div>
        </div>
      </div>
      <div className="videoSpace"></div>
    </VideoPageWrapper>
  );
};

export default VideoPage;
