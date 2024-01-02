import styled from "styled-components";

const SideNavWrapper = styled.div`
  width: 5%;
  .sideNav {
    width: 100%;
    height: 100%;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 100px 0px 100px 0px;
    background: #37265d;
  }

  @media screen and (max-width: 760px) {
    width: 100%;
    overflow-x: hidden;

    .sideNav {
      flex-flow: row;
      height: 50px;
      align-items: flex-start;
      padding: 0;
      transform: translateX(-300%);
    }
  }
`;

export default SideNavWrapper;
