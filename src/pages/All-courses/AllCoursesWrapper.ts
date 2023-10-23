import styled from "styled-components";

const AllCoursesWrapper = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid red;

  .all-courses-container {
    width: 70%;
    border: 1px solid white;
    height: auto;
    margin: 0 auto;

    .header-section {
      .course-header {
        font-size: 60px;
        color: white;
        font-family: DM sans;
        font-weight: 600;
        margin-bottom: 20px;
      }

      p {
        color: white;
        font-family: DM sans;
        font-weight: 100;
        font-size: 18px;
        width: 60%;
      }

      h3 {
        color: white;
        font-family: DM sans;
        font-weight: 600;
        font-size: 20px;
        width: 60%;
        margin-top: 20px;
      }
    }

    .course-packet {
      width: 100%;
      display: flex;
      justify-content: space-between;
      place-items: center;
      margin-top: 50px;

      .packet-card {
        width: 30%;
        height: 180px;
        background: #37265d;
        padding: 12px;
        display: flex;
        justify-content: center;
        flex-flow: column;
        align-items: center;

        h1 {
          color: white;
          font-family: Inter;
          font-size: 30px;
        }

        p {
          font-family: Inter;
          font-weight: 400;
          color: white;
        }
      }
    }

    .explore-courses-wrapper {
      width: 100%;
      border: 1px solid red;
      height: 300px;
      position: relative;
      display: flex;
      justify-content: center;

      h1 {
        position: absolute;
        top: 18px;
        z-index: 20;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        background-color: #2c1f4a;
        padding: 12px;
        font-family: Inter;
      }
      .explore-container {
        width: 100%;
        height: 200px;
        border: 1px solid gray;
        top: 50px;
        position: absolute;
        z-index: 0;
        padding-top: 50px;
        border-radius: 15px;

        .upper-btn {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

          margin-top: 10px;

          button {
            padding: 12px;
            border-radius: 30px;
            font-family: Inter;
            font-size: 14px;
            border: 3px solid #7f56d9;
            background: transparent;
            color: white;
            cursor: pointer;
            margin: 2px;
            width: 100%;
          }

          button:hover {
            background: #7f56d94d;
            border: 3px solid white;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .all-courses-container {
      width: 100%;

      .header-section {
        .course-header {
          font-size: 40px;
          padding: 12px;
        }
        h3 {
          font-size: 16px;
          width: 100%;
          padding: 12px;
        }
        p {
          font-size: 14px;
          width: 100%;
          padding: 12px;
        }
      }

      .course-packet {
        justify-content: space-around;
        .packet-card {
          height: 120px;

          h1 {
            font-size: 18px;
          }

          p {
            font-size: 12px;
          }
        }
      }
      .explore-courses-wrapper {
        width: 100%;
        border: 1px solid red;
        height: 800px;

        h1 {
          position: absolute;
          top: 18px;
          z-index: 20;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          background-color: #2c1f4a;
          padding: 12px;
          font-family: Inter;
        }
        .explore-container {
          width: 80%;
          height: auto;
          top: 50px;
          padding-top: 50px;
          margin: 0 auto;

          .upper-btn {
            margin-top: 80px;
            place-items: center;

            button {
              width: 80%;
            }

            button:hover {
              background: #7f56d94d;
              border: 3px solid white;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1400px) and (min-width: 768px) {
    .all-courses-container {
      width: 100%;
      height: 100%;

      .explore-courses-wrapper {
        width: 100%;
        border: 1px solid red;
        height: 600px;
        position: relative;

        h1 {
          position: absolute;
          top: 18px;
          z-index: 20;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          background-color: #2c1f4a;
          padding: 12px;
          font-family: Inter;
        }
        .explore-container {
          width: 80%;
          height: 400px;
          top: 50px;
          padding-top: 50px;

          .upper-btn {
            margin-top: 80px;
            place-items: center;

            button {
              width: 80%;
            }

            button:hover {
              background: #7f56d94d;
              border: 3px solid white;
            }
          }
        }
      }
    }
  }
`;

export default AllCoursesWrapper;
