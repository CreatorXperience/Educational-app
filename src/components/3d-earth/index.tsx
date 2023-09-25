import styled from "styled-components";
import Spline from "@splinetool/react-spline";
import { astronaut1, astronaut2, astronaut3 } from "../../constants/images";

const Earth = () => {
  return (
    <EarthWrapper>
      <div className="earth-content">
        <p className="earth-title">
          The place for anyone from anywhere to <br />{" "}
          <span className="purple">Learn anything</span>
        </p>

        <div className="earth-description">
          Whether you’re scaling your startup or just learning how to code,
          GitHub is your home. Join the world’s largest developer platform to
          build the innovations that empower humanity. Let’s build from here.
        </div>

        <div className="ast1">{astronaut1()}</div>
        <div className="ast2">{astronaut2()}</div>

        <div className="buttons">
          <button className="getStarted">Get started</button>
          <button className="login">Login</button>
        </div>
      </div>
      <div className="earthspace">
        <Spline scene="https://prod.spline.design/YgWcITNUiSXJrljQ/scene.splinecode" />
      </div>
    </EarthWrapper>
  );
};

export default Earth;

const EarthWrapper = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin-top: 150px;
  position: relative;

  .ast1,
  .ast2 {
    position: absolute;
  }

  .ast1 {
    top: 20%;
  }
  .ast2 {
    right: 0;
    top: 30%;
  }

  .earth-content {
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 100%;

    .earth-title {
      border: 1px solid green;
      justify-content: center;
      place-items: center;
      color: #fff;
      font-family: Inter;
      font-style: normal;
      font-size: 50px;
      font-weight: 900;
      line-height: 50px; /* 95.667% */
      text-align: center;
    }

    .earth-description {
      color: white;
      font-size: 25px;
      font-family: Inter;
      font-style: normal;
      font-weight: 300;
      width: 40%;
      line-height: 50px; /* 95.667% */
      text-align: center;
      margin: 0 auto;
      margin-top: 20px;
    }

    .purple {
      color: #bda0ff;
    }

    .buttons {
      display: flex;
      justify-content: center;
      margin: 0px 30px;

      .getStarted {
        width: 350px;
        padding: 16px;
        border-radius: 8px;
        border: none;
        color: #030303;
        font-family: Inter;
        font-style: normal;
        font-size: 20px;
        font-weight: 600;
        line-height: 20px; /* 95.667% */
        text-align: center;
        background-color: white;
        margin: 0px 10px;
      }

      .login {
        width: 350px;
        padding: 16px;
        border-radius: 8px;
        border: 1px solid grey;
        color: #ffffff;
        font-family: Inter;
        font-style: normal;
        font-size: 20px;
        font-weight: 600;
        line-height: 20px; /* 95.667% */
        text-align: center;
        background-color: transparent;
      }
    }
  }

  .earthspace {
    width: 60%;
    border: 1px solid yellow;
    height: 600px;
  }

  @media screen and (max-width: 1000px) {
    .earthspace {
      display: none;
    }

    .earth-content {
      .earth-title {
        font-size: 40px;
      }

      .earth-description {
        font-size: 16px;
        width: 80%;
      }
    }
  }
`;
