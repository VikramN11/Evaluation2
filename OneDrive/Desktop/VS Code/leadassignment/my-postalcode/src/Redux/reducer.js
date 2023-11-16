import { GET_LOCATION_FAILURE, GET_LOCATION_REQUEST, GET_LOCATION_SUCCESS } from "./actionType";


export const reducer = (state, {type, payload}) =>{
    switch(type){
        case GET_LOCATION_REQUEST :
            return {...state, isLoading : true}
        case GET_LOCATION_SUCCESS :
            return {...state, location : [...state.location, payload], isLoading : false}
        case GET_LOCATION_FAILURE :
            return {...state, isLoading : false, isError : true}
        default :
            return state;
    }
}