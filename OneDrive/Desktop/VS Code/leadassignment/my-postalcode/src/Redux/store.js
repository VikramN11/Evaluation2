import {legacy_createStore} from "redux";
import { reducer } from "./reducer";

const initialState = {location : [], isLoading : false, isError : false};

export const store = legacy_createStore(reducer, initialState);