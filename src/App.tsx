import { RouterProvider } from "react-router-dom";
import styled from "styled-components";

// import { useContext, useEffect } from "react";
import "./App.css";

import NavigationBar from "./components/navigationBar";
import Footer from "./components/Footer";

import { DataProvider } from "./context/DataProvider";
import router from "./router";
import useGetData from "./App/hook/useGetData";
// import { userProvider } from "./AppWrapper";
import UserRepo from "./AppWrapper";

const App = () => {
  const { setValue, isData, memoizedData } = useGetData();
  // const { setIsHideNavigationBar, ishideNavigationBar } =
  //   useContext(userProvider);
  return (
    <Appwrapper>
      <UserRepo>
        <div className="App">
          <DataProvider.Provider
            value={{ data: memoizedData, setCourse: setValue, isData: isData }}
          >
            <NavigationBar />
            <div className="content">
              <RouterProvider router={router}></RouterProvider>
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
  position: relative;
  display: flex;
  flex-flow: column;
  height: 100%;

  .content {
    overflow-y: auto;
  }
`;
