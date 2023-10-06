import { frameIcon, rocketIcon, starIcon } from "../../constants/images";
import PlatformWrapper from "./PlatformWrapper";

const Platform = () => {
  return (
    <PlatformWrapper>
      <div className="platform-container">
        <div className="circle"></div>
        <div className="rightSideFrame">{frameIcon()}</div>
        <div className="leftSideFrame">{frameIcon()}</div>

        <div className="mainFrame">
          <div className="rocketFrame">{rocketIcon()}</div>
          <div className="platform-content">
            <h1 className="platform-title">
              Join World’s largest learning{" "}
              <span className="purpleText">platform</span>
            </h1>

            <div className="platform-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. ex ea
              commodo consequat.
            </div>

            <button className="platform-btn">Sign up for Free</button>
          </div>
        </div>

        <div className="star">{starIcon()}</div>
      </div>
    </PlatformWrapper>
  );
};

export default Platform;
