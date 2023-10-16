import styled from "styled-components";

const CourseDescriptionWrapper = styled.div<{ img: string; isexpand: boolean }>`
  width: 100%;

  .content-wrapper {
    position: relative;
    width: 100%;

    .course-content {
      width: 100%;
      height: auto;
      background: linear-gradient(
        94deg,
        #62ace7 4.68%,
        #5641ce 29.09%,
        #9747dd 57.89%,
        #f7cfae 98.4%
      );
      display: flex;

      .content {
        width: 80%;
        padding-left: 200px;

        h1 {
          width: 50%;
          padding-top: 50px;
          font-size: 60px;
          font-family: Inter;
          color: white;
        }

        p {
          color: white;
          font-size: 20px;
          font-family: Inter;
          width: 60%;
          padding: 12px;
          font-weight: 300;
        }
      }

      .course-card {
        width: 25%;
        height: 900px;
        background: linear-gradient(180deg, #5841ce 0%, #2c1f6a 100%);
        display: flex;
        flex-flow: column;
        align-items: center;
        border: 1px;
        position: absolute;
        right: 200px;
        top: 100px;
        border-radius: 5px;
        filter: drop-shadow(-34px 53px 4px rgba(0, 0, 0, 0.1));
        color: white;

        .course-image {
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          width: 100%;
          height: 220px;
          background-image: url(${(props) => props.img});
          background-size: cover;
        }

        .course-desc {
          font-size: 20px;
          font-family: Inter;
          text-align: center;
          font-weight: 700;
          margin-top: 20px;
        }

        .start-btn {
          width: 90%;
          padding: 24px;
          border-radius: 35px;
          margin-top: 20px;
          border: none;
          background: linear-gradient(94deg, #8c3cdd 4.68%, #5b57d6 98.4%);
          font-size: 20px;
          color: white;
          font-weight: 700;
        }

        .line {
          width: 90%;
          height: 1px;
          background-color: lightgrey;
          margin-top: 50px;
        }

        .course-header {
          text-align: center;
          font-size: 22px;
          font-weight: 700;
          font-family: Inter;
          margin-top: 10px;
        }

        .course-package {
          padding: 0 40px;
          li {
            margin: 10px;
            font-size: 18px;
            font-family: Inter;
            font-weight: 200;
          }

          li::marker {
            color: #7f56d9;
          }
        }
      }
    }

    .course-nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 12px;
      background: linear-gradient(180deg, #3f205e, #340c58);
      color: white;
      height: 60px;

      .nav-content {
        display: flex;
        justify-content: space-between;
        width: 30%;
        margin-left: 200px;

        p {
          font-size: 18px;
          font-family: Inter;
        }
      }
    }

    .lightning {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .overview-wrapper {
      /* display: flex; */
      margin-left: 200px;
      .overview {
        width: 55%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .overview-header {
          text-align: center;
          color: white;
          font-size: 35px;
          font-family: Inter;
          line-height: 50px;
        }

        .content {
          color: white;
          font-size: 18px;
          font-family: Inter;
          font-weight: 600;
          line-height: 30px;
        }
      }

      .main-overview {
        width: 55%;
        height: ${(props) => (props.isexpand ? "1700px" : "520px")};
        background: linear-gradient(180deg, #2c1f4b, #2c1f4a);
        padding: 10px;
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        margin-top: 20px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

        color: white;

        .overlay {
          position: absolute;
          bottom: 0;
          width: 100%;

          button {
            width: 200px;
            padding: 10px;
            border: 2px solid white;
            margin: 10px;
            font-family: Inter;
            font-size: 16px;
            background-color: transparent;
            border-radius: 20px;
            color: white;
            position: ${(props) => (props.isexpand ? "relative" : "absolute")};
            top: ${(props) => (props.isexpand ? "5px" : "20px")};
            left: 50%;
            transform: translateX(-60%);
            z-index: 8;
            background: linear-gradient(94deg, #8c3cdd 4.68%, #5b57d6 98.4%);
          }

          .caret {
            font-size: 30px;
            width: 100%;
            height: 80px;

            filter: brightness(100px);
            display: ${(props) => (props.isexpand ? "none" : "block")};
            z-index: 5;
          }
        }

        .title {
          text-align: center;
          font-family: Inter;
          font-size: 20px;
          font-weight: 700;
          padding: 12px;
          color: white;
        }

        .greeting {
          font-size: 16px;
          font-family: Inter;
          font-weight: 200;
          padding: 12px;
        }

        .obj-title {
          font-family: Inter;
          font-size: 20px;
          font-weight: 700;
          padding: 12px;
          color: white;
          margin-top: 20px;
        }

        .obj-desc {
          font-size: 16px;
          font-family: Inter;
          font-weight: 200;
          padding: 12px;
        }

        .course-requirement {
          font-size: 16px;
          font-family: Inter;
          font-weight: 200;
          padding: 12px;

          li {
            margin: 20px 10px;

            span {
              font-weight: 700;
              color: white;
            }
          }

          li::marker {
            color: #7f56d9;
          }
        }
      }

      .start-card {
        width: 40%;
        height: auto;
        background-color: white;
        margin-top: 30px;
        border-radius: 20px;
        display: flex;
        flex-flow: column;
        padding: 20px;

        h2 {
          font-size: 25px;
          font-family: Inter;
          font-weight: 700;
          padding: 12px;
        }

        p {
          font-size: 16px;
          font-family: Inter;
          font-weight: 200;
          line-height: 25px;
          padding: 12px;
        }

        button {
          width: 40%;
          padding: 15px;
          border-radius: 35px;
          border: none;
          background: linear-gradient(94deg, #8c3cdd 4.68%, #5b57d6 98.4%);
          font-size: 14px;
          font-family: Inter;
          color: white;
          margin-top: 20px;
        }
      }

      .accordion-container {
        margin-top: 20px;

        h1 {
          color: white;
          font-family: DM sans;
        }
      }
    }

    .instructor-section {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      background: #37265d;
      margin-top: 100px;

      .instructor-container {
        width: 30%;
        height: 550px;
        border: 1px solid white;
        position: relative;
        margin-top: 50px;

        .instructors-image {
          background-image: url(${(props) => props.img});

          width: 120px;
          height: 120px;
          border-radius: 50%;
          background-size: cover;
          position: absolute;
          top: -20px;
          z-index: 9;
          left: 50px;
          border: 2px solid white;
        }

        .instructor-wrapper {
          background-color: white;
          border-radius: 30px;
          position: absolute;
          top: 40px;
          z-index: 2;
          padding: 80px;
          height: 500px;

          .instructors-name {
            color: #7f56d9;
            font-family: Inter;
          }

          .instructors-handle {
            width: 70%;
            display: flex;
            justify-content: space-between;
            color: #7f56d9;
            margin-top: 25px;
          }

          .instructors-handle i {
            font-size: 25px;
            border: 1px solid #7f56d9;
            padding: 12px;
            border-radius: 50%;
            cursor: pointer;
            transition: transform 0.2s ease-in-out;
          }

          .instructors-handle i:hover {
            transform: scale(1.2);
          }

          .small {
            font-size: 25px;
            font-weight: 500;
            margin-top: 20px;
          }

          .instructors-description,
          .instructors-post {
            font-family: Inter;
            font-weight: 300;
            font-size: 18px;
            color: gray;
            margin-top: 20px;
            line-height: 28px;
          }

          .instructors-post {
            font-weight: 500;
            line-height: 5px;
          }
        }
      }

      .instructor-header {
        font-size: 40px;
        font-family: Inter;
        font-weight: 700;
        text-align: center;
        color: white;
        margin-top: 80px;
      }

      .instructor-content {
        font-size: 18px;
        font-family: Inter;
        font-weight: 400;
        color: white;
        padding: 12px;
        text-align: center;
        width: 50%;
        margin: 0 auto;
      }
    }
  }

  @media screen and (max-width: 800px) {
    .content-wrapper {
      .course-content {
        width: 100%;
        height: auto;
        background: transparent;
        flex-flow: column;
        align-items: center;
        border: 2px solid red;

        .content {
          width: 100%;
          border: 2px solid green;
          padding: 12px;
          background: linear-gradient(94deg, #62ace7 4.68%, #5641ce 29.09%);

          h1 {
            width: 100%;
            font-size: 40px;

            text-align: center;
          }

          p {
            font-size: 18px;
            font-family: Inter;
            width: 100%;
            text-align: center;
          }
        }

        .course-card {
          width: 90%;
          border: 2px solid blue;
          right: auto;
          position: relative;
          top: auto;
        }
      }

      .course-nav {
        height: 120px;

        .nav-content {
          flex-flow: column;
          align-items: center;
          width: 100%;
          margin-left: 0;
          padding: 12px;

          p {
            font-size: 18px;

            margin: 8px;
          }
        }
      }

      .overview-wrapper {
        display: flex;
        flex-flow: column;
        width: 100%;
        margin-left: 0px;

        .overview {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .overview-header {
            text-align: center;
            font-size: 30px;
          }

          .content {
            font-size: 16px;
            font-weight: 500;
            padding: 12px;
            text-align: center;
          }
        }

        .main-overview {
          width: 90%;
          height: ${(props) => (props.isexpand ? "3000px" : "520px")};
          background-color: white;
          padding: 10px;
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          margin-top: 20px;
          margin: 0 auto;
        }

        .start-card {
          width: 90%;
          background-color: white;
          margin: 0 auto;
          margin-top: 20px;

          button {
            width: 80%;
            top: ${(props) => (props.isexpand ? "5px" : "20px")};
          }
        }
      }

      .instructor-section {
        width: 100%;
        .instructor-container {
          width: 100%;
          height: 720px;
          display: flex;
          justify-content: center;

          .instructors-image {
            background-image: url(${(props) => props.img});
          }

          .instructor-wrapper {
            background-color: white;
            border-radius: 30px;
            position: absolute;
            top: 40px;
            z-index: 2;
            padding: 80px 30px;
            height: auto;
            width: 90%;
            margin: 0 auto;

            .instructors-name {
              color: #7f56d9;
              font-family: Inter;
              font-size: 20px;
            }

            .instructors-handle {
              width: 70%;
              display: flex;
              justify-content: space-between;
              color: #7f56d9;
              margin-top: 25px;
            }

            .instructors-handle i {
              font-size: 18px;
              border: 1px solid #7f56d9;
              padding: 12px;
              border-radius: 50%;
              cursor: pointer;
              transition: transform 0.2s ease-in-out;
            }

            .instructors-handle i:hover {
              transform: scale(1.2);
            }

            .small {
              font-size: 25px;
              font-weight: 500;
              margin-top: 20px;
            }

            .instructors-description,
            .instructors-post {
              font-family: Inter;
              font-weight: 300;
              font-size: 18px;
              color: gray;
              margin-top: 20px;
            }

            .instructors-post {
              font-weight: 500;
              line-height: 5px;
              line-height: 30px;
            }
          }
        }

        .instructor-header {
          font-size: 25px;
          font-family: Inter;
          font-weight: 700;
          text-align: center;
          color: white;
          margin-top: 80px;
        }

        .instructor-content {
          font-size: 16px;
          font-family: Inter;
          font-weight: 200;

          color: white;
          padding: 12px;
          text-align: center;
          width: 90%;
          margin: 0 auto;
        }
      }
    }
  }

  @media screen and (max-width: 1500px) and (min-width: 800px) {
    .content-wrapper {
      .course-content {
        display: flex;

        .content {
          width: 80%;
          padding-left: 0;
          height: 400px;
          border: 3px solid green;
          padding: 20px;
          display: flex;
          flex-flow: column;
          justify-content: center;

          h1 {
            width: 50%;
            padding-top: 0px;
            font-size: 30px;
            font-family: Inter;
          }

          p {
            font-size: 20px;
            font-family: Inter;
            width: 60%;
            padding: 12px;
          }
        }

        .course-card {
          margin-top: 20px;
          width: 40%;
          height: 800px;
          background-color: white;
          display: flex;
          flex-flow: column;
          align-items: center;
          border: 1px;
          position: absolute;
          right: 10px;
          top: 0px;
          border-radius: 5px;
          z-index: 0;

          .course-desc {
            font-size: 18px;
          }

          .start-btn {
            width: 70%;
            font-size: 18px;
          }
        }
      }

      .course-nav {
        height: 100px;

        .nav-content {
          flex-flow: row;
          align-items: center;
          justify-content: start;
          width: 100%;
          margin-left: 0;
          padding: 12px;

          p {
            font-size: 18px;

            margin: 8px;
          }
        }
      }

      .overview-wrapper {
        display: flex;
        flex-flow: column;
        width: 100%;
        margin-left: 0px;

        .overview {
          width: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .overview-header {
            text-align: center;
            font-size: 30px;
          }

          .content {
            font-size: 16px;
            font-weight: 500;
            padding: 12px;
            text-align: center;
          }
        }

        .main-overview {
          width: 80%;
          height: ${(props) => (props.isexpand ? "2000px" : "520px")};
          background-color: white;
          padding: 10px;
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          margin: 0 auto;
          z-index: 1;
        }

        .start-card {
          width: 90%;
          background-color: white;
          margin: 0 auto;
          margin-top: 20px;

          button {
            width: 40%;
          }
        }
      }

      .instructor-section {
        width: 100%;
        .instructor-container {
          width: 100%;
          height: 720px;
          display: flex;
          justify-content: center;

          .instructors-image {
            background-image: url(${(props) => props.img});
          }

          .instructor-wrapper {
            background-color: white;
            border-radius: 30px;
            position: absolute;
            top: 40px;
            z-index: 2;
            padding: 80px 30px;
            height: auto;
            width: 90%;
            margin: 0 auto;

            .instructors-name {
              color: #7f56d9;
              font-family: Inter;
              font-size: 20px;
            }

            .instructors-handle {
              width: 70%;
              display: flex;
              justify-content: space-between;
              color: #7f56d9;
              margin-top: 25px;
            }

            .instructors-handle i {
              font-size: 18px;
              border: 1px solid #7f56d9;
              padding: 12px;
              border-radius: 50%;
              cursor: pointer;
              transition: transform 0.2s ease-in-out;
            }

            .instructors-handle i:hover {
              transform: scale(1.2);
            }

            .small {
              font-size: 25px;
              font-weight: 500;
              margin-top: 20px;
            }

            .instructors-description,
            .instructors-post {
              font-family: Inter;
              font-weight: 300;
              font-size: 18px;
              color: gray;
              margin-top: 20px;
            }

            .instructors-post {
              font-weight: 500;
              line-height: 5px;
              line-height: 30px;
            }
          }
        }

        .instructor-header {
          font-size: 25px;
          font-family: Inter;
          font-weight: 700;
          text-align: center;
          color: white;
          margin-top: 80px;
        }

        .instructor-content {
          font-size: 16px;
          font-family: Inter;
          font-weight: 200;

          color: white;
          padding: 12px;
          text-align: center;
          width: 90%;
          margin: 0 auto;
        }
      }
    }
  }
`;

export default CourseDescriptionWrapper;
