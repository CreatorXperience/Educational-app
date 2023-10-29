import styled from "styled-components";

const HeroWrapper = styled.div`
  width: 100%;

  .hero {
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    border: 1px solid red;
    overflow: hidden;
    background: rgba(55, 38, 93, 0.43);

    .illustration {
      width: 60%;
      height: 100%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      border: 1px solid red;

      .hero-description {
        color: lightgrey;
        font-family: Inter;
        font-size: 14px;
        padding: 16px;
        font-size: 20px;
        width: 70%;
      }

      .illustration-title {
        font-size: 5rem;
        color: white;
        width: 70%;
        font-family: Caladea;

        .course {
          color: #7f56d9;
        }
      }

      .course-text {
        width: 90%;
      }
    }

    .character {
      position: relative;
      width: 40%;
      height: auto;

      .circle {
        position: absolute;
        width: 30%;
        height: 226px;
        border-radius: 426px;
        background: rgba(61, 93, 255, 0.534);
        filter: blur(150px);
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
        width: 100%;
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
        background: linear-gradient(94deg, #8c3cdd 4.68%, #5b57d6 98.4%);
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

  @media screen and (max-width: 1200px) and (min-width: 600px) {
    .hero {
      .illustration {
        width: 100%;
        height: 100%;
        text-align: center;
        padding: 12px;

        .course-text {
          width: 100%;
        }

        .hero-description {
          font-size: 14px;
          width: 90%;
        }

        .illustration-title {
          font-size: 3rem;
          color: white;
          width: 90%;
          font-family: Caladea;

          .course {
            color: #7f56d9;
          }
        }
      }

      .character {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .circle {
          display: none;
        }
        .character-illustration {
          width: 100%;
          height: auto;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .hero {
      flex-direction: column;
      height: auto;

      .illustration {
        width: 100%;
        height: auto;
        text-align: center;
        padding: 12px;

        .course-text {
          width: 100%;
        }

        .hero-description {
          font-size: 14px;
          width: 90%;
        }

        .illustration-title {
          font-size: 3rem;
          color: white;
          width: 90%;
          font-family: Caladea;

          .course {
            color: #7f56d9;
          }
        }
      }

      .character {
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;

        .circle {
          display: none;
        }
        .character-illustration {
          width: 100%;
          height: auto;
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
export default HeroWrapper;
