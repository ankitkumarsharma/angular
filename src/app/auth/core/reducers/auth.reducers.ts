import { AuthType } from './../auth.types';
import { Action, createReducer, on } from '@ngrx/store';
import * as authAction from '../actions/auth.actions';
export const authDataKey = "authData";
export const initialStateAuth: AuthType = {
    user: [],
    isAuth: false,
    currentUser: null
}
const authReducer = createReducer(
    initialStateAuth,
    on(authAction.saveLogin, (state:any,{payload}) =>{
        return {
            ...state,
            login: payload
        }
    }),
    on(authAction.saveUser, (state:any,{payload}) =>{
        return {
            ...state,
            user: [...state.user, payload]
        }
    }),
    on(authAction.saveIsAuth, (state:any,{payload}) =>{
        return {
            ...state,
            isAuth: payload
        }
    }),
    on(authAction.updateCurrentUser, (state:any,{payload}) =>{
        return {
            ...state,
            currentUser: payload
        }
    }),
);
export function reducer(state: AuthType | undefined, action: Action) {
    return authReducer(state, action)
}