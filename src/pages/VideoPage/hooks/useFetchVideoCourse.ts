import { useQuery } from "react-query"
import fetchData from "../../../services/courses/fetch-data"

const useFetchVideoCourse = ()=>{
    let {data}= useQuery("videos",fetchData)
    return data
}

export default useFetchVideoCourse