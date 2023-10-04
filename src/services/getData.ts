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

  let routes = ["python", "javascript", "node", "data"];

  const splitPath = path.split(" ");
  console.log(splitPath);

  for (let Apath of splitPath) {
    for (let route of routes) {
      if (Apath === route) {
        console.log(Apath, route);
        const dbReferenece = ref(db, `${route.toLowerCase()}/`);
        onValue(dbReferenece, (snapshot) => {
          const data = snapshot.val();
          appState(data);
        });
      }
    }
  }
};

export default getData;
