import styled from "styled-components";
import getData from "../../services/getData";
import { TDatabase } from "../../types/type";
import PopularCourse from "../AllPopularCourses";
import Hero from "../hero";
import NavigationBar from "../navigationBar";
import Partner from "../partners";
import PopularCourses from "../popularCourses";
import { useEffect, useState, useMemo } from "react";
import WireFrame from "../cardWireFrame/wireframe";

const LandingPage = () => {
  const [data, setData] = useState<TDatabase[] | null | undefined>();

  useEffect(() => {
    setTimeout(() => {
      getData(setData);
    }, 20000);
  }, []);

  const isData = useMemo(() => (data ? true : false), [data]);

  return (
    <div className="home-container">
      <NavigationBar />
      <Hero />
      <Partner />
      <PopularCourses />
      <PopularCourse isData={isData} />
    </div>
  );
};

export default LandingPage;
