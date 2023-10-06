import { category1Icon, category2Icon } from "../../constants/images";
import CategoriesCard from "../CategoriesCard";
import CategoryWrapper from "./CategoriesWrapper";

const Category = () => {
  return (
    <CategoryWrapper>
      <div className="categories">
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
      </div>
    </CategoryWrapper>
  );
};

export default Category;
