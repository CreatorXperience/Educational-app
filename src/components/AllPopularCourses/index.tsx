import styled from "styled-components";
import { useState } from "react";
import Card from "../Card";

import useFetchData from "./hooks/useFetchCourseData";

const PopularCourse = () => {
  const [count] = useState<number>(0);
  const response = useFetchData(count);

  return (
    <CardWrapper>
      {response?.map((item, i) => {
        if (i < 8) return <Card key={item._id} data={item} />;
        return "";
      })}
    </CardWrapper>
  );
};

export default PopularCourse;

const CardWrapper = styled.div`
  width: 92%;
  border: 1px solid magenta;
  margin-top: 60px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  place-items: center;
  padding: 50px;
  padding-left: 80px;
  grid-gap: 20px;
  margin: auto;
  /* make this element fade in  */

  .card-container:hover {
    transform: scale(1.03);
    z-index: 100;

    .card-image {
      filter: blur(2px);
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    grid-template-columns: auto;
    padding: 0;
  }

  @media screen and (max-width: 800px) and (min-width: 500px) {
    padding: 12px;
    grid-template-columns: auto auto;
    place-items: center;
  }

  @media screen and (max-width: 1600px) and (min-width: 800px) {
    grid-template-columns: auto auto auto;
    padding: 0px;

    .card-container {
      .content-wrapper {
        .card-title {
          font-size: 20px;
          line-height: 30px;
          font-weight: 600;
        }
      }
    }
  }
`;
