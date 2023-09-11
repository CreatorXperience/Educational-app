import mainIllustration from "../../assets/illustration1.svg";
import teachers from "../../assets/Saly.svg";
import brandLogo from "../../assets/brand.svg";
import navIcon from "../../assets/navIcon.svg";
import heroText from "../../assets/hero-text.svg";
import HubSpot from "../../assets/hubspot.svg";
import loom from "../../assets/loom.svg";
import livechat from "../../assets/livechat.svg";
import gitlab from "../../assets/gitlab.svg";
import monday from "../../assets/monday.svg";
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
};
