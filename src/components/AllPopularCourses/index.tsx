import styled from "styled-components";
import Card from "../Card";
import WireFrame from "../cardWireFrame/wireframe";

const PopularCourse = ({ isData }: { isData: boolean }) => {
  return (
    <CardWrapper>
      {isData ? (
        <>
          {" "}
          <Card images="https://i.pinimg.com/564x/46/a3/e3/46a3e3ddbdade37866e3aaf24a04bbe6.jpg" />
          <Card images="https://i.pinimg.com/564x/25/1a/4e/251a4eb0debab79925b3e2ef4f87557d.jpg" />
          <Card images="https://i.pinimg.com/564x/6b/b9/17/6bb9177f1f2075cab554dbb6276f3732.jpg" />
          <Card images="https://i.pinimg.com/564x/6b/b9/17/6bb9177f1f2075cab554dbb6276f3732.jpg" />{" "}
        </>
      ) : (
        <>
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
  display: grid;
  grid-template-columns: auto auto auto;
  place-items: center;
  margin-top: 20px;
  grid-row-gap: 20px;

  .card-container {
    width: 60%;
    height: 500px;

    border-radius: 30px;
    /* border: 2px solid rgba(255, 255, 255, 0.20); */
    background: #381d74;

    .card-image {
      width: 100%;
      height: 40%;
      overflow: hidden;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
    }

    .content-wrapper {
      width: 100%;
      height: auto;
      margin-top: 10px;

      .card-content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 5px 10px;

        .card-category {
          border-radius: 17.5px;
          background: rgba(218, 218, 247, 0.22);
          color: #d9ecff;
          font-family: DM sans;
          font-size: 12px;
          font-style: normal;
          font-weight: 300;
          line-height: 18px; /* 112.5% */
          padding: 3px 10px;
          border: none;
        }

        .lessons {
          color: #d9ecff;
          font-family: DM sans;
          font-size: 12px;
          font-style: normal;
          font-weight: 300;
          line-height: 18px; /* 112.5% */
          padding: 3px 10px;
          border: none;
        }
      }

      .card-title {
        color: #d9ecff;
        font-family: Inter;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px; /* 133.333% */
        margin-left: 10px;
        border-bottom: 1px solid rgba(218, 218, 247, 0.32);
      }

      .author-section {
        width: 100%;

        .author-info {
          margin: 15px 3px;
          display: flex;
          width: 100%;

          img {
            width: 33px;
            height: 33px;
            margin: 2px 10px;
            border-radius: 43px;
          }

          .author-name {
            width: 50%;
            .name {
              color: #d9ecff;
              font-family: Inter;
              font-size: 17px;
              font-style: normal;
              font-weight: 600;
              line-height: 18px;
            }

            .status {
              color: #d9ecff;
              font-family: Inter;
              font-size: 14px;
              font-style: normal;
              font-weight: 300;
              line-height: 18px; /* 128.571% */
            }
          }

          .other-info {
            display: flex;
            justify-content: center;
            align-items: center;
            border-left: 1px solid rgba(218, 218, 247, 0.32);
            color: #d9ecff;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 18px;
            padding: 10px;
            /* TODO: DO this  */
            /* border-bottom: 1px solid rgba(218, 218, 247, 0.32); */
          }
        }
      }
    }
  }
`;
