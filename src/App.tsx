import { useEffect } from "react";
import "./App.css";
import { database } from "./database/db";
import { ref, set } from "firebase/database";
import uploadCourse from "./database/crud/create";

function App() {
  useEffect(() => {
    uploadCourse("javascript");
  });

  return <div className="App">App</div>;
}

export default App;
