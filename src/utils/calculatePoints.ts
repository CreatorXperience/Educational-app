import svg from "../constants/svgs/stars";

const calculatePoints = (point: number) => {
  let wholeNumber = Math.round(point);
  let fixedStarsCount = 5;
  let yellow = wholeNumber;
  let white = fixedStarsCount - yellow;

  let yellowStars = [];

  let whiteStars = [];
  for (let i = 0; i < yellow; i++) {
    yellowStars.push(svg.yellowStars());
  }
  for (let i = 0; i < white; i++) {
    whiteStars.push(svg.whiteStars());
  }

  yellowStars = [...yellowStars, ...whiteStars];

  return yellowStars;
};

export default calculatePoints;
