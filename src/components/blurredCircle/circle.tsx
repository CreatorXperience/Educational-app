import styled from "styled-components";

const BlurredCircle = () => {
  return (
    <BlurredWrapper>
      <div className="circle"></div>
    </BlurredWrapper>
  );
};

export default BlurredCircle;

const BlurredWrapper = styled.div<{ position?: string }>`
  div.circle {
    border: 1px solid red;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: rgba(61, 93, 255, 0.329);
    filter: blur(150px);
    position: ${(props) => (props.position ? props.position : "absolute")};
    left: 0;
    display: none;
  }

  @media screen and (max-screen: 400px) {
    div.circle {
      display: none;
    }
  }
`;
