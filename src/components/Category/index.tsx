import styled from "styled-components";
import {
  arrowUpRightIcon,
  category1Icon,
  category2Icon,
  designIcon,
} from "../../constants/images";
import CategoriesCard from "../CategoriesCard";

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

      <div className="categories-card">
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
      </div>
    </CategoryWrapper>
  );
};

export default Category;

const CategoryWrapper = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid red;

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

  .categories-card {
    width: 100%;
    height: 200px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    place-items: center;
    margin-top: 40px;

    .card {
      width: 60%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 15px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      height: 80px;
      padding: 12px;

      .card-title {
        color: #fff;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 100% */
      }

      .cardstaticIcon {
        button {
          border-radius: 5px;
          background: #7f56d9;
          padding: 5px;
          border: none;
        }
      }
    }
  }

  @media screen and (max-width: 1200px) and (min-width: 1000px) {
    .categories-card {
      grid-template-columns: auto auto auto;
      grid-gap: 20px;
    }
  }
  @media screen and (max-width: 900px) and (min-width: 600px) {
    .categories-card {
      grid-template-columns: auto auto;
      grid-gap: 20px;
    }
  }
  @media screen and (max-width: 600px) {
    .category-container {
      .rightSideIcon {
        display: none;
      }
      .leftSideIcon {
        display: none;
      }
      .category-title {
        font-size: 30px;
        line-height: 40px;

        .category {
          font-size: 30px;
        }
      }
    }
    .categories-card {
      grid-template-columns: auto;
      grid-gap: 20px;
    }
  }
`;
