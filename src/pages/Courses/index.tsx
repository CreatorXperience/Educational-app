import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/Card";
import { DataProvider } from "../../context/DataProvider";

const Courses = () => {
  const { term } = useParams();
  const { data } = useContext(DataProvider);
  const [count, setCount] = useState(2);

  const filterData = () => {
    let pageContent = data?.filter((data) => {
      if (
        data.courseDescription
          .toLowerCase()
          .includes(term?.toLowerCase() as string)
      ) {
        return data;
      }
      return "";
    });

    return pageContent;
  };

  const paginateData = () => {
    const pageContent = filterData();
    if (pageContent) {
      let arr = [];
      for (let i = 0; i < count; i++) {
        arr.push(pageContent[i]);
      }
      return arr;
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
          {paginateData()?.map((data) => {
            return <Card data={data} key={data.id} />;
          })}
        </div>
      </div>

      <div className="btn-wrapper">
        <button
          onClick={() => {
            if (
              paginateData() &&
              paginateData()?.length !== filterData()?.length
            ) {
              setCount((count) => count + 2);
            }
          }}
        >
          Load More
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
      width: 200px;
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

  @media screen and (max-width: 1400px) and (min-width: 500px) {
    .courses-section {
      .courses-inner {
        width: 80%;
        grid-template-columns: auto auto;

        .card-container {
          height: 500px;
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    .top-section {
      flex-direction: column;

      .inner-section {
        flex-direction: column;
        justify-content: center;

        .search-term {
          font-size: 20px;
        }
      }
    }

    .courses-section {
      .courses-inner {
        width: 100%;
        grid-template-columns: auto;

        .card-container {
          height: 500px;
        }
      }
    }

    .searches-container {
      .search-wrapper {
        width: 80%;

        .other-searches {
          display: flex;
          flex-flow: column;
        }
      }
    }
  }
`;
