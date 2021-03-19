import { AuthType } from './../auth.types';
import { Action, createReducer, on } from '@ngrx/store';
import * as authAction from '../actions/auth.actions';
export const authDataKey = "authData";
export const initialStateAuth: AuthType = {
    login: {},
    signup: {}
}
const authReducer = createReducer(
    initialStateAuth,
    on(authAction.saveLogin, (state:any,{payload}) =>{
        return {
            ...state,
            login: payload
        }
    }),
);
export function reducer(state: AuthType | undefined, action: Action) {
    return authReducer(state, action)
}