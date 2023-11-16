import { useEffect, useMemo, useState } from "react";
import getData from "../../services/getData";
import { TDatabase } from "../../types/type";

const useGetData = () => {
  const [data, setData] = useState<TDatabase[] | null | undefined>();
  const [value, setValue] = useState<string | undefined>("data");

  useEffect(() => {
    try {
      getData<TDatabase[] | null | undefined>(setData, value as string);
    } catch (e) {
      console.log("caught an error");
    }
  }, [value]);

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
