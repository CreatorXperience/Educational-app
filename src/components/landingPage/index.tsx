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

// FIXME:  Fix Context API
// export const DataProvider = createContext<TDatabase[] | null>();

const LandingPage = () => {
  const [data, setData] = useState<TDatabase[] | null | undefined>();

  useEffect(() => {
    setTimeout(() => {
      getData(setData);
    }, 10000);
  }, []);

  const memoizedData = useMemo(() => {
    return data;
  }, []);

  console.log(data);
  const isData = useMemo(() => (data ? true : false), [data]);

  return (
    // <DataProvider.provider value={{ memoizedData }}>
    <div className="home-container">
      <NavigationBar />
      <Hero />
      <Partner />
      <PopularCourses />

      <PopularCourse isData={isData} data={data} />
      <ExploreBtn />
    </div>
    // </DataProvider.provider>
  );
};

export default LandingPage;
