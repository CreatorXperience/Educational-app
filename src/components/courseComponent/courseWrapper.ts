import styled from "styled-components";

const CourseWrapper = styled.div`
  margin-top: 10px;

  .course-container {
    width: 100%;
    height: 100px;
    border: 1px solid red;
    display: flex;

    .course-image {
      width: 35%;
      height: 100%;

      img {
        border-radius: 10px;
        width: 98.018px;
        height: 97px;
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
