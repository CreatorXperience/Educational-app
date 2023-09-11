import { heroIllustration, illustration } from "../../constants/images";
import styled from "styled-components";

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="hero">
        <div className="illustration">{heroIllustration()}</div>
        <div className="character">
          <div className="circle"></div>
          {illustration()}
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .hero {
    margin-top: 40px;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid red;

    .illustration {
      width: 80%;

      .course-text {
        width: 90%;
      }
    }

    .character {
      position: relative;
      .circle {
        position: absolute;
        width: 30%;
        height: 226px;
        border-radius: 426px;
        background: rgba(61, 93, 255, 0.534);
        filter: blur(150px);
        position: absolute;
        border: 1px solid red;
      }
      .character-illustration {
        width: 90%;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .hero {
      flex-direction: column;
      justify-content: space-evenly;
      height: 600px;
      margin-top: 0px;

      .illustration {
        width: 100%;
        .course-text {
          width: 100%;
        }
      }

      .character {
        .character-illustration {
          width: 100%;
        }
      }
    }
  }
`;
