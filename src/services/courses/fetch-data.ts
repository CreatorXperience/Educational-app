import axios from "axios";
import { BASE_URL } from "../../constants/constant";
import { TDatabase } from "../../types/type";

let fetchData = async (count: number) => {
  let { data } = await axios.get(`${BASE_URL}/api/courses?count=${count}`);
  let courseData: TDatabase[] = data;
  return courseData;
};

export default fetchData;
