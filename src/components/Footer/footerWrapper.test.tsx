import { screen, render } from "@testing-library/react";

import Footer from ".";

test("expect document to render", () => {
  render(<Footer />);

  expect(screen.getByTestId("footer-container")).toBeInTheDocument();
});
