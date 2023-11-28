import styled from "styled-components";

const FooterWrapper = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid red;
  margin-top: 150px;
  background: #37265d;
  position: absolute;

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
export default FooterWrapper;
