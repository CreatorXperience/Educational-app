import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import getData from "../../services/getData";
import { TDatabase } from "../../types/type";
import Card from "../../components/Card";

const Courses = () => {
  const { term } = useParams();
  const [result, setResult] = useState<TDatabase[] | null | undefined>();

  useEffect(() => {
    getData(setResult, term as string);
  }, [term]);

  return (
    <CoursesWrapper>
      <h1>{term}</h1>
      <div className="courses-section">
        {result?.map((data) => {
          return <Card data={data} />;
        })}
      </div>
    </CoursesWrapper>
  );
};

export default Courses;

const CoursesWrapper = styled.div`
  .courses-section {
    width: 80%;
    display: flex;
  }
`;
