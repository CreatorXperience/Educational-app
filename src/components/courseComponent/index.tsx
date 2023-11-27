import CourseWrapper from "./courseWrapper";

type TCourseProp = {
  img: string;
  title: string;
  content: string;
};

const CourseComponent = ({ img, title, content }: TCourseProp) => {
  return (
    <CourseWrapper>
      <div className="course-container">
        <div className="course-image">
          <img src={img} />
        </div>
        <div className="course-desc">
          <div className="course-title">{title}</div>
          <div className="course-content">
            {content.length > 35 ? content.slice(0, 35) + "....." : content}
          </div>
        </div>
      </div>
    </CourseWrapper>
  );
};

export default CourseComponent;
