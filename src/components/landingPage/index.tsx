import { createContext } from "vm";
import getData from "../../services/getData";
import { TDatabase } from "../../types/type";
import PopularCourse from "../AllPopularCourses";
import Hero from "../hero";
import NavigationBar from "../navigationBar";
import Partner from "../partners";
import PopularCourses from "../popularCourses";
import { useEffect, useState, useMemo, useRef, useContext } from "react";
import ExploreBtn from "../ExploreBtn";
import Category from "../Category";
import styled from "styled-components";

// FIXME:  Fix Context API
// export const DataProvider = createContext<TDatabase[] | null>();

const LandingPage = () => {
  const [data, setData] = useState<TDatabase[] | null | undefined>();

  useEffect(() => {
    getData(setData);
  }, []);

  const memoizedData = useMemo(() => {
    return data;
  }, []);

  console.log(data);
  const isData = useMemo(() => (data ? true : false), [data]);

  return (
    // <DataProvider.provider value={{ memoizedData }}>
    <HomeWrapper>
      <div className="home-container">
        <NavigationBar />
        <Hero />
        <Partner />
        <PopularCourses />
        <PopularCourse isData={isData} data={data} />
        <ExploreBtn />
        <Category />
      </div>
    </HomeWrapper>
    // </DataProvider.provider>
  );
};

export default LandingPage;

const HomeWrapper = styled.div`
  max-width: 2000px;
  margin: 0 auto;
`;
