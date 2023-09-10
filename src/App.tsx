import { useEffect, useState } from "react";
import "./App.css";
import readData from "./services/read";

import type { TDatabase } from "./types/type";
import auth from "./auth/auth";
import { User } from "firebase/auth";
import signInWithGitOauth from "./auth/gitOauth";
import { illustration } from "./constants/images";

function App() {
  return <div className="App"></div>;
}

export default App;
