import { Link } from "react-router-dom";
import ExploreBtnWrapper from "./ExploreBtnWrapper";

const ExploreBtn = () => {
  return (
    <ExploreBtnWrapper>
      <div className="explore">
        <button>
          <Link to={"/allcourses"}> Explore all Courses </Link>
        </button>
      </div>
    </ExploreBtnWrapper>
  );
};

export default ExploreBtn;
