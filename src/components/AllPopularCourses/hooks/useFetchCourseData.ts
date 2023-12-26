import { useQuery } from "react-query"
import fetchData from "../../../services/courses/fetch-data"


const useFetchData = ()=>{
      let {data} = useQuery("fetch-data",  fetchData, {
        staleTime: 10000, refetchOnWindowFocus: true, 
      })
      return data
}

export default useFetchData