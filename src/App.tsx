import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useEffect, useMemo, useState } from "react";
import auth from "./auth/auth";
import NavigationBar from "./components/navigationBar";
import getData from "./services/getData";
import { TDatabase } from "./types/type";
import { DataProvider } from "./context/DataProvider";

const App = () => {
  useEffect(() => {
    auth().signIn("cola@gmail.com", "1234567890");
  }, []);

  const [data, setData] = useState<TDatabase[] | null | undefined>();
  const [value, setValue] = useState<string | undefined>("data");

  useEffect(() => {
    getData(setData, value as string);
  }, [value]);

  const memoizedData = useMemo(() => {
    return data;
  }, [data, value]);

  const isData = useMemo(() => (data ? true : false), [data]);

  return (
    <div className="App">
      <DataProvider.Provider
        value={{ data: memoizedData, setCourse: setValue, isData: isData }}
      >
        <NavigationBar />
        <RouterProvider router={router}></RouterProvider>
      </DataProvider.Provider>
    </div>
  );
};

export default App;
