import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import styled from "styled-components";
import router from "./router";

import "./App.css";

import NavigationBar from "./components/navigationBar";
import Footer from "./components/Footer";

import { useState } from "react";
import { createContext } from "react";

export const NavContext = createContext<React.Dispatch<
  React.SetStateAction<boolean>
> | null>(null);

let client = new QueryClient();
const App = () => {
  const [isHideNav, setIsHideNav] = useState(true);

  return (
    <QueryClientProvider client={client}>
      <Appwrapper>
        {/* <UserRepo> */}
        <div className="App">
          {isHideNav ? <NavigationBar /> : ""}
          <div className="content">
            <NavContext.Provider value={setIsHideNav}>
              <RouterProvider router={router}></RouterProvider>
            </NavContext.Provider>
          </div>
          {isHideNav ? <Footer /> : ""}
        </div>
        {/* </UserRepo> */}
      </Appwrapper>
    </QueryClientProvider>
  );
};

export default App;

const Appwrapper = styled.div`
  height: 100%;
`;
