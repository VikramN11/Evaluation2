import { GET_LOCATION_FAILURE, GET_LOCATION_REQUEST, GET_LOCATION_SUCCESS } from "./actionType"


// GET
export const getlocationrequest = ()=>{
    return {type:GET_LOCATION_REQUEST}
}

export const getlocationsuccess = (payload)=>{
    return {type:GET_LOCATION_SUCCESS, payload}
}

export const getlocationfailure = ()=>{
    return {type:GET_LOCATION_FAILURE}
}