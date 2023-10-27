import brandLogo from "../../assets/brand.svg";
import navIcon from "../../assets/navIcon.svg";
import heroText from "../../assets/hero-text.svg";
import HubSpot from "../../assets/hubspot.svg";
import loom from "../../assets/loom.svg";
import livechat from "../../assets/livechat.svg";
import gitlab from "../../assets/gitlab.svg";
import monday from "../../assets/monday.svg";
import category1 from "../../assets/category1.svg";
import category2 from "../../assets/category2.svg";
import design from "../../assets/design.svg";
import arrowup from "../../assets/ArrowUpRight.svg";
import frame from "../../assets/Frame.svg";
import rocket from "../../assets/rockets.svg";
import star from "../../assets/star.svg";
import Quote from "../../assets/Vector.svg";
import astro1 from "../../assets/astro1.png";
import astro2 from "../../assets/astro2.png";
import astro3 from "../../assets/astro3.png";
import Mockup from "../../assets/mockup.svg";
import lightning from "../../assets/Lightning.svg";

const illustration = () => {
  return (
    <img
      src={Mockup}
      // style={{ marginTop: "-150px" }}
      alt="illustration"
      className="character-illustration"
      width="100%"
    />
  );
};

const illustrationSm = () => {
  return <img src={"Illustration2"} width="50%" alt="illustration" />;
};

const brand = (size: string = "40%") => {
  return (
    <img className="brandIdentity" src={brandLogo} width={size} alt="brand" />
  );
};

const navigationIcon = () => {
  return <img src={navIcon} alt="navIcon" />;
};

const heroIllustration = () => {
  return <img src={heroText} className="course-text" alt="heroText" />;
};

const HubSpotIcon = () => {
  return <img src={HubSpot} className="partnersIcon" alt="HubSpotIcon" />;
};

const loomIcon = () => {
  return <img src={loom} className="partnersIcon" alt="loomIcon" />;
};

const livechatIcon = () => {
  return <img src={livechat} className="partnersIcon" alt="livechatIcon" />;
};

const gitlabIcon = () => {
  return <img src={gitlab} className="partnersIcon" alt="gitlabIcon" />;
};

const mondayIcon = () => {
  return <img src={monday} className="partnersIcon" alt="mondayIcon" />;
};

const category1Icon = () => {
  return (
    <img
      src={category1}
      className="categoryIcon"
      width="300px"
      alt="category"
    />
  );
};
const category2Icon = () => {
  return (
    <img
      src={category2}
      className="categoryIcon"
      width="400px"
      alt="category"
    />
  );
};

const designIcon = () => {
  return <img src={design} className="designIcon" alt="design" />;
};

const arrowUpRightIcon = () => {
  return <img src={arrowup} className="arrowUpRight" alt="arrowUpRight" />;
};

const frameIcon = () => {
  return <img src={frame} className="frame" width="300px" alt="frame" />;
};

const rocketIcon = () => {
  return <img src={rocket} className="rocket" width="70%" alt="rocket" />;
};

const starIcon = () => {
  return <img src={star} className="partnersIcon" alt="starIcon" />;
};

const QuoteIcon = () => {
  return <img src={Quote} className="quoteIcon" alt="quoteIcon" />;
};

const astronaut1 = () => {
  return (
    <img src={astro1} className="astronaut" width="600px" alt="astronaut" />
  );
};

const astronaut2 = () => {
  return (
    <img src={astro2} className="astronaut" width="400px" alt="astronaut" />
  );
};

const astronaut3 = () => {
  return <img src={astro3} className="astronaut" alt="astronaut" />;
};

const lightningIcon = () => {
  return <img src={lightning} className="astronaut" width="100%" alt="light" />;
};
export {
  illustration,
  illustrationSm,
  brand,
  navigationIcon,
  heroIllustration,
  HubSpotIcon,
  loomIcon,
  livechatIcon,
  gitlabIcon,
  mondayIcon,
  category1Icon,
  category2Icon,
  designIcon,
  arrowUpRightIcon,
  frameIcon,
  rocketIcon,
  starIcon,
  QuoteIcon,
  astronaut1,
  astronaut2,
  astronaut3,
  lightningIcon,
};
