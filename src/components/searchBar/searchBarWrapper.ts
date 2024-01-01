import styled from "styled-components";

const SearchBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .inputWrapper {
    width: 500px;
    height: 60px;
    flex-shrink: 0;
    background-color: #37265d;
    border-radius: 10px;
    padding: 10px;
    margin-top: 20px;

    input {
      width: 90%;
      height: 100%;
      border: none;
      background-color: #37265d;
      outline: none;
      padding: 10px;
      font-size: 16px;
      color: #fff;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
  }

  @media screen and (max-width: 600px) {
    .inputWrapper {
      width: 90%;
    }
  }
`;

export default SearchBarWrapper;
