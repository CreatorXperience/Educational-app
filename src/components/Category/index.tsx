import styled from "styled-components";
import { category1Icon, category2Icon } from "../../constants/images";

const Category = () => {
  return (
    <CategoryWrapper>
      <div className="category-container">
        <div className="rightSideIcon">{category1Icon()}</div>
        <h1 className="category-title">
          Most Popular <span className="category">Category</span>
        </h1>
        <div className="leftSideIcon">{category2Icon()}</div>
      </div>
    </CategoryWrapper>
  );
};

export default Category;

const CategoryWrapper = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid red;
  overflow: hidden;

  .category-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    position: relative;

    .rightSideIcon {
      position: absolute;
      top: 30px;
    }

    .category-title {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      font-family: Caladea;
      font-size: 60px;
      font-style: normal;
      font-weight: 700;
      line-height: 70px; /* 100% */
      letter-spacing: -0.5px;
      bottom: 0;

      .category {
        color: #bea0ff;
        font-family: Caladea;
        font-size: 60px;
        font-style: normal;
        font-weight: 700;
        line-height: 70px;
        letter-spacing: -0.5px;
      }
    }

    .leftSideIcon {
      position: absolute;
      right: 2px;
      top: -300px;
    }
  }
`;
