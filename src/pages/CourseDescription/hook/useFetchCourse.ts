import axios from "axios"
import { useQuery } from "react-query"

const useFetchCourse = (id: string)=>{
    let fetchCourse = async(id: string)=>{
        let {data} = await axios.get(`https://educational-app-backend-production-6646.up.railway.app/api/courses/${id}`)
        return data
    }
    const {data} = useQuery("course", ()=> fetchCourse(id) )
    return data
}

export default useFetchCourse