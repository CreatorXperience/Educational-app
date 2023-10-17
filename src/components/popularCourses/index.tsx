import styled from "styled-components";
import useSelectCourse from "./hooks/useSelectCourse";

type TCourse = {
  setCourse: React.Dispatch<React.SetStateAction<string | undefined>>;
  size?: string;
};
const ExploreCourses = ({ setCourse, size }: TCourse) => {
  const { handleSelectCourse, searchParams, ref } = useSelectCourse(setCourse);

  return (
    <PopularWrapper size={size}>
      <div className="pop-container">
        <div className="popText">
          Explore <span className="purpleText">Courses</span>
        </div>

        <div className="courses-btnWrapper">
          <button
            onClick={(e) => handleSelectCourse(e, "data")}
            ref={ref}
            className={`${searchParams.has("data") ? "active" : ""}`}
          >
            All courses
          </button>

          <button
            ref={ref}
            onClick={(e) => handleSelectCourse(e, "Data science")}
            className={`${searchParams.has("Data science") ? "active" : ""}`}
          >
            Data science
          </button>

          <button
            onClick={(e) => handleSelectCourse(e, "programming")}
            className={`${searchParams.has("programming") ? "active" : ""}`}
          >
            Programming
          </button>

          <button
            onClick={(e) => handleSelectCourse(e, "React")}
            className={`${searchParams.has("React") ? "active" : ""}`}
          >
            Frontend
          </button>

          <button
            className={`${searchParams.has("Backend") ? "active" : ""}`}
            onClick={(e) => handleSelectCourse(e, "Backend")}
          >
            Backend
          </button>
        </div>
      </div>
    </PopularWrapper>
  );
};

export default ExploreCourses;

const PopularWrapper = styled.div<{ size?: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .pop-container {
    width: ${({ size }) => (size ? size : "85%")};
    height: 90px;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightblue;
    align-items: center;

    .popText {
      color: #fff;
      font-family: Caladea;
      font-size: 60px;
      font-style: normal;
      font-weight: 700;
      line-height: 70px; /* 100% */
      letter-spacing: -0.5px;
    }

    .purpleText {
      color: #bea0ff;
      font-family: Caladea;
      font-size: 60px;
      font-style: normal;
      font-weight: 700;
      line-height: 70px;
      letter-spacing: -0.5px;
    }

    .courses-btnWrapper {
      width: 50%;
      height: 70px;
      display: flex;
      justify-content: space-between;
      padding: 5px;
      border-radius: 49.5px;
      background: rgba(255, 255, 255, 0.1);

      button {
        width: 16%;
        border-radius: 46px;
        padding: 12px;
        background-color: transparent;
        border: none;
        color: white;
        font-family: DM sans;
        font-size: 14px;
        font-style: normal;
        font-weight: 200;
        line-height: 28px; /* 155.556% */
        display: flex;
        justify-content: center;
        align-items: center;
        /* Shadow/xs */
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
      }

      .active {
        border: 2px solid #7f56d9;
        background: #7f56d9;
      }
    }
  }

  @media screen and (max-width: 800px) {
    .pop-container {
      width: 100%;
      height: auto;

      flex-direction: column;
      align-items: center;
      text-align: center;

      .popText,
      .purpleText {
        font-size: 30px;
      }
      .courses-btnWrapper {
        width: 90%;
        height: 300px;
        border-radius: 10px;
        flex-direction: column;

        button {
          width: 100%;
        }
      }
    }
  }
`;
