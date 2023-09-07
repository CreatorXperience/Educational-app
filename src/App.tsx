import { useEffect } from "react";
import "./App.css";
import { database } from "./database/db";
import { ref, set } from "firebase/database";

function App() {
  useEffect(() => {
    function writeUserData() {
      set(ref(database, "books/new-books-1"), {
        id: 2,
        image: "image_url_2.jpg",
        tag: "design",
        title: "Design Patterns: Elements of Reusable Object-Oriented Software",
        author: {
          name: "Erich Gamma",
          status: "software engineer",
          stars: 4.5,
        },
      });
    }

    writeUserData();
  });

  return <div className="App">App</div>;
}

export default App;
