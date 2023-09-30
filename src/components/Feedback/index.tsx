import styled from "styled-components";
import useSlide from "./hooks/useSlide";
import { QuoteIcon } from "../../constants/images";
import CarouselCard from "../CarouselCard";

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

const FeedBackWrapper = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid red;
  display: flex;
  align-items: center;
  margin-top: 200px;

  .mobile-feedback {
    display: none;
  }

  .feedback-container {
    width: 80%;
    height: auto;
    margin: auto;
    border: 1px solid yellow;
    margin-top: 50px;

    .mobile-feedback {
      width: 100%;
      height: auto;
      border: 1px solid white;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      overflow: hidden;
      margin-top: 50px;
      display: none;

      .next,
      .prev {
        position: absolute;
        padding: 8px;
        border-radius: 5px;
        cursor: pointer;
        border: none;
        background: linear-gradient(180deg, #ffc27a 0%, #ffa337 100%);
        /* make the shadow more inset */
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
      }

      .next {
        right: 0;
        top: 50%;
      }

      .prev {
        left: 0;
        top: 50%;
      }

      .dotted-container {
        width: 100%;
        position: absolute;
        display: flex;
        bottom: 0;
        justify-content: center;

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: white;
          margin: 5px;
          transition: width 0.2s ease-in-out;
        }
      }

      .carousel-card {
        width: 95%;
        height: auto;
        background-color: white;
        box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        flex-shrink: 0;
        margin: 12px;
        transition: all 0.3s ease-in-out;
        position: relative;
        padding: 12px;
        /* transform: translateX(-100%); */

        .carousel-profile {
          width: 80%;
          margin: 0 auto;
          height: 30px;
          margin-top: 10px;
          height: auto;
          display: flex;

          .profile {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 10px;
          }

          .carousel-title {
            color: #000;
            font-family: DM sans;
            font-size: 22px;
            font-style: normal;
            font-weight: 600;
            line-height: 32px; /* 133.333% */
            letter-spacing: 0.048px;

            .post {
              color: #000;
              /* Body/Regular/400 */
              font-family: Inter;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 24px; /* 150% */
            }
          }
        }

        .carousel-content {
          color: var(--gray-700, #363a3d);
          /* Body/Regular/400 */
          font-family: Inter;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px; /* 150% */
          width: 80%;
          margin: 20px auto;
        }

        .quote-icon {
          position: absolute;
          right: 10px;
          top: 10px;
        }
      }
    }

    .feedback-title,
    .feedback-purple {
      color: #fff;
      font-family: Inter;
      font-size: 46px;
      font-style: normal;
      font-weight: 600;
      line-height: 62px;
    }
    .feedback-purple {
      color: #bda0ff;
    }

    .feedback-description {
      color: var(--gray-500, #6d737a);
      font-family: DM sans;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
    }

    .feedback-carousel {
      width: 100%;
      height: auto;
      border: 1px solid white;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      overflow: hidden;
      margin-top: 50px;
      padding: 12px;

      .next,
      .prev {
        position: absolute;
        padding: 8px;
        border-radius: 5px;
        cursor: pointer;
        border: none;
        background: linear-gradient(180deg, #ffc27a 0%, #ffa337 100%);
        /* make the shadow more inset */
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
      }

      .next {
        right: 0;
        top: 50%;
      }

      .prev {
        left: 0;
        top: 50%;
      }

      .dotted-container {
        width: 100%;
        position: absolute;
        display: flex;
        bottom: 0;
        justify-content: center;

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: white;
          margin: 5px;
          transition: width 0.2s ease-in-out;
        }
      }

      .carousel-card {
        width: 31.5%;
        height: auto;
        background-color: white;
        box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        flex-shrink: 0;
        margin: 20px;
        transition: all 0.3s ease-in-out;
        position: relative;
        /* transform: translateX(-100%); */

        .carousel-profile {
          width: 80%;
          margin: 0 auto;
          height: 30px;
          margin-top: 10px;
          height: auto;
          display: flex;

          .profile {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 10px;
          }

          .carousel-title {
            color: #000;
            font-family: DM sans;
            font-size: 22px;
            font-style: normal;
            font-weight: 600;
            line-height: 32px; /* 133.333% */
            letter-spacing: 0.048px;

            .post {
              color: #000;
              /* Body/Regular/400 */
              font-family: Inter;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 24px; /* 150% */
            }
          }
        }

        .carousel-content {
          color: var(--gray-700, #363a3d);
          /* Body/Regular/400 */
          font-family: Inter;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px; /* 150% */
          width: 80%;
          margin: 20px auto;
        }

        .quote-icon {
          position: absolute;
          right: 10px;
          top: 10px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .feedback-container {
      .feedback-carousel {
        display: none;
      }

      .mobile-feedback {
        display: block;
      }
    }
  }
`;
