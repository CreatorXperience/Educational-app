import Hero from "../hero";
import NavigationBar from "../navigationBar";
import Partner from "../partners";
import PopularCourses from "../popularCourses";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <NavigationBar />
      <Hero />
      <Partner />
      <PopularCourses />
    </div>
  );
};

export default LandingPage;
