import "./App.css";
import LandingPage from "./components/landingPage";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useEffect } from "react";
import auth from "./auth/auth";
import NavigationBar from "./components/navigationBar";

function App() {
  useEffect(() => {
    auth().signIn("cola@gmail.com", "1234567890");
  }, []);
  return (
    <div className="App">
      <NavigationBar />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
