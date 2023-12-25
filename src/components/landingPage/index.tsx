import PopularCourse from "../AllPopularCourses";
import Hero from "../hero";
import Partner from "../partners";


import ExploreBtn from "../ExploreBtn";
import Category from "../Category";
import styled from "styled-components";
import Platform from "../Platform";
import FeedBack from "../Feedback";

import BlurredCircle from "../blurredCircle/circle";
import Loader from "../Loader";

const LandingPage = () => {

  return (
    <HomeWrapper>
      <div className="home-container">
        <Hero />
        <Partner />
        {/* <ExploreCourses
          setCourse={
            setCourse as React.Dispatch<
              React.SetStateAction<string | undefined>
            >
          }
        /> */}
     <PopularCourse  /> 
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
  overflow-x: hidden;
`;
