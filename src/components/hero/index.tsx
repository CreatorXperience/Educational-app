import { heroIllustration, illustration } from "../../constants/images";
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
  };

  return (
    <HeroWrapper>
      <div className="hero">
        <div className="illustration">{heroIllustration()}</div>

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
