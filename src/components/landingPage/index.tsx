import getData from "../../services/getData";
import { TDatabase } from "../../types/type";
import PopularCourse from "../AllPopularCourses";
import Hero from "../hero";
import NavigationBar from "../navigationBar";
import Partner from "../partners";
import PopularCourses from "../popularCourses";
import { useEffect, useState, useMemo, createContext } from "react";
import ExploreBtn from "../ExploreBtn";
import Category from "../Category";
import styled from "styled-components";
import Platform from "../Platform";
import FeedBack from "../Feedback";
import Footer from "../Footer";
import Earth from "../3d-earth";

export const DataProvider = createContext<TDatabase[] | null | undefined>(null);

const LandingPage = () => {
  const [data, setData] = useState<TDatabase[] | null | undefined>();
  const [value, setValue] = useState<string | undefined>("data");

  useEffect(() => {
    getData(setData, value as string);
  }, [value]);

  const memoizedData = useMemo(() => {
    return data;
  }, [data, value]);

  const isData = useMemo(() => (data ? true : false), [data]);

  return (
    <DataProvider.Provider value={memoizedData}>
      <HomeWrapper>
        <div className="home-container">
          <NavigationBar />
          <Hero />
          <Partner />
          <PopularCourses />
          <PopularCourse isData={isData} />
          <ExploreBtn />
          <Category />
          <Platform />
          <FeedBack />
          <Earth />
          <Footer />
        </div>
      </HomeWrapper>
    </DataProvider.Provider>
  );
};

export default LandingPage;

const HomeWrapper = styled.div`
  max-width: 2000px;
  margin: 0 auto;
`;
