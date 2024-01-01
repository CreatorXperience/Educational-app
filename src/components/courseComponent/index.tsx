import { TDatabase } from "../../types/type";
import CourseWrapper from "./courseWrapper";

type TCourseProp = {
  data: TDatabase;
  setVideoId: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const CourseComponent = ({ data, setVideoId }: TCourseProp) => {
  const handleClick = () => {
    setVideoId(data._id);
  };
  return (
    <CourseWrapper>
      <div className="course-container" onClick={() => handleClick()}>
        <div className="course-image">
          <img alt="course" src={data.coverImage} />
        </div>
        <div className="course-desc">
          <div className="course-title">{data.coverTitle}</div>
          <div className="course-content">
            {data.courseDescription.length > 35
              ? data.courseDescription.slice(0, 35) + "....."
              : data.courseDescription}
          </div>
        </div>
      </div>
    </CourseWrapper>
  );
};

export default CourseComponent;
