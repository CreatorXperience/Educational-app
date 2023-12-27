import axios from "axios"
import { BASE_URL } from "../../constants/constant"

let fetchData = async ()=>{
    let {data} = await axios.get(`${BASE_URL}/api/courses`)
    return data
  }



export default fetchData