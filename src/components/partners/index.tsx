import {
  HubSpotIcon,
  gitlabIcon,
  livechatIcon,
  loomIcon,
  mondayIcon,
} from "../../constants/images";
import PartnerWrapper from "./PartnerWrapper";

const Partner = () => {
  return (
    <PartnerWrapper>
      <div className="p-container">
        <div className="p-circle"></div>
        <div className="dots-1"></div>
        <div className="dots-2"></div>
        <div className="partner-text">Our Course Partners</div>

        <div className="partners-overallWrapper">
          <div>{HubSpotIcon()}</div>
          <div>{loomIcon()}</div>
          <div>{gitlabIcon()}</div>
          <div>{livechatIcon()}</div>
          <div>{mondayIcon()}</div>
        </div>
      </div>
    </PartnerWrapper>
  );
};

export default Partner;
