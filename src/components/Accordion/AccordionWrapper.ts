import styled from "styled-components";

const AccordionWrapper = styled.div`
  width: 100%;
  height: auto;

  border: 1px solid white;

  .accordion-container {
    width: 40%;
    height: 60px;
    border: 1px solid red;
    background-color: white;
    border-radius: 5px;
    overflow-y: hidden;
    font-size: 18px;
    font-family: DM sans;
    transition: height 1s ease-in-out;
    margin-left: 40px;

    .content-container {
      display: flex;
      height: 100%;
      padding: 5px;
      justify-content: space-between;

      .accordion-title {
        font-weight: 400;
        display: flex;
        width: 70%;
        height: 100%;
        align-items: center;
        color: black;
        font-size: 20px;
        padding: 12px;
      }

      .accordion-icon {
        color: #93939380;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background: linear-gradient(94deg, #8c3cdd 4.68%, #5b57d6 98.4%);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: white;
      }
    }

    .accordion-desc {
      padding: 12px;
      font-size: 14px;
      font-family: DM sans;
    }
  }

  @media screen and (max-width: 768px) {
    .accordion-container {
      width: 90%;
      margin: 0 auto;

      .content-container {
        .accordion-title {
          font-size: 16px;
        }
      }
    }
  }
`;
export default AccordionWrapper;
