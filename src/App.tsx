import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useEffect, useMemo, useState } from "react";
import auth from "./auth/auth";
import NavigationBar from "./components/navigationBar";
import getData from "./services/getData";
import { TDatabase } from "./types/type";
import { DataProvider } from "./context/DataProvider";
import styled from "styled-components";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    auth().signIn("cola@gmail.com", "1234567890");
  }, []);

  const [data, setData] = useState<TDatabase[] | null | undefined>();
  const [value, setValue] = useState<string | undefined>("data");

  useEffect(() => {
    getData<TDatabase[] | null | undefined>(setData, value as string);
  }, [value]);

  const memoizedData = useMemo(() => {
    return data;
  }, [data]);

  const isData = useMemo(() => (data ? true : false), [data]);

  return (
    <Appwrapper>
      <div className="App">
        <DataProvider.Provider
          value={{ data: memoizedData, setCourse: setValue, isData: isData }}
        >
          <NavigationBar />
          <RouterProvider router={router}></RouterProvider>
          <Footer />
        </DataProvider.Provider>
      </div>
    </Appwrapper>
  );
};

export default App;

const Appwrapper = styled.div`
  display: flex;
  flex-flow: column;
`;
