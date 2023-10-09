type TCourse = {
  course: {
    title: string;
    content: string;
  }[];
};
const CourseBlock = ({ course }: TCourse) => {
  return (
    <div>
      <ul className="course-requirement">
        {course.map((item, index) => {
          return (
            <li>
              <span>{item.title}: </span>
              {item.content}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CourseBlock;
