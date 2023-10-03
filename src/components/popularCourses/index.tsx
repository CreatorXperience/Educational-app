import { useRef } from "react";
import styled from "styled-components";

type TCourse = {
  setCourse: React.Dispatch<React.SetStateAction<string | undefined>>;
};
const PopularCourses = ({ setCourse }: TCourse) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const handleSelectCourse = (
    e: React.MouseEvent<HTMLButtonElement>,
    type: string
  ) => {
    setCourse(type);
  };
  return (
    <PopularWrapper>
      <div className="pop-container">
        <div className="popText">
          Popular <span className="purpleText">Courses</span>
        </div>

        <div className="courses-btnWrapper">
          <button
            onClick={(e) => handleSelectCourse(e, "Development")}
            ref={ref}
            className="active"
          >
            Development
          </button>

          <button
            ref={ref}
            onClick={(e) => handleSelectCourse(e, "Data science")}
          >
            Data science
          </button>

          <button onClick={(e) => handleSelectCourse(e, "C++")}>C++</button>

          <button onClick={(e) => handleSelectCourse(e, "React")}>React</button>

          <button onClick={(e) => handleSelectCourse(e, "Java")}>Java</button>
        </div>
      </div>
    </PopularWrapper>
  );
};

export default PopularCourses;

const PopularWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .pop-container {
    width: 85%;
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
      flex-direction: column;
      align-items: center;
      text-align: center;

      .popText,
      .purpleText {
        font-size: 30px;
      }
      .courses-btnWrapper {
        width: 90%;
      }
    }
  }
`;
