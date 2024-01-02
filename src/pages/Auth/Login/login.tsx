import { useContext, useLayoutEffect } from "react";
import styled from "styled-components";
import { NavContext } from "../../../App";

function Frame() {
  const setIsHideNav = useContext(NavContext);

  useLayoutEffect(() => {
    if (setIsHideNav) setIsHideNav(false);
  }, [setIsHideNav]);
  return <div></div>;
}
export default Frame;
