import styled from "styled-components";

const CourseWrapper = styled.div`
  margin-top: 10px;

  .course-container {
    width: 100%;
    height: 100px;
    border: 1px solid red;
    display: flex;
    overflow-y: hidden;

    .course-image {
      width: 25%;
      height: 100%;
      padding: 8px;

      img {
        border-radius: 10px;
        width: 90px;
        height: 90%;
      }
    }

    .course-desc {
      margin: 10px;

      .course-title {
        color: #fff;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding: 5px 0px;
      }

      .course-content {
        color: #bebebe;

        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
`;

export default CourseWrapper;
