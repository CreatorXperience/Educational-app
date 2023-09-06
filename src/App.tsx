import { useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./App.css";
import appInit from "./services/firebase";

function App() {
  const auth = getAuth(appInit);

  useEffect(() => {
    const fetch = async (email: string, password: string) => {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(response.user);
    };
  });

  return <div className="App">App</div>;
}

export default App;
