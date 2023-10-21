import { rest } from "msw";

const createMockServer = () => {
  rest.get("/api", (req, res, ctx) => {});
};
