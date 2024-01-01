import { useQuery } from "react-query";
import fetchData from "../../../services/courses/fetch-data";

const useFetchData = (count: number) => {
  let { data } = useQuery("fetch-data", () => fetchData(count), {
    staleTime: 10000,
    refetchOnWindowFocus: true,
  });
  return data;
};

export default useFetchData;
