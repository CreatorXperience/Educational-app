import { useQuery } from "react-query";
import fetchData from "../../../services/courses/fetch-data";

const useFetchVideoCourse = (count: number) => {
  let { data } = useQuery("videos", () => fetchData(count));
  return data;
};

export default useFetchVideoCourse;
