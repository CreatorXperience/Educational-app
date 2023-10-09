import { useRef, useState } from "react";
import WireFramesWrapper from "./WireFramesWrapper";

const WireFrame = () => {
  const [fader] = useState<boolean>();
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <WireFramesWrapper ref={ref} className={`${fader ? "fader" : ""}`}>
      <div className="wireframe-container">
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
