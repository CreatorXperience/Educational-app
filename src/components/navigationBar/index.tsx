import { User } from "firebase/auth";
import { brand, navigationIcon } from "../../constants/images";
import NavigationWrapper from "./NavigationWrapper";

type TUserProps = {
  user: User | undefined;
};

const NavigationBar = ({ user }: TUserProps) => {
  return (
    <NavigationWrapper>
      {user ? (
        <div className="navigationCircle">
          <div className="circle"></div>
          <div className="navbar-container">
            <div className="brand">
              <div className="brandLogo">
                {brand()}
                <div>Brand</div>
              </div>

              {navigationIcon()}
            </div>

            <ul className="navigation">
              <li className="lg">Home</li>
              <li className="lg">About</li>
              <li className="lg">Course</li>
              <li className="lg">Blog</li>
              <li className="lg">Contact</li>
              <li className="sm">
                <i className="fa-solid fa-bars" style={{ color: "white" }}></i>
              </li>
            </ul>
            <div className="buttons">
              <button className="loginBtn">Login</button>
              <button className="getStartedBtn">Get Started</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="navigationCircle">
          <div className="circle"></div>
          <div className="navbar-container">
            <div className="brand">
              <div className="brandLogo">
                {brand()}
                <div>Brand</div>
              </div>

              {navigationIcon()}
            </div>

            <ul className="navigation">
              <li className="lg">Home</li>
              <li className="lg">About</li>
              <li className="lg">Course</li>
              <li className="lg">Blog</li>
              <li className="lg">Contact</li>
              <li className="sm">
                <i className="fa-solid fa-bars" style={{ color: "white" }}></i>
              </li>
            </ul>
            <div className="buttons">
              <button className="loginBtn">Logout</button>
              <button className="getStartedBtn">Get Started</button>
            </div>
          </div>
        </div>
      )}
    </NavigationWrapper>
  );
};

export default NavigationBar;
