import styled from "styled-components";

const VideoPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid white;
  display: flex;

  .sideContentBar {
    width: 25%;
    height: 100%;
    border: 2px solid orange;
    padding: 12px;
    overflow-y: auto;

    .header {
      color: #fff;
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 57.5px;
    }

    a {
      color: #484fff;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .category {
      color: lightgray;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 3 00;
      line-height: normal;
      padding: 40px 10px;
    }

    .container {
      cursor: pointer;
    }
  }

  .videoSpace {
    width: 70%;
    height: 100%;
    border: 3px solid magenta;
    overflow-y: auto;

    .video-content {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: self-start;

      .video-container {
        margin-top: 100px;
      }
    }

    .top-section {
      width: 100%;
      position: fixed;
      top: 0;

      .section {
        display: flex;
        justify-content: space-between;
        width: 60%;
        padding: 20px;

        .left-section {
          color: #fff;
          font-family: Inter;
          font-size: 30px;
          font-style: normal;
          font-weight: 600;
          line-height: 28px;
          display: flex;

          .header {
            margin-right: 8px;
          }
        }
        .right-section {
          display: flex;
          .email {
            color: #fff;
            font-family: Inter;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 28px; /* 140% */
            margin-right: 12px;
          }

          .user-name {
            color: #bebebe;

            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 28px;
          }
        }
      }

      .lightningWrapper {
        width: 100%;
        margin: 0 auto;
        /* position: relative; */
      }
    }
  }

  .video-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    iframe {
      width: 70%;
      height: 600px;
      border: none;
      border-radius: 20px;
    }

    .topics {
      width: 25%;
      height: auto;
      background: #1d162e;
      border-radius: 20px;
      cursor: pointer;
    }
  }

  .video-cont {
    width: 70%;
    display: flex;
    justify-content: space-between;
    padding: 20px;

    .title {
      color: #fff;

      font-family: Inter;
      font-size: 25px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    .copylink {
      border-radius: 5px;
      border: 2px solid #9e9e9e;
      width: 97px;
      height: 42px;
      cursor: pointer;
    }
  }

  .description-container {
    width: 70%;
    border-radius: 10px;
    background: #1d162e;
    height: auto;
    padding: 20px;
    margin-left: 25px;

    .overview {
      color: #fff;

      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .desc {
      color: #fff;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      margin-top: 20px;
    }
  }
`;

export default VideoPageWrapper;
