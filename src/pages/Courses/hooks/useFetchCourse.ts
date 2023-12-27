
import {  useMutation } from "react-query"

import searchCourse from "../../../services/courses/search-course"
import { useState } from "react"
import { TDatabase } from "../../../types/type"

const useSearchCourse = ()=> {
    let [isError, setIsError] = useState(false)
    let [isSuccess, setIsSucesss]  = useState(false)


let postSearchCourse = useMutation("search-course", searchCourse,{
    onError: () =>{setIsError(true)},
    onSuccess: ()=>{setIsSucesss(true)},
})

let mutateCourse = (term:string, count:number)=> {
    let payload = {term, count}
    let result = postSearchCourse.mutate(payload) as unknown
    return result as TDatabase[]
}

return {postSearchCourse,mutateCourse, isError, isSuccess}
}


export default useSearchCourse