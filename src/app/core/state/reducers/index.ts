import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { HomeTypes } from './../../../modules/home/core/home.types';
import * as homeReducers from '../../../modules/home/core/reducers/home.reducers';
import { localStorageSync } from 'ngrx-store-localstorage';
export interface AppType {
    home?: HomeTypes
}
export const reducers: ActionReducerMap<AppType> = {
    home: homeReducers.reducer,
}
export function localStorageSyncReducer(redcer: ActionReducer<AppType>): ActionReducer<AppType>{
    return localStorageSync({
        keys: [
            homeReducers.homeDataKey,
        ],
        rehydrate: true,
        storage: sessionStorage,
    })(redcer);
}
export const metaReducers: Array<MetaReducer<any, any>> = [
    localStorageSyncReducer
];