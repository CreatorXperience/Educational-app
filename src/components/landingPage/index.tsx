import getData from "../../services/getData";
import { TDatabase } from "../../types/type";
import PopularCourse from "../AllPopularCourses";
import Hero from "../hero";
import NavigationBar from "../navigationBar";
import Partner from "../partners";
import PopularCourses from "../popularCourses";
import { useEffect, useState, useMemo, createContext, useContext } from "react";
import ExploreBtn from "../ExploreBtn";
import Category from "../Category";
import styled from "styled-components";
import Platform from "../Platform";
import FeedBack from "../Feedback";
import Footer from "../Footer";
import Earth from "../3d-earth";
import { DataProvider } from "../../context/DataProvider";

const LandingPage = () => {
  const { isData, setCourse } = useContext(DataProvider);
  return (
    <HomeWrapper>
      <div className="home-container">
        <Hero />
        <Partner />
        <PopularCourses
          setCourse={
            setCourse as React.Dispatch<
              React.SetStateAction<string | undefined>
            >
          }
        />
        <PopularCourse isData={isData} />
        <ExploreBtn />
        <Category />
        <Platform />
        <FeedBack />
        <Earth />
        <Footer />
      </div>
    </HomeWrapper>
  );
};

export default LandingPage;

const HomeWrapper = styled.div`
  max-width: 2000px;
  margin: 0 auto;
`;
