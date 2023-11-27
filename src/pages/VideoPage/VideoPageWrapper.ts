import styled from "styled-components";

const VideoPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid white;
  display: flex;

  .sideNav {
    width: 5%;
    height: 100%;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 100px 0px 100px 0px;
  }

  .sideContentBar {
    width: 20%;
    height: 100%;
    border: 2px solid orange;
  }

  .videoSpace {
    width: 75%;
    height: 100%;
    border: 3px solid magenta;
  }
`;

export default VideoPageWrapper;
