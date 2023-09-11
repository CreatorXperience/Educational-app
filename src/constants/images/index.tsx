import mainIllustration from "../../assets/illustration1.svg";
import Illustration2 from "../../assets/illustration2.svg";
import brandLogo from "../../assets/brand.svg";
import navIcon from "../../assets/navIcon.svg";
const illustration = () => {
  return <img src={mainIllustration} alt="illustration" />;
};

const illustrationSm = () => {
  return <img src={Illustration2} alt="illustration" />;
};

const brand = () => {
  return (
    <img className="brandIdentity" src={brandLogo} width="40%" alt="brand" />
  );
};

const navigationIcon = () => {
  return <img src={navIcon} alt="navIcon" />;
};

export { illustration, illustrationSm, brand, navigationIcon };
