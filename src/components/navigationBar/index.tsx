import styled from "styled-components";
import { brand, navigationIcon } from "../../constants/images";

const NavigationBar = () => {
  return (
    <NavigationWrapper>
      <div className="navigationCircle">
        <div className="circle"></div>
        <div className="navbar-container">
          <div className="brand">
            <div className="brandLogo">
              {brand()}
              <div>Brand</div>
            </div>

            {navigationIcon()}
          </div>

          <ul className="navigation">
            <li className="lg">Home</li>
            <li className="lg">About</li>
            <li className="lg">Course</li>
            <li className="lg">Blog</li>
            <li className="lg">Contact</li>
            <li className="sm">
              <i className="fa-solid fa-bars" style={{ color: "white" }}></i>
            </li>
          </ul>
          <div className="buttons">
            <button className="loginBtn">Login</button>
            <button className="getStartedBtn">Get Started</button>
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default NavigationBar;

const NavigationWrapper = styled.div`
  width: 100%;
  height: auto;

  .navigationCircle {
    border: 1px solid red;
    height: 100px;
    position: relative;

    .circle {
      position: absolute;
      width: 30%;
      height: 226px;
      border-radius: 426px;
      background: rgba(61, 93, 255, 0.534);
      filter: blur(150px);
      border: 1px solid red;
    }

    .navbar-container {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;

      .brand {
        display: flex;
        border: 1px solid white;
        justify-content: space-between;
        width: 30%;
        color: #d9ecff;
        font-family: Caladea;
        font-size: 48px;
        font-style: normal;
        font-weight: 600;
        height: auto;

        .brandLogo {
          display: flex;
          width: 80%;
          height: 100%;
          border: 1px solid yellow;
          justify-content: center;
          align-items: center;

          .brandIdentity {
            margin-top: 40px;
          }
        }
      }

      .navigation {
        list-style-type: none;
        height: 100%;
        flex-shrink: 0;
        display: flex;
        width: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #ffffff;
        border: 1px solid yellow;

        li.sm {
          display: none;
        }

        li.lg,
        li.sm {
          margin: 12px;
          color: var(--gray-white, #fff);
          text-align: center;
          font-family: DM Sans;
          font-size: 100%;
          font-style: normal;
          font-weight: 500;
          line-height: 24px; /* 109.091% */
          cursor: pointer;
        }
      }

      .buttons {
        display: flex;
        justify-content: end;
        align-items: center;
        border: 1px solid green;
        width: 20%;
        margin-right: 30px;

        .loginBtn {
          display: flex;
          width: 50%;
          padding: 16px 28px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
          background-color: transparent;
          border: 1px solid #ffffff;
          border-radius: 30px;
          color: white;
          font-family: DM Sans;
          font-size: 18px;
          font-style: normal;
          font-weight: 200;
          line-height: 28px; /* 155.556% */
          margin-right: 10px;
          height: 63px;
          cursor: pointer;
        }

        .getStartedBtn {
          display: flex;
          width: 50%;
          font-family: DM Sans;
          padding: 16px 28px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 30px;
          background: #7f56d9;
          box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
          border: none;
          color: #fff;
          height: 63px;
          animation: 1s infinite ease-in-out;
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    .navigationCircle {
      .circle {
        display: none;
      }
      .navbar-container {
        .brand {
          font-size: 28px;
          width: 65%;
          justify-content: start;

          .brandLogo {
            justify-content: start;
          }
        }

        .navigation {
          width: 30%;
          justify-content: end;

          li.lg {
            display: none;
          }
          li.sm {
            display: block;
            margin-right: 20px;

            .fa-solid,
            .fa-bars {
              font-size: 24px;
            }
          }
        }

        .buttons {
          display: none;
        }
      }
    }
  }
`;
