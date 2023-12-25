import axios from "axios"
import { useQuery } from "react-query"


const useFetchData = ()=>{
    let fetcher = async ()=>{
        let {data} = await axios.get("https://educational-app-backend-production-6646.up.railway.app/api/courses")
        return data
      }
      let {data} = useQuery("fetch-data",  fetcher, {
        staleTime: 10000, refetchOnWindowFocus: true, 
      })
      return data
}

export default useFetchData