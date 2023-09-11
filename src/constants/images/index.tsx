import mainIllustration from "../../assets/illustration1.svg";
import teachers from "../../assets/Saly.svg";
import brandLogo from "../../assets/brand.svg";
import navIcon from "../../assets/navIcon.svg";
import heroText from "../../assets/hero-text.svg";
const illustration = () => {
  return (
    <img
      src={teachers}
      style={{ marginTop: "-150px" }}
      alt="illustration"
      className="character-illustration"
    />
  );
};

const illustrationSm = () => {
  return <img src={"Illustration2"} width="50%" alt="illustration" />;
};

const brand = () => {
  return (
    <img className="brandIdentity" src={brandLogo} width="40%" alt="brand" />
  );
};

const navigationIcon = () => {
  return <img src={navIcon} alt="navIcon" />;
};

const heroIllustration = () => {
  return <img src={heroText} className="course-text" alt="heroText" />;
};
export {
  illustration,
  illustrationSm,
  brand,
  navigationIcon,
  heroIllustration,
};
