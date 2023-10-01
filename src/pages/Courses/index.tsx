import { useParams } from "react-router-dom";
import styled from "styled-components";

const Courses = () => {
  const { term } = useParams();
  return (
    <CoursesWrapper>
      <h1>{term}</h1>
    </CoursesWrapper>
  );
};

export default Courses;

const CoursesWrapper = styled.div``;
