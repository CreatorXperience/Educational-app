import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useSearchCourse from "./hooks/useFetchCourse";
import Card from "../../components/Card";
import { TDatabase } from "../../types/type";

const Courses = () => {
  const { term } = useParams();
  const [count, setCount] = useState(0);

  let { postSearchCourse, mutateCourse } = useSearchCourse();
  let datas = mutateCourse(term as string, count);

  // const { data } = useContext(DataProvider);

  // const filterData = () => {
  //   let pageContent = data?.filter((data) => {
  //     if (
  //       data.courseDescription
  //         .toLowerCase()
  //         .includes(term?.toLowerCase() as string)
  //     ) {
  //       return data;
  //     }
  //     return "";
  //   });

  //   return pageContent;
  // };

  const paginateData = () => {
    const pageContent = datas;
    let arr: TDatabase[] = [];

    for (let i = 0; i < count; i++) {
      if (pageContent && pageContent[i]) arr.push(pageContent[i]);
    }
    return arr;
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

      {/* <div className="courses-section" data-testid="card-wrapper">
         
            <div className="courses-inner">
             
              {datas &&  datas?.map((data, i) =>  <Card data={data} key={i} /> )}
            
            </div>
            
          </div>

          <div className="searches-container">
            <div className="search-wrapper">
              <h3 className="search-title">Searches related to {term}</h3>

              <div className="other-searches">
                <div className="search-item">
                  <p>nodejs</p>
                  <p>nodejs</p>
                  <p>
                    node.js para principiantes: establece tu servidor con http
                  </p>
                  <p>node.js backend básico con buenas prácticas.</p>
                </div>
                <div className="search-item">
                  <p>node.js backend basics with best practices</p>
                  <p>nodejs</p>
                  <p>
                    node.js: interceptando peticiones a un api con middlewares
                  </p>
                  <p>hello node kubernetes</p>
                </div>
              </div>
            </div>
          </div>

          
 */}

      {datas ? (
        <>
          <div className="courses-section" data-testid="card-wrapper">
            (
            <div className="courses-inner">
              {datas?.map((data, i) => {
                return <Card data={data} key={i} />;
              })}
            </div>
            )
          </div>

          <div className="searches-container">
            <div className="search-wrapper">
              <h3 className="search-title">Searches related to {term}</h3>

              <div className="other-searches">
                <div className="search-item">
                  <p>nodejs</p>
                  <p>nodejs</p>
                  <p>
                    node.js para principiantes: establece tu servidor con http
                  </p>
                  <p>node.js backend básico con buenas prácticas.</p>
                </div>
                <div className="search-item">
                  <p>node.js backend basics with best practices</p>
                  <p>nodejs</p>
                  <p>
                    node.js: interceptando peticiones a un api con middlewares
                  </p>
                  <p>hello node kubernetes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="btn-wrapper">
            <button
              onClick={() => {
                setCount((count) => count + 1);
              }}
            >
              Load More
            </button>
          </div>
        </>
      ) : (
        <div className="checkConnection">
          <p>oop's sorry, can't find "{term}"</p>
          <p>
            try sear ching for a more generic term e.g node, angular, javascript
          </p>
        </div>
      )}
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

  .checkConnection {
    width: 80%;
    height: 300px;
    margin: 0 auto;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p:first-child {
      font-size: 30px;
      font-family: Inter;
      color: white;
      font-weight: 800;
    }

    p:last-child {
      font-size: 12px;
      font-family: Inter;
      font-weight: 200;
      color: white;
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
      background: linear-gradient(94deg, #8c3cdd 4.68%, #5b57d6 98.4%);
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

    .checkConnection {
      p:first-child {
        font-size: 20px;
        font-family: Inter;
        color: white;
        font-weight: 800;
        text-align: center;
      }

      p:last-child {
        font-size: 12px;
        font-family: Inter;
        font-weight: 200;
        color: white;
        text-align: center;
      }
    }

    .courses-section {
      .courses-inner {
        width: 100%;
        grid-template-columns: auto;

        .card-container {
          height: 400px;
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
