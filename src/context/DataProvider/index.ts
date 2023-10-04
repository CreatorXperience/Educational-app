import { createContext } from "react";
import { TDatabase } from "../../types/type";

type TDataProvider = {
  data: TDatabase[] | null | undefined;
  isData: boolean;
  setCourse: React.Dispatch<React.SetStateAction<string | undefined>> | null;
};

const DataProvider = createContext<TDataProvider>({
  data: null,
  isData: false,
  setCourse: null,
});

export { DataProvider };
