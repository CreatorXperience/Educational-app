import { getDatabase } from "firebase/database";
import appInit from "../services/firebase";

const database = getDatabase(appInit);
export { database };
