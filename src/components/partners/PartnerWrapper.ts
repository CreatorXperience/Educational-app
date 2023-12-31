import styled from "styled-components";

const PartnerWrapper = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;

  .p-container {
    position: relative;
    width: 80%;
    height: 80%;

    .p-circle {
      width: 326px;
      height: 326px;
      flex-shrink: 0;
      border-radius: 426px;
      background: rgba(61, 92, 255, 0.2);
      filter: blur(150px);
      position: absolute;
      top: 30%;
    }

    .dots-1 {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background-color: #858585;
      left: 30.4%;
      top: -4px;
    }

    .dots-2 {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background-color: #858585;
      left: 5%;
      top: -4px;
    }

    .partner-text {
      position: absolute;
      left: 5.8%;
      top: -27px;
      padding: 10px 0px 10px 0px;
      color: #d9ecff;
      font-family: DM sans;
      font-size: 2vw;
      font-style: normal;
      font-weight: 700;
      line-height: 40px; /* 133.333% */
      background-color: #2c1f4a;
    }
    .partners-overallWrapper {
      width: 100%;
      height: 80%;
      border: 2px solid grey;
      padding: 12px;
      border-radius: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .partnersIcon {
        width: 80%;
      }
    }
  }

  @media screen and (max-width: 800px) {
    height: 500px;
    padding: 10px;

    .p-container {
      height: 100%;
      width: 98%;
      padding: 20px;

      .dots-1 {
        top: 16px;
        left: 54.4%;
      }

      .dots-2 {
        top: 24px;
        left: 6.5%;
      }
      .partner-text {
        top: 0;
        left: 30px;
        padding: 0;
        font-size: 14px;
      }
      .partners-overallWrapper {
        height: 100%;
        flex-flow: column;
        padding: 10px;
        width: 100%;
      }

      .p-circle {
        width: 0;
        display: none;
      }
    }
  }
`;

export default PartnerWrapper;
