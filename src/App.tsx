import { RouterProvider } from "react-router-dom";
import styled from "styled-components";

import "./App.css";

import NavigationBar from "./components/navigationBar";
import Footer from "./components/Footer";

import { DataProvider } from "./context/DataProvider";
import router from "./router";
import useGetData from "./App/hook/useGetData";
import UserRepo from "./AppWrapper";
import { useState } from "react";
import { createContext } from "react";

export const NavContext = createContext<React.Dispatch<
  React.SetStateAction<boolean>
> | null>(null);

const App = () => {
  const { setValue, isData, memoizedData } = useGetData();

  const [isHideNav, setIsHideNav] = useState(true);
  return (
    <Appwrapper>
      <UserRepo>
        <div className="App">
          <DataProvider.Provider
            value={{ data: memoizedData, setCourse: setValue, isData: isData }}
          >
            {isHideNav ? <NavigationBar /> : ""}
            <div className="content">
              <NavContext.Provider value={setIsHideNav}>
                <RouterProvider router={router}></RouterProvider>
              </NavContext.Provider>
            </div>
            <Footer />
          </DataProvider.Provider>
        </div>
      </UserRepo>
    </Appwrapper>
  );
};

export default App;

const Appwrapper = styled.div`
  height: 100%;
`;
