import { Link } from "react-router-dom";
import ExploreBtnWrapper from "./ExploreBtnWrapper";

const ExploreBtn = () => {
  return (
    <ExploreBtnWrapper>
      <div className="explore">
        <Link to={"/allcourses"}>
          {" "}
          <button className="btn" type="button">
            <strong> EXPLORE</strong>

            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </button>{" "}
        </Link>
      </div>
    </ExploreBtnWrapper>
  );
};

export default ExploreBtn;
