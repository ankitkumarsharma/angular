import { AuthType } from './../../../auth/core/auth.types';
import { ActionReducer, ActionReducerMap, INIT, MetaReducer } from '@ngrx/store';
import { HomeTypes } from './../../../modules/home/core/home.types';
import * as homeReducers from '../../../modules/home/core/reducers/home.reducers';
import * as authReducers from '../../../auth/core/reducers/auth.reducers';
import { localStorageSync } from 'ngrx-store-localstorage';
export interface AppType {
    home?: HomeTypes,
    auth?: AuthType
}
export const reducers: ActionReducerMap<AppType> = {
    home: homeReducers.reducer,
    auth: authReducers.reducer
}
export function localStorageSyncReducer(redcer: ActionReducer<AppType>): ActionReducer<AppType>{
    return localStorageSync({
        keys: [
            homeReducers.homeDataKey,
            authReducers.authDataKey
        ],
        rehydrate: true,
        storage: sessionStorage,
    })(redcer);
}
// for on refresh data will not lost
export const hydrationMetaReducer = (
    reducer: ActionReducer<AppType>
  ): ActionReducer<AppType> => {
    return (state, action) => {
      if (action.type === INIT) {
        const storageValue = sessionStorage.getItem("state");
        if (storageValue) {
          try {
            return JSON.parse(storageValue);
          } catch {
            sessionStorage.removeItem("state");
          }
        }
      }
      const nextState = reducer(state, action);
      sessionStorage.setItem("state", JSON.stringify(nextState));
      return nextState;
    };
  };
export const metaReducers: Array<MetaReducer<any, any>> = [
    localStorageSyncReducer,
    hydrationMetaReducer
];