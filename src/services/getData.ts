import type { TDatabase } from "../types/type";
import { getDatabase, onValue, ref } from "firebase/database";
import app from "../config/firebase";

const getData = (
  appState: React.Dispatch<
    React.SetStateAction<TDatabase[] | null | undefined>
  >,
  path: string
) => {
  const db = getDatabase(app);
  if (path === "") {
    path = "data";
  }
  const dbReferenece = ref(db, `${path}/`);
  onValue(dbReferenece, (snapshot) => {
    const data = snapshot.val();
      appState(data);
  });
};

export default getData;
