import VideoPageWrapper from "./VideoPageWrapper";
import { useContext, useLayoutEffect } from "react";
import { NavContext } from "../../App";
import SideNav from "../../components/sideNav";
import SearchBar from "../../components/searchBar";

const VideoPage = () => {
  const setIsHideNav = useContext(NavContext);

  useLayoutEffect(() => {
    if (setIsHideNav) setIsHideNav(false);
  }, [setIsHideNav]);

  return (
    <VideoPageWrapper>
      <SideNav />

      <div className="sideContentBar">
        <div className="header">
          <p>AgileLearner.com</p>
          <a>View all courses</a>
        </div>

        <SearchBar />

        <div className="category">
          <p>Design</p>
        </div>
      </div>
      <div className="videoSpace"></div>
    </VideoPageWrapper>
  );
};

export default VideoPage;
