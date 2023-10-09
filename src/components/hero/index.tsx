import { illustration } from "../../constants/images";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import HeroWrapper from "./HeroWrapper";

const Hero = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    navigate(`courses/${ref.current?.value}`);
    window.scrollTo(0, 0);
  };

  return (
    <HeroWrapper>
      <div className="hero">
        <div className="illustration">
          <h1 className="illustration-title">
            <span className="course"> Best courses </span> are waiting to enrich
            your skills
          </h1>
          <p className="hero-description">
            Provides you with the latest online learning system and material
            that help your knowledge growing
          </p>
        </div>

        <div className="character">
          <div className="circle"></div>
          <div className="hero-illustration">{illustration()}</div>
        </div>
      </div>
      <div className="inputWrapper">
        <div className="inputBar">
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: "lightgrey" }}
          ></i>

          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              className="explore"
              placeholder="Search for courses e.g Javascript, python Node ...."
              ref={ref}
            />
          </form>
          <button className="explorebtn" onClick={(e) => handleSubmit(e)}>
            Explore
          </button>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
