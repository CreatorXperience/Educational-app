import VideoPageWrapper from "./VideoPageWrapper";
import { useContext, useLayoutEffect } from "react";
import { NavContext } from "../../App";
import {
  javascriptIcon,
  vueIcon,
  reactIcon,
  indesignIcon,
  figmaIcon,
  flutterIcon,
  xdIcon,
  splineIcon,
  cssIcon,
} from "../../constants/images/index";

const VideoPage = () => {
  const setIsHideNav = useContext(NavContext);

  useLayoutEffect(() => {
    if (setIsHideNav) setIsHideNav(false);
  }, [setIsHideNav]);

  return (
    <VideoPageWrapper>
      <div className="sideNav">
        <div>{javascriptIcon()}</div>

        <div>{reactIcon()}</div>
        <div>{vueIcon()}</div>
        <div>{indesignIcon()}</div>
        <div>{figmaIcon()}</div>
        <div>{cssIcon()}</div>
        <div>{flutterIcon()}</div>
        <div>{xdIcon()}</div>
        <div>{splineIcon()}</div>
      </div>
      <div className="sideContentBar"></div>
      <div className="videoSpace"></div>
    </VideoPageWrapper>
  );
};

export default VideoPage;
