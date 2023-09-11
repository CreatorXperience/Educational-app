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
      <div className="inputWrapper">
        <div className="inputBar">
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: "lightgrey" }}
          ></i>
          <input type="text" placeholder="Explore courses" />
          <button className="explorebtn">Explore</button>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  width: 100%;

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
        right: 0;
      }
      .character-illustration {
        width: 90%;
      }
    }
  }

  .inputWrapper {
    border: 1px solid red;
    height: 100px;
    position: relative;

    .inputBar {
      width: 40%;
      height: 60px;
      background-color: white;
      position: absolute;
      left: 8%;
      margin-top: 10px;

      padding: 12px;
      border-radius: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      input {
        width: 80%;
        height: 90%;
        padding: 10px;
        border: none;
        outline: none;
        border: 1px solid red;
        font-size: 18px;
        color: #979595;
        font-family: DM sans, sans-serif;
      }

      .explorebtn {
        padding: 16px 28px;
        border-radius: 47px;
        background: #7f56d9;
        /* Shadow/xs */
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
        color: white;
        border: none;
        font-family: DM sans, sans-serif;
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

    .inputWrapper {
      .inputBar {
        width: 80%;
      }
    }
  }
`;
