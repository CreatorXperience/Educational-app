import VideoPageWrapper from "./VideoPageWrapper";
import { useContext, useLayoutEffect } from "react";
import { NavContext } from "../../App";
import SideNav from "../../components/sideNav";

const VideoPage = () => {
  const setIsHideNav = useContext(NavContext);

  useLayoutEffect(() => {
    if (setIsHideNav) setIsHideNav(false);
  }, [setIsHideNav]);

  return (
    <VideoPageWrapper>
      <SideNav />

      <div className="sideContentBar"></div>
      <div className="videoSpace"></div>
    </VideoPageWrapper>
  );
};

export default VideoPage;
