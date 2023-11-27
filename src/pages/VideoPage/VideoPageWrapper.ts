import styled from "styled-components";

const VideoPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid white;
  display: flex;

  .sideContentBar {
    width: 20%;
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
  }

  .videoSpace {
    width: 75%;
    height: 100%;
    border: 3px solid magenta;
  }
`;

export default VideoPageWrapper;
