import { Action, createReducer, on } from '@ngrx/store';
import { HomeTypes } from './../home.types';
import * as homeAction from '../actions/home.actions';
export const homeDataKey = "homeData";
export const initialStateHome: HomeTypes = {
    homeTab:{
        name:"",
        info:""
    }
}
const homeReducer = createReducer(
    initialStateHome,
    on(homeAction.saveHomeTitle, (state:any,{payload}) =>{
        return {
            ...state,
            homeTab: payload
        }
    }),
);
export function reducer(state: HomeTypes | undefined, action: Action) {
    return homeReducer(state, action)
}