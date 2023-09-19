import styled from "styled-components";
import { frameIcon, rocketIcon, starIcon } from "../../constants/images";

const Platform = () => {
  return (
    <PlatformWrapper>
      <div className="platform-container">
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

const PlatformWrapper = styled.div`
  width: 100%;
  border: 1px solid white;
  margin-top: 100px;
  height: 500px;

  .platform-container {
    width: 100%;
    height: 100%;
    position: relative;
    background: rgba(55, 38, 93, 0.43);

    .rightSideFrame,
    .leftSideFrame {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .rightSideFrame {
      left: 0;
    }

    .leftSideFrame {
      right: 0;
    }

    .star {
      position: absolute;
      right: 100px;
      top: -20px;
    }

    .mainFrame {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .rocketFrame {
        width: 35%;
      }
      .platform-content {
        width: 40%;

        .platform-title {
          color: #fff;
          font-family: Caladea;
          font-size: 60px;
          font-style: normal;
          font-weight: 700;
          line-height: 80px; /* 114.286% */
          letter-spacing: -0.5px;

          .purpleText {
            color: #bda0ff;
          }
        }

        .platform-text {
          color: #b0b0d1;
          font-family: Inter;
          font-size: 20px;
          font-style: normal;
          font-weight: 300;
          line-height: 40px; /* 181.818% */
        }

        .platform-btn {
          border-radius: 100px;
          background: linear-gradient(180deg, #ffc27a 0%, #ffa337 100%);
          padding: 10px;
          border: none;
          color: var(--gray-white, #fff);
          text-align: center;
          /* Body/Regular/600 */
          font-family: Public Sans;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          margin: 10px 0px;
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    .platform-container {
      .mainFrame {
        flex-flow: column;

        .rocketFrame,
        .platform-content {
          width: 100%;
        }

        .platform-content {
          text-align: center;
        }
      }
    }
  }
`;
