import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import getData from "../../services/getData";
import { TDatabase } from "../../types/type";
import Card from "../../components/Card";
import { DataProvider } from "../../context/DataProvider";

const Courses = () => {
  const { term } = useParams();
  const [result, setResult] = useState<TDatabase[] | null | undefined>();

  const { data } = useContext(DataProvider);

  const filterData = () => {
    console.log(data);
    let pageContent = data?.filter((data) => {
      if (data.courseDescription.toLowerCase().includes(term as string)) {
        console.log(data);
        return data;
      }
    });

    console.log(pageContent);

    return pageContent;
  };
  return (
    <CoursesWrapper>
      <div className="top-section">
        <div className="inner-section">
          <div className="search-term"> Search term: "{term}" </div>
        </div>
      </div>
      <div className="courses-section">
        <div className="courses-inner">
          {filterData()?.map((data) => {
            return <Card data={data} key={data.id} />;
          })}
        </div>
      </div>
    </CoursesWrapper>
  );
};

export default Courses;

const CoursesWrapper = styled.div`
  .top-section {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid red;
    background: linear-gradient(to right, #372066, #37265d);

    .inner-section {
      width: 80%;
      height: 200px;
      display: flex;
      align-items: center;

      .search-term {
        color: #ffffff;
        font-family: Inter;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px;
      }
    }
  }
  .courses-section {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #37265d;
    .courses-inner {
      width: 80%;
      border: 1px solid white;
      display: grid;
      grid-template-columns: auto auto auto auto;
    }
  }
`;
