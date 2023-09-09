import { useEffect, useState } from "react";
import "./App.css";
import readData from "./database/crud/read";

import type { TDatabase } from "./types/type";

function App() {
  const [database, setDatabase] = useState<TDatabase[] | null>();
  useEffect(() => {
    readData(setDatabase);
  }, []);

  return (
    <div className="App">
      <ul>
        {database?.map((database) => {
          return (
            <h2 key={database.id}>
              {" "}
              <img src={database.image} alt="image" />{" "}
            </h2>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
