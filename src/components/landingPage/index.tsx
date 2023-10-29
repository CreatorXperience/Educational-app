import PopularCourse from "../AllPopularCourses";
import Hero from "../hero";
import Partner from "../partners";
import ExploreCourses from "../popularCourses";
import { useContext } from "react";
import ExploreBtn from "../ExploreBtn";
import Category from "../Category";
import styled from "styled-components";
import Platform from "../Platform";
import FeedBack from "../Feedback";
import { DataProvider } from "../../context/DataProvider";
import BlurredCircle from "../blurredCircle/circle";
import Loader from "../Loader";

const LandingPage = () => {
  const { isData, setCourse } = useContext(DataProvider);
  return (
    <HomeWrapper>
      <div className="home-container">
        <Hero />
        <Partner />
        <ExploreCourses
          setCourse={
            setCourse as React.Dispatch<
              React.SetStateAction<string | undefined>
            >
          }
        />
        {isData ? <PopularCourse isData={isData} /> : <Loader />}
        <ExploreBtn />
        <Category />
        <Platform />
        <FeedBack />
        <BlurredCircle />
      </div>
    </HomeWrapper>
  );
};

export default LandingPage;

const HomeWrapper = styled.div`
  max-width: 2000px;
  margin: 0 auto;
`;
