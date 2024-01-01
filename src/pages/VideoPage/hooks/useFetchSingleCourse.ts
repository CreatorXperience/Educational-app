import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL } from "../../../constants/constant";
import { TDatabase } from "../../../types/type";

const fetchSingleCourse = async (id: string) => {
  let { data } = await axios.get(`${BASE_URL}/api/courses/${id}`);
  let courseData: TDatabase = data;
  return courseData;
};

const useFetchSingleCourse = (id: string) => {
  let { data, isError, isLoading, isSuccess } = useQuery(
    "fetch-single-course",
    () => fetchSingleCourse(id),
    {
      staleTime: 5000,
      cacheTime: 5000,
      refetchOnWindowFocus: true,
    }
  );

  return { data, isError, isLoading, isSuccess };
};

export default useFetchSingleCourse;
