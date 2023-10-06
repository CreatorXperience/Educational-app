import type { TData } from "./types/TData";
import calculatePoints from "../../utils/calculatePoints";
import CardWrapper from "./CardWrapper";

const Card = ({ data }: TData) => {
  return (
    <CardWrapper>
      <div className="card-container">
        <div className="card-image">
          <img src={data.coverImage} alt="content" width="100%" />
        </div>

        <div className="content-wrapper">
          <div className="card-content">
            <div className="lessons">
              <button className="card-category">
                {" "}
                <i
                  className="fa-solid fa-video"
                  style={{ color: "white" }}
                ></i>{" "}
                Lessons
              </button>
            </div>
            <button className="card-category">{data.category}</button>
          </div>
          <h1 className="card-title">{data.coverTitle}</h1>
          <div className="author-section">
            <div className="author-info">
              <img
                src="https://i.pinimg.com/564x/df/b5/8f/dfb58f22345eec8d5c0ae50aecf32e67.jpg"
                alt="profile"
              />

              <div className="author-name">
                <p className="name">{data.author.name}</p>
                <p className="status">Python Developer</p>
              </div>

              <div className="other-info">50+ Student</div>
            </div>
          </div>
          <div className="bottom-section">
            <p className="stars">{calculatePoints(data.stars)}</p>
            <p>Enroll Now</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card;
