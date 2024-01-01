import { useQuery } from "react-query";
import fetchData from "../../../services/courses/fetch-data";

const useGetAllCourses = (count: number) => {
  let { data, isError, isLoading } = useQuery(
    "fetch-data",
    () => fetchData(count),
    {
      staleTime: 10000,
      refetchOnWindowFocus: true,
    }
  );
  return { data, isError, isLoading };
};

export default useGetAllCourses;
