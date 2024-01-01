import VideoPageWrapper from "./VideoPageWrapper";
import { useContext, useLayoutEffect, useState } from "react";
import { NavContext } from "../../App";
import SideNav from "../../components/sideNav";
import SearchBar from "../../components/searchBar";

import VideoCard from "../../components/videoCard";
import svg from "../../constants/svgs/stars";
import { lightningIcon } from "../../constants/images";
import { TDatabase } from "../../types/type";
import { useParams } from "react-router-dom";
import useFetchSingleCourse from "./hooks/useFetchSingleCourse";
import useFetchVideoCourse from "./hooks/useFetchVideoCourses";

const VideoPage = () => {
  const { videoId } = useParams();
  const setIsHideNav = useContext(NavContext);
  const [count] = useState<number>(0);
  const [currentVideo, setCurrentVideo] = useState<TDatabase>();
  const [identifier, setVideoIdentifier] = useState(videoId);

  let { data: course } = useFetchSingleCourse(identifier as string);

  console.log(identifier);

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

        <SearchBar width="95%" />

        <div className="category">
          <p>Design</p>

          <div className="container">
            <VideoCard
              setVideoId={setVideoIdentifier}
              data={data}
              category="Python"
            />
          </div>

          <p>Development</p>

          <div className="container">
            <VideoCard
              setVideoId={setVideoIdentifier}
              data={data}
              category="Anaconda"
            />
          </div>
        </div>
      </div>
      <div className="videoSpace">
        <div className="video-content">
          <div className="top-section">
            <div className="section">
              <div className="left-section">
                <div className="header">Featured Course</div>
                <div className="star">{svg.transparentStars()}</div>
              </div>

              <div className="right-section">
                <p className="email">tester@gmail.com</p>
                <p className="user-name">Peter Tester</p>
              </div>
            </div>
            <div className="lightningWrapper">
              <div>{lightningIcon()}</div>
            </div>
          </div>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/quJzdnXuNDc?si=Q8OIxZUGWF7CUgfX"
              title="pay"
            />
            <div className="topics">
              <VideoCard
                setVideoId={setVideoIdentifier}
                data={data}
                category="python"
              />
            </div>
          </div>

          <div className="video-cont">
            <p className="title">{course?.coverTitle}</p>
            <button className="copylink">Copy link</button>
          </div>

          <div className="description-container">
            <p className="overview">Course Overview</p>

            <div className="desc">{course?.courseDescription}</div>
          </div>
        </div>
      </div>
    </VideoPageWrapper>
  );
};

export default VideoPage;
