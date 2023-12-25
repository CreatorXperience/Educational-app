import axios from "axios"
import { useQuery } from "react-query"

const useFetchVideoCourse = ()=>{
    const getVideoCourses = async()=>{
        let {data} = await axios.get("https://educational-app-backend-production-6646.up.railway.app/api/courses")
        return data
    }
    let {data}= useQuery("videos", getVideoCourses)
    return data
}

export default useFetchVideoCourse