import useSlide from "./hooks/useSlide";
import CarouselCard from "../CarouselCard";
import FeedBackWrapper from "./FeedbackWrapper";

const FeedBack = () => {
  const { $ref, handleNext, handlePrev, _sliderDot, handleDotClick } =
    useSlide(4);

  return (
    <FeedBackWrapper>
      <div className="feedback-container">
        <div className="feedback-title">
          Student <span className="feedback-purple">Feedback</span>
        </div>
        <div className="feedback-description">
          Various versions have evolved over the years, sometimes by accident,
        </div>

        <div className="feedback-carousel" ref={$ref}>
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
          <button className="prev" onClick={() => handlePrev()}>
            <i
              className="fa-solid fa-angle-left"
              style={{ color: "white" }}
            ></i>
          </button>
          <button className="next" onClick={() => handleNext()}>
            <i
              className="fa-solid fa-angle-right"
              style={{ color: "white" }}
            ></i>
          </button>

          <div className="dotted-container" ref={_sliderDot}>
            <div className="dot" onClick={() => handleDotClick(0)}></div>
            <div className="dot" onClick={() => handleDotClick(1)}></div>
            <div className="dot" onClick={() => handleDotClick(2)}></div>
            <div className="dot" onClick={() => handleDotClick(3)}></div>
          </div>
        </div>

        <div className="mobile-feedback">
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
        </div>
      </div>
    </FeedBackWrapper>
  );
};

export default FeedBack;
