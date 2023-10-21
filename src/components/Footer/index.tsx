import { brand } from "../../constants/images";
import FooterWrapper from "./FooterWrapper";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-container" data-testid="footer-container">
        <div className="brand-footer-icon">
          <div className="brand-logo">{brand("120px")}</div>
          <div className="brand-name">Edujar</div>
        </div>

        <div className="footer-content">
          <div className="footer-description">
            Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>

          <div className="overall-wrapper">
            <div className="links-wrapper">
              <div className="quick-links">Quick Links</div>
              <div>About</div>
              <div>Course</div>
            </div>

            <div className="links-wrapper">
              <div className="contact-links">Contact us</div>
              <div>Contact</div>
              <div>Home</div>
            </div>
          </div>

          <div className="contact-wrapper">
            <div className="phone">
              <i
                className="fa-solid fa-phone"
                style={{ color: "#b0b0d1", marginRight: "10px" }}
              ></i>{" "}
              <p>(209) 555-0104</p>
            </div>
            <div className="email">
              <i
                className="fa-solid fa-envelope"
                style={{ color: "#b0b0d1", marginRight: "10px" }}
              ></i>
              <p>michelle.rivera@example.com</p>
            </div>
          </div>

          <div className="contact-wrapper">
            <div className="phone">
              <i
                className="fa-solid fa-location-dot"
                style={{ color: "#b0b0d1", marginRight: "10px" }}
              ></i>{" "}
              <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className="socialicons">
          <div className="copyright">Copyright 2023 | All Rights Reserved</div>

          <div>
            <i
              className="fa-brands fa-facebook"
              style={{ color: "#b0b0d1", marginRight: "10px" }}
            ></i>
            <i
              className="fa-brands fa-instagram"
              style={{ color: "#b0b0d1", marginRight: "10px" }}
            ></i>
            <i
              className="fa-brands fa-twitter"
              style={{ color: "#b0b0d1", marginRight: "10px" }}
            ></i>
            <i
              className="fa-brands fa-youtube"
              style={{ color: "#b0b0d1", marginRight: "10px" }}
            ></i>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
