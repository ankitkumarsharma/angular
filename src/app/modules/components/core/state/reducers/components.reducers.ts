import { Action, createReducer, on } from '@ngrx/store';
import { TabDataTypes } from '../../components.types';
import * as action from '../actions/components.actions';
export const componentsDataKey = "homeData";
export const initialState: TabDataTypes = {
    tabs:{
        name:"",
        info:""
    }
}
const homeReducer = createReducer(
    initialState,
    on(action.saveTabTitle, (state:any,{payload}) =>{
        return {
            ...state,
            tabs: payload
        }
    }),
    on(action.destroyTabTitle, (state:any,{payload}) =>{
        return {
            ...state,
            tabs: payload
        }
    }),
);
export function reducer(state: TabDataTypes | undefined, action: Action) {
    return homeReducer(state, action)
}