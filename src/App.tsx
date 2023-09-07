import { useEffect } from "react";
import "./App.css";
import { database } from "./database/db";
import { ref, set } from "firebase/database";
import createCourse from "./database/crud/create";

function App() {
  useEffect(() => {
    createCourse({
      image: "image_url_15.jpg",
      category: "design",
      title: "Interaction Design: Beyond Human-Computer Interaction",
      author: {
        name: "Jenny Preece",
        status: "interaction designer",
        stars: 4.5,
      },
    });
  });

  return <div className="App">App</div>;
}

export default App;
