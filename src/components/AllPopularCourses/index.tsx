import styled from "styled-components";
import Card from "../Card";
import WireFrame from "../cardWireFrame/wireframe";
import { useContext } from "react";
import { DataProvider } from "../../context/DataProvider";

const PopularCourse = ({ isData }: { isData: boolean }) => {
  const { data } = useContext(DataProvider);
  return (
    <CardWrapper>
      {isData ? (
        <>
          {data?.map((item, i) => {
            if (i < 8) return <Card key={item.id} data={item} />;
          })}
        </>
      ) : (
        <>
          <WireFrame />
          <WireFrame />
          <WireFrame />
          <WireFrame />
        </>
      )}
    </CardWrapper>
  );
};

export default PopularCourse;

const CardWrapper = styled.div`
  width: 100%;
  border: 1px solid magenta;
  margin-top: 60px;
  columns: 4;
  column-gap: 1px;

  /* make this element fade in  */

  .card-container:hover {
    transform: scale(1.03);
    z-index: 100;

    .card-image {
      filter: blur(2px);
    }
  }

  @media screen and (max-width: 500px) {
    columns: 0;
    display: grid;
    place-items: center;

    .card-container {
      margin: 5px;
    }
  }

  @media screen and (max-width: 800px) and (min-width: 500px) {
    columns: 2;

    place-items: center;
  }

  @media screen and (max-width: 1200px) and (min-width: 800px) {
    columns: 3;

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
