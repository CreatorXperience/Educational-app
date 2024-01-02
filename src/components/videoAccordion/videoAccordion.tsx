import useAccordion from "../Accordion/hooks/useAccordion";
import VideoAccordionWrapper from "./VideoAccordionWrapper";

type TAccordionProps = {
  title: string;
  desc: string;
};

const VideoAccordion = ({ title, desc }: TAccordionProps) => {
  const { handleIconClick, ref } = useAccordion();
  return (
    <VideoAccordionWrapper>
      <div className="accordion-container" ref={ref}>
        <div className="content-container">
          <div className="accordion-title">
            <p>{title}</p>
          </div>
          <div className="accordion-icon" onClick={() => handleIconClick()}>
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>
        <div className="accordion-desc">
          <p>{desc}</p>
        </div>
      </div>
    </VideoAccordionWrapper>
  );
};

export default VideoAccordion;
