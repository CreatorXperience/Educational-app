import SideNavWrapper from "./SideNavWrapper";

import {
  javascriptIcon,
  vueIcon,
  reactIcon,
  indesignIcon,
  figmaIcon,
  flutterIcon,
  xdIcon,
  splineIcon,
  cssIcon,
} from "../../constants/images/index";

const SideNav = () => {
  return (
    <SideNavWrapper>
      <div className="sideNav">
        <div>{javascriptIcon()}</div>
        <div>{reactIcon()}</div>
        <div>{vueIcon()}</div>
        <div>{indesignIcon()}</div>
        <div>{figmaIcon()}</div>
        <div>{cssIcon()}</div>
        <div>{flutterIcon()}</div>
        <div>{xdIcon()}</div>
        <div>{splineIcon()}</div>
      </div>
    </SideNavWrapper>
  );
};

export default SideNav;
