import { heroIllustration, illustration } from "../../constants/images";
import styled from "styled-components";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    navigate(`courses/${ref.current?.value}`);
  };

  return (
    <HeroWrapper>
      <div className="hero">
        <div className="illustration">{heroIllustration()}</div>

        <div className="character">
          <div className="circle"></div>
          <div className="hero-illustration">{illustration()}</div>
        </div>
      </div>
      <div className="inputWrapper">
        <div className="inputBar">
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: "lightgrey" }}
          ></i>

          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              className="explore"
              placeholder="Search for courses e.g Javascript, python Node ...."
              ref={ref}
            />
          </form>
          <button className="explorebtn" onClick={(e) => handleSubmit(e)}>
            Explore
          </button>
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
    height: 420px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid red;
    overflow: hidden;
    position: relative;

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
        overflow: hidden;
      }
      .character-illustration {
        width: 90%;
      }

      .hero-illustration {
        animation: jumpin 1.5s ease-in-out;
        transform: translateY(0px);
      }

      @keyframes jumpin {
        0% {
          transform: translateY(-300px);
        }

        100% {
          transform: translateY(0px);

          transform: translateZ(-100px);
        }
      }
    }

    .movable {
      position: absolute;
      opacity: 0.3;
    }
  }

  .inputWrapper {
    border: 1px solid red;
    height: 100px;
    position: relative;
    width: 100%;

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
      align-items: center;
      justify-content: space-between;

      .fa-solid .fa-magnifying-glass {
        width: 20px;
      }

      form {
        width: 80%;

        input {
          width: 100%;
          height: 90%;
          padding: 10px;
          border: none;
          outline: none;
          border: 1px solid red;
          font-size: 18px;
          color: #979595;
          font-family: DM sans, sans-serif;
        }
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
        overflow: hidden;
        transition: color 0.3s ease, transform 0.3s ease;
        cursor: pointer;
      }

      .explorebtn:before {
        content: "";
        background-color: #ffffff;
        width: 0px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0px;
        transition: width 0.3s ease;
        z-index: -1;
        color: white;
        filter: blur(20px);
      }

      @keyframes runover {
        0% {
          left: 0px;
        }
        50% {
          left: 100px;
        }
        100% {
          left: 0px;
        }
      }

      .explorebtn:hover::before {
        animation: runover 0.5s ease-in-out 2 alternate;
        width: 10%;
      }

      .explorebtn:hover {
        transform: scale(1.05);
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
