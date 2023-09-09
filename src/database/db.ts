import { getDatabase } from "firebase/database";
import app from "../services/firebase";

const database = getDatabase(app);
export { database };
