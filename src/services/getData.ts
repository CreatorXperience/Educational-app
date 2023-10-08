import type { TDatabase } from "../types/type";
import { getDatabase, onValue, ref } from "firebase/database";
import app from "../config/firebase";

const getData = <T>(
  appState: React.Dispatch<React.SetStateAction<T>>,
  path: string
) => {
  const db = getDatabase(app);

  const dbReferenece = ref(db, `${path.toLowerCase()}/`);
  onValue(dbReferenece, (snapshot) => {
    const data = snapshot.val();
    appState(data);
  });
};

export default getData;
