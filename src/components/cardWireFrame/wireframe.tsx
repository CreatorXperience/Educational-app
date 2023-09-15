import styled from "styled-components";
import { useEffect, useRef } from "react";

const WireFrame = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  function callback(arr: any) {
    console.log(callback);
  }

  let observer = new IntersectionObserver(callback, {
    root: ref.current,
  });
  useEffect(() => {}, []);
  return (
    <WireFramesWrapper>
      <div className="wireframe-container" ref={ref}>
        <div className="wireframes-images"></div>

        <div className="wireframes-title"></div>
        <div className="wireframes-description"></div>

        <div className="wireframes-title"></div>
        <div className="wireframes-title"></div>
      </div>
    </WireFramesWrapper>
  );
};

export default WireFrame;

const WireFramesWrapper = styled.div`
  width: 100%;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  animation: fade ease-in-out infinite 4s;

  @keyframes fade {
    0% {
      opacity: 0.2;
    }
    20% {
      opacity: 0.4;
    }
    40% {
      opacity: 1;
    }

    60% {
      opacity: 0.2;
    }

    80% {
      opcaity: 0.4;
    }

    100% {
      opacity: 0.2;
    }
  }

  .wireframe-container {
    width: 60%;
    height: 500px;
    background: #353b6c;
    border-radius: 30px;
    margin-top: 20px;

    .wireframes-images {
      width: 100%;
      height: 40%;
      border-top-right-radius: 30px;
      border-top-left-radius: 30px;
      background: #464d86;
    }

    .wireframes-title {
      width: 60%;
      height: 20px;
      background: #464d86;
      margin: 10px;
      border-radius: 20px;
    }

    .wireframes-description {
      width: 90%;
      height: 120px;
      background: #464d86;
      margin: 10px;
      border-radius: 20px;
    }
  }
`;
