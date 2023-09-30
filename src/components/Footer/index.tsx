import styled from "styled-components";
import { brand } from "../../constants/images";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-container">
        <div className="brand-footer-icon">
          <div className="brand-logo">{brand("120px")}</div>
          <div className="brand-name">Edujar</div>
        </div>

        <div className="footer-content">
          <div className="footer-description">
            Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>

          <div className="overall-wrapper">
            <div className="links-wrapper">
              <div className="quick-links">Quick Links</div>
              <div>About</div>
              <div>Course</div>
            </div>

            <div className="links-wrapper">
              <div className="contact-links">Contact us</div>
              <div>Contact</div>
              <div>Home</div>
            </div>
          </div>

          <div className="contact-wrapper">
            <div className="phone">
              <i
                className="fa-solid fa-phone"
                style={{ color: "#b0b0d1", marginRight: "10px" }}
              ></i>{" "}
              <p>(209) 555-0104</p>
            </div>
            <div className="email">
              <i
                className="fa-solid fa-envelope"
                style={{ color: "#b0b0d1", marginRight: "10px" }}
              ></i>
              <p>michelle.rivera@example.com</p>
            </div>
          </div>

          <div className="contact-wrapper">
            <div className="phone">
              <i
                className="fa-solid fa-location-dot"
                style={{ color: "#b0b0d1", marginRight: "10px" }}
              ></i>{" "}
              <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className="socialicons">
          <div className="copyright">Copyright 2023 | All Rights Reserved</div>

          <div>
            <i
              className="fa-brands fa-facebook"
              style={{ color: "#b0b0d1", marginRight: "10px" }}
            ></i>
            <i
              className="fa-brands fa-instagram"
              style={{ color: "#b0b0d1", marginRight: "10px" }}
            ></i>
            <i
              className="fa-brands fa-twitter"
              style={{ color: "#b0b0d1", marginRight: "10px" }}
            ></i>
            <i
              className="fa-brands fa-youtube"
              style={{ color: "#b0b0d1", marginRight: "10px" }}
            ></i>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid red;
  margin-top: 150px;
  background: #37265d;

  .footer-container {
    width: 100%;
    border: 1px solid red;

    .brand-footer-icon {
      width: 30%;
      height: 120px;
      display: flex;
      justify-content: start;
      align-items: center;

      .brand-logo {
        margin-top: 30px;
        margin-left: 60px;
      }

      .brand-name {
        color: #d9ecff;
        font-family: Caladea;
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px; /* 83.333% */
      }
    }

    .footer-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 10px 100px 10px 100px;

      .footer-description {
        width: 20%;
        color: #b0b0d1;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
        /* 155.556% */
      }

      .overall-wrapper {
        display: flex;

        .links-wrapper {
          color: #b0b0d1;
          font-family: Inter;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 28px;
          padding: 12px; /* 155.556% */
          text-align: center;

          .contact-links,
          .quick-links {
            margin-bottom: 20px;
            color: #fff;
            text-align: center;
            font-family: Caladea;
            font-size: 25px;
            font-style: normal;
            font-weight: 700;
            line-height: 24px; /* 96% */
            position: relative;
          }
        }
      }

      .contact-wrapper {
        .phone,
        .email {
          display: flex;
          color: #b0b0d1;
          font-family: Inter;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;

          padding: 12px;
        }
      }
    }

    .line {
      width: 90%;
      height: 2px;
      margin: auto;
      margin-top: 50px;
      background: rgba(218, 218, 247, 0.32);
    }

    .socialicons {
      display: flex;
      margin: 12px;
      justify-content: space-between;
      padding: 0px 80px;

      .copyright {
        color: #b0b0d1;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 155.556% */
      }
    }
  }

  @media screen and (max-width: 800px) {
    .footer-container {
      .brand-footer-icon {
        width: 100%;
        height: 120px;
        display: flex;
        justify-content: center;

        .brand-logo {
          margin-left: 0;
        }
      }

      .footer-content {
        padding: 13px;
        flex-flow: column;

        .footer-description {
          width: 100%;
          text-align: center;
        }

        .overall-wrapper {
          flex-flow: column;
        }

        .contact-wrapper {
          margin-top: 20px;
          justify-content: center;

          .phone,
          .email {
            justify-content: center;
            text-align: center;
          }
        }
      }

      .socialicons {
        flex-flow: column;
        justify-content: center;
      }
    }
  }
`;
