import { createAction, props } from "@ngrx/store";
import * as homeTypes from '../home.types';

export const getHomeTitle = createAction(
    '[Home] get home title',
    props<{payload: homeTypes.HomeTabsTypes}>()
);
export const saveHomeTitle = createAction(
    '[Home] save home title',
    props<{payload: homeTypes.HomeTabsTypes}>()
);