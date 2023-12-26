import { useQuery } from "react-query"
import fetchCourse from "../../../services/courses/fetch-course"

const useFetchCourse = (id: string)=>{
  
    const {data} = useQuery("course", ()=> fetchCourse(id) )

    return data
}

export default useFetchCourse