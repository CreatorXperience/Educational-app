import styled from "styled-components";

const PageLoaderWrapper = styled.div<{ isLoaderEnd?: boolean }>`
  width: 100%;
  display: ${(props) => (props.isLoaderEnd ? "block" : "grid")};
  place-items: ${(props) => (props.isLoaderEnd ? "none" : "center")};
  height: ${(props) => (props.isLoaderEnd ? "auto" : "500px")};

  .loader {
    width: 44.8px;
    height: 44.8px;
    color: #554cb5;
    position: relative;
    background: radial-gradient(11.2px, currentColor 94%, #0000);
  }

  .loader:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: radial-gradient(
          10.08px at bottom right,
          #0000 94%,
          currentColor
        )
        top left,
      radial-gradient(10.08px at bottom left, #0000 94%, currentColor) top right,
      radial-gradient(10.08px at top right, #0000 94%, currentColor) bottom left,
      radial-gradient(10.08px at top left, #0000 94%, currentColor) bottom right;
    background-size: 22.4px 22.4px;
    background-repeat: no-repeat;
    animation: loader 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
  }

  @keyframes loader {
    33% {
      inset: -11.2px;
      transform: rotate(0deg);
    }

    66% {
      inset: -11.2px;
      transform: rotate(90deg);
    }

    100% {
      inset: 0;
      transform: rotate(90deg);
    }
  }
`;

export default PageLoaderWrapper;
