import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/Card";
import { DataProvider } from "../../context/DataProvider";
import Footer from "../../components/Footer";
import { TDatabase } from "../../types/type";
import { JsxElement } from "typescript";

const Courses = () => {
  const { term } = useParams();
  const [count, setCount] = useState<number>(4);
  const [initialCount, setInitialCount] = useState<number>(0);
  const [tempCount, setTempCount] = useState<number>(2);
  const { data } = useContext(DataProvider);
  const [pageContent, setPageContent] = useState<TDatabase[] | undefined>();

  const filterData = () => {
    let pageContent = data?.filter((data) => {
      if (
        data.courseDescription
          .toLowerCase()
          .includes(term?.toLowerCase() as string)
      ) {
        return data;
      }
    });

    setPageContent(pageContent);
  };

  useEffect(() => {
    filterData();
  });

  const paginateData = () => {
    if (pageContent) {
      let paginate = [];
      for (let i = initialCount; i < tempCount; i++) {
        paginate.push(pageContent[i]);
      }
      return paginate;
    }
  };
  return (
    <CoursesWrapper>
      <div className="top-section">
        <div className="inner-section">
          <div className="search-term"> Search term: "{term}" </div>
          <div className="search-term">
            Explore 100% online Courses on Agile
          </div>
        </div>
      </div>
      <div className="courses-section">
        <div className="courses-inner">
          {paginateData()?.map((data, index) => {
            return <Card data={data} key={data.id} />;
          })}
        </div>
      </div>

      <div className="btn-wrapper">
        <button
          onClick={() => {
            if (pageContent && tempCount !== 2) {
              setTempCount((count) => count - 2);
              setInitialCount((count) => count - 2);
            }
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            if (pageContent && tempCount !== pageContent?.length) {
              setTempCount((count) => count + 2);
              setInitialCount((count) => count + 2);
            }
          }}
        >
          2
        </button>
      </div>

      <div className="searches-container">
        <div className="search-wrapper">
          <h3 className="search-title">Searches related to {term}</h3>

          <div className="other-searches">
            <div className="search-item">
              <p>nodejs</p>
              <p>nodejs</p>
              <p>node.js para principiantes: establece tu servidor con http</p>
              <p>node.js backend básico con buenas prácticas.</p>
            </div>
            <div className="search-item">
              <p>node.js backend basics with best practices</p>
              <p>nodejs</p>
              <p>node.js: interceptando peticiones a un api con middlewares</p>
              <p>hello node kubernetes</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
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
    background-color: #37265d;

    .inner-section {
      width: 60%;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: space-between;

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

    .courses-inner {
      width: 60%;
      border: 1px solid white;
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 10px;
      margin-top: 50px;

      .card-container {
        height: 500px;
      }
    }
  }

  .btn-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;

    button {
      width: 50px;
      padding: 12px;
      border-radius: 6px;
      background-color: #7f56d9;
      color: white;
      border: none;
      font-family: DM sans;
      font-size: 18px;
      margin: 12px;
    }
  }

  .searches-container {
    width: 100%;
    display: flex;
    justify-content: center;
    height: auto;
    padding: 12px;

    .search-wrapper {
      width: 60%;

      .search-title {
        color: #ffffff;
        font-family: Inter;
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: 40px;
      }

      .other-searches {
        display: flex;
        justify-content: space-between;

        .search-item {
          color: #2c8fff;
          font-family: Inter;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 40px;
        }
      }
    }
  }
`;
