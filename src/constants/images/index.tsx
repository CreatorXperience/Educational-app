import mainIllustration from "../../assets/illustration1.svg";
import Illustration2 from "../../assets/illustration2.svg";
const illustration = () => {
  return <img src={mainIllustration} alt="illustration" />;
};

const illustrationSm = () => {
  return <img src={Illustration2} alt="illustration" />;
};

const brandLogo = () => {
  return <img src={Illustration2} alt="illustration" />;
};

export { illustration, illustrationSm, brandLogo };
