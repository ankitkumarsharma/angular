import { createAction, props } from "@ngrx/store";
import * as dataTypes from '../../components.types';

export const getTabTitle = createAction(
    '[Home] get tab title',
    props<{payload: dataTypes.TabsTypes}>()
);
export const saveTabTitle = createAction(
    '[Home] save tab title',
    props<{payload: dataTypes.TabsTypes}>()
);
export const destroyTabTitle = createAction(
    '[Home] destroy tab title',
    props<{payload: dataTypes.TabsTypes}>()
);