import { render, screen } from "@testing-library/react";
import Courses from ".";

test("expect to see two item on the screen", async () => {
  render(<Courses />);

  const cardWrapper = await screen.findByTestId("card-wrapper");
});
