import VideoPageWrapper from "./VideoPageWrapper";
import { useContext, useEffect } from "react";
import { NavContext } from "../../App";

const VideoPage = () => {
  const setIsHideNav = useContext(NavContext);

  useEffect(() => {
    if (setIsHideNav) setIsHideNav(false);
  }, []);

  return (
    <VideoPageWrapper>
      <div>Video Page</div>
    </VideoPageWrapper>
  );
};

export default VideoPage;
