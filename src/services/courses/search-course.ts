import axios from "axios";
import { BASE_URL } from "../../constants/constant";
import { TDatabase } from "../../types/type";

let searchCourse = async (payload: { term: string; count: number }) => {
  try {
    let axiosPayload = await axios.post(
      `${BASE_URL}/search?count=${payload.count}`,
      {
        searchterm: payload.term,
      }
    );
    let data: TDatabase[] = axiosPayload.data;

    return data;
  } catch (e) {
    console.log(" an error occured", e);
  }
};

export default searchCourse;
