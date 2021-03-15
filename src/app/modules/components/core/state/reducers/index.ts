import { ActionReducer, ActionReducerMap, INIT, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { TabDataTypes } from '../../components.types';
import * as componentReducers from '../reducers/components.reducers';
export interface AppType {
  tabsPanel?: TabDataTypes
}
export const reducers: ActionReducerMap<AppType> = {
  tabsPanel: componentReducers.reducer,
}
export function localStorageSyncReducer(redcer: ActionReducer<AppType>): ActionReducer<AppType> {
  return localStorageSync({
    keys: [
      componentReducers.componentsDataKey,
    ],
    rehydrate: true,
    storage: sessionStorage,
  })(redcer);
}
export const metaReducers: Array<MetaReducer<any, any>> = [
  localStorageSyncReducer,
];