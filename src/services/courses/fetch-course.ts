import axios from "axios"
import { BASE_URL } from "../../constants/constant"

let fetchCourse = async(id: string)=>{
    let {data} = await axios.get(`${BASE_URL}/api/courses/${id}`)
    return data
}

export default fetchCourse