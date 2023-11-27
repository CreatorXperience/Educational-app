import styled from "styled-components";

const SearchBarWrapper = styled.div`
  .inputWrapper {
    width: 304px;
    height: 40px;
    flex-shrink: 0;
    background-color: #37265d;
    border-radius: 5px;
    padding: 10px;

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
`;

export default SearchBarWrapper;
