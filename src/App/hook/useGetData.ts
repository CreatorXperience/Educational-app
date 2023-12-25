import {useMemo, useState } from "react";

import { TDatabase } from "../../types/type";



const useGetData = () => {
  const [data, setData] = useState<TDatabase[] | null | undefined>();
  const [value, setValue] = useState<string | undefined>("data");

  
  

  const memoizedData = useMemo(() => {
    return data;
  }, [data]);

  const isData = useMemo(() => (data ? true : false), [data]);

  return {
    setValue,
    memoizedData,
    isData,
  };
};

export default useGetData;
