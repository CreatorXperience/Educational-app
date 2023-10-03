import styled from "styled-components";

export type TData = {
  data: {
    author: {
      name: string;
      post: string;
    };
    category: string;
    courseContent: {};
    courseDescription: string;
    coverImage: string;
    coverTitle: string;
    id: number;
    stars: number;
  };
};
const Card = ({ data }: TData) => {
  return (
    <CardWrapper>
      <div className="card-container">
        <div className="card-image">
          <img src={data.coverImage} alt="content-image" width="100%" />
        </div>

        <div className="content-wrapper">
          <div className="card-content">
            <div className="lessons">
              <button className="card-category">
                {" "}
                <i
                  className="fa-solid fa-video"
                  style={{ color: "white" }}
                ></i>{" "}
                Lessons
              </button>
            </div>
            <button className="card-category">{data.category}</button>
          </div>
          <h1 className="card-title">{data.coverTitle}</h1>
          <div className="author-section">
            <div className="author-info">
              <img src="https://i.pinimg.com/564x/df/b5/8f/dfb58f22345eec8d5c0ae50aecf32e67.jpg" />

              <div className="author-name">
                <p className="name">{data.author.name}</p>
                <p className="status">Python Developer</p>
              </div>

              <div className="other-info">50+ Student</div>
            </div>
          </div>
          <div className="bottom-section">
            <p className="stars"></p>
            <p>Enroll Now</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  .card-container {
    width: 90%;
    height: auto;
    transition: transform 0.2s ease-in-out;
    border-radius: 30px;
    cursor: pointer;
    border: 2px groove rgba(255, 255, 255, 0.1);
    background: #381d74;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
    break-inside: avoid;
    margin: 10px 0px 0px 20px;

    .card-image {
      width: 100%;
      height: 20%;
      overflow: hidden;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      filter: brightness(90%);
      overflow: hidden;
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

      .bottom-section {
        display: flex;
        justify-content: space-between;
        width: 96%;
        color: #d9ecff;
        font-family: Inter;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px; /* 112.5% */
        text-decoration-line: underline;
        padding: 12px;
      }
    }
  }

  .card-container:hover {
    transform: scale(1.03);
    z-index: 100;

    .card-image {
      filter: blur(2px);
    }
  }

  @media screen and (max-width: 1200px) and (min-width: 800px) {
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

  @media screen and (max-width: 500px) {
    .card-container {
      margin: 5px;
    }
  }
`;
