import type { TDatabase } from "../types/type";
import { getDatabase, onValue, ref } from "firebase/database";
import app from "../config/firebase";

const readData = (
  appState: React.Dispatch<React.SetStateAction<TDatabase[] | null | undefined>>
) => {
  const db = getDatabase(app);
  const dbReferenece = ref(db, "data/");
  onValue(dbReferenece, (snapshot) => {
    const data = snapshot.val();
    appState(data);
  });
};

export default readData;
