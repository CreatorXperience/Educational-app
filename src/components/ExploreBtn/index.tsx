import styled from "styled-components";

const ExploreBtn = () => {
  return (
    <ExploreBtnWrapper>
      <div className="explore">
        <button>Explore all Courses</button>
      </div>
    </ExploreBtnWrapper>
  );
};

export default ExploreBtn;

const ExploreBtnWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 30px;

  button {
    border-radius: 47px;
    background: #7f56d9;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    display: flex;
    width: 273px;
    height: 65px;
    padding: 16px 28px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: #fff;
    /* Text lg/Semibold */
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 155.556% */
    transition: all 0.2s ease-in-out;
    border: none;
    cursor: pointer;
  }

  button:hover {
    transform: scale(1.1);
  }
`;
