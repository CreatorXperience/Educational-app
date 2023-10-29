import styled from "styled-components";

const LoaderWrapper = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  height: 200px;

  .newtons-cradle {
    --uib-size: 80px;
    --uib-speed: 1.2s;
    --uib-color: linear-gradient(180deg, #ffc27a 0%, #ffa337 100%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--uib-size);
    height: var(--uib-size);
  }

  .newtons-cradle__dot {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    width: 25%;
    transform-origin: center top;
  }

  .newtons-cradle__dot::after {
    content: "";
    display: block;
    width: 100%;
    height: 25%;
    border-radius: 50%;
    background: var(--uib-color);
  }

  .newtons-cradle__dot:first-child {
    animation: swing var(--uib-speed) linear infinite;
  }

  .newtons-cradle__dot:last-child {
    animation: swing2 var(--uib-speed) linear infinite;
  }

  @keyframes swing {
    0% {
      transform: rotate(0deg);
      animation-timing-function: ease-out;
    }

    25% {
      transform: rotate(70deg);
      animation-timing-function: ease-in;
    }

    50% {
      transform: rotate(0deg);
      animation-timing-function: linear;
    }
  }

  @keyframes swing2 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: linear;
    }

    50% {
      transform: rotate(0deg);
      animation-timing-function: ease-out;
    }

    75% {
      transform: rotate(-70deg);
      animation-timing-function: ease-in;
    }
  }
`;

export default LoaderWrapper;
