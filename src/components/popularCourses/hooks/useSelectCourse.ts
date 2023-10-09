import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

const useSelectCourse = (
  course: React.Dispatch<React.SetStateAction<string | undefined>>
) => {
  const [searchParams, setSearchParam] = useSearchParams("");
  const ref = useRef<HTMLButtonElement | null>(null);

  const handleSelectCourse = (
    e: React.MouseEvent<HTMLButtonElement>,
    type: string
  ) => {
    setSearchParam(type);
    course(type);
  };

  return { handleSelectCourse, searchParams, ref };
};

export default useSelectCourse;
