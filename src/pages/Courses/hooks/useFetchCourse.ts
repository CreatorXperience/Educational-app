import { useMutation } from "react-query";

import searchCourse from "../../../services/courses/search-course";
import { TDatabase } from "../../../types/type";

const useSearchCourse = () => {
  let postSearchCourse = useMutation({
    mutationFn: searchCourse,
  });

  let mutateCourse = (term: string, count: number) => {
    let payload = { term, count };
    let result = postSearchCourse.mutate(payload, {
      onError: () => {
        console.log("error occured while mutating data");
      },
    }) as unknown;
    return result as TDatabase[];
  };

  return { postSearchCourse, mutateCourse };
};

export default useSearchCourse;
