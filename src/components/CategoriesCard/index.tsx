import { arrowUpRightIcon, designIcon } from "../../constants/images";

const CategoriesCard = () => {
  return (
    <div className="card">
      <div className="card-icon">{designIcon()}</div>
      <div className="card-title">Design</div>
      <div className="cardstaticIcon">
        <button>{arrowUpRightIcon()}</button>
      </div>
    </div>
  );
};

export default CategoriesCard;
