import { useEffect, useState } from "react";
import "./App.css";
import readData from "./database/crud/read";

import type { TDatabase } from "./types/type";
import auth from "./auth/auth";
import { User } from "firebase/auth";

function App() {
  const [database, setDatabase] = useState<TDatabase[] | null>();
  const [userInfo, setUserInfo] = useState<User | null>();
  const { getUserInfo, signUp, signIn } = auth();

  useEffect(() => {
    signIn("allyearmustobey@gmail.com", "1234567890");
    getUserInfo(setUserInfo);
    readData(setDatabase);
  }, []);

  console.log(userInfo);

  return (
    <div className="App">
      {database?.map((database) => {
        return (
          <div key={database.id}>
            {" "}
            <img src={database.image} alt="image" /> <h3>{database.title}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
