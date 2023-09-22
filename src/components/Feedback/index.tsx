import styled from "styled-components";
import useSlide from "./hooks/useSlide";
import { QuoteIcon } from "../../constants/images";
import CarouselCard from "../CarouselCard";

const FeedBack = () => {
  const { $ref } = useSlide(2);

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

  .feedback-container {
    width: 80%;
    height: auto;
    margin: auto;
    border: 1px solid yellow;

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
      height: 250px;
      border: 1px solid white;
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      overflow: hidden;

      .carousel-card {
        width: 31.33%;
        height: 200px;
        background-color: white;
        border-radius: 30px;
        background: var(--gray-white, #fff);
        flex-shrink: 0;
        margin: 12px;
        transition: all 0.3s ease-in-out;
        position: relative;
        /* transform: translateX(-100%); */

        .carousel-profile {
          width: 80%;
          margin: 0 auto;
          height: 30px;
          border: 1px solid red;
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
`;
