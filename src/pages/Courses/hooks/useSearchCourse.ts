import { useMutation } from "react-query";

import searchCourse from "../../../services/courses/search-course";
import { TDatabase } from "../../../types/type";
import { useEffect, useMemo, useState } from "react";

const useSearchCourse = (payload: { term: string; count: number }) => {
  const [data, setData] = useState<TDatabase[] | null>(null);

  const memoizedProps = useMemo(() => {
    return { term: payload.term, count: payload.count };
  }, [payload.term, payload.count]);

  let postSearchCourse = useMutation("search-course", searchCourse, {
    onSuccess: (data) => {
      setData(data as TDatabase[]);
    },
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

  useEffect(() => {
    mutateCourse(memoizedProps.term as string, memoizedProps.count);
  }, [memoizedProps.term, memoizedProps.count]);

  return { postSearchCourse, data };
};

export default useSearchCourse;
