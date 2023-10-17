import styled from "styled-components";

const CardWrapper = styled.div<{ img: string }>`
  .card-container {
    height: 450px;
    transition: transform 0.2s ease-in-out;
    border-radius: 30px;
    cursor: pointer;
    border: 2px groove rgba(255, 255, 255, 0.1);
    background: #381d74;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
    width: 100%;

    /* margin: 0 auto; */

    .card-image {
      width: 100%;
      height: 40%;
      overflow: hidden;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      filter: brightness(90%);
      background-image: url("${(props) => props.img}");
      background-size: cover;
    }

    .content-wrapper {
      width: 100%;
      height: auto;
      margin-top: 10px;

      .card-content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 5px 10px;

        .card-category {
          border-radius: 17.5px;
          background: rgba(218, 218, 247, 0.22);
          color: #d9ecff;
          font-family: DM sans;
          font-size: 12px;
          font-style: normal;
          font-weight: 300;
          line-height: 18px; /* 112.5% */
          padding: 3px 10px;
          border: none;
        }

        .lessons {
          color: #d9ecff;
          font-family: DM sans;
          font-size: 12px;
          font-style: normal;
          font-weight: 300;
          line-height: 18px; /* 112.5% */
          padding: 3px 10px;
          border: none;
        }
      }

      .card-title {
        color: #d9ecff;
        font-family: Inter;
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px; /* 133.333% */
        padding-left: 20px;
        border-bottom: 1px solid rgba(218, 218, 247, 0.32);
        width: 100%;
        border: 1px solid red;
      }

      .author-section {
        width: 100%;

        .author-info {
          margin: 15px 3px;
          display: flex;
          width: 100%;

          img {
            width: 33px;
            height: 33px;
            margin: 2px 10px;
            border-radius: 43px;
          }

          .author-name {
            width: 50%;
            .name {
              color: #d9ecff;
              font-family: Inter;
              font-size: 17px;
              font-style: normal;
              font-weight: 600;
              line-height: 18px;
            }

            .status {
              color: #d9ecff;
              font-family: Inter;
              font-size: 14px;
              font-style: normal;
              font-weight: 300;
              line-height: 18px; /* 128.571% */
            }
          }

          .other-info {
            display: flex;
            justify-content: center;
            align-items: center;
            border-left: 1px solid rgba(218, 218, 247, 0.32);
            color: #d9ecff;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 18px;
            padding: 10px;
            /* TODO: DO this  */
            /* border-bottom: 1px solid rgba(218, 218, 247, 0.32); */
          }
        }
      }

      .bottom-section {
        display: flex;
        justify-content: space-between;
        width: 96%;
        color: #d9ecff;
        font-family: Inter;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px; /* 112.5% */
        text-decoration-line: underline;
        padding: 12px;
      }
    }
  }

  .card-container:hover {
    transform: scale(1.03);
    z-index: 100;

    .card-image {
      filter: blur(2px);
    }
  }

  @media screen and (max-width: 1200px) and (min-width: 800px) {
    .card-container {
      width: 98%;

      .card-image {
        height: 25%;
      }

      .content-wrapper {
        .card-title {
          font-size: 20px;
          line-height: 30px;
          font-weight: 600;
        }
      }
    }
  }

  @media screen and (max-width: 800px) and (min-width: 500px) {
    .card-container {
      width: 100%;

      .card-image {
        height: 28%;
      }

      .content-wrapper {
        .card-title {
          font-size: 20px;
          line-height: 30px;
          font-weight: 600;
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    .card-container {
      margin: 10px 40px;
      width: 80%;
      height: 370px;

      .card-image {
        height: 28%;
      }

      .content-wrapper {
        .card-title {
          font-size: 20px;
          line-height: 30px;
          font-weight: 600;
        }
      }
    }
  }
`;

export default CardWrapper;
