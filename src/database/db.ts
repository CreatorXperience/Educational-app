import { getDatabase } from "firebase/database";
import app from "../config/firebase";

const database = getDatabase(app);
export { database };
