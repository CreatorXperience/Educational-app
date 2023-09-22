import { QuoteIcon } from "../../constants/images";

const CarouselCard = () => {
  return (
    <div className="carousel-card">
      <div className="carousel-profile">
        <div className="profile">
          <img
            src="https://i.pinimg.com/564x/d0/4a/3f/d04a3f2c86467efc0b36edaa0865b638.jpg"
            alt="profile-image"
            width="40px"
          />
        </div>

        <div className="carousel-title">
          <p>Guy Hawkins</p>
          <p className="post">UI-UX Designer</p>
        </div>
      </div>

      <div className="carousel-content">
        Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam
        sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla
        massa, hendrerit vestibulum gravida in, feugiat auctor felis.
      </div>

      <div className="quote-icon">{QuoteIcon()}</div>
    </div>
  );
};

export default CarouselCard;
