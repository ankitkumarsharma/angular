import { createAction, props } from "@ngrx/store"; 
import * as authType from '../auth.types';

export const saveLogin = createAction(
    '[Auth] save login data',
    props<{payload: authType.LoginTypes}>()
);
export const saveUser = createAction(
    '[Auth] save User data',
    props<{payload: authType.UserTypes[]}>()
);
export const saveIsAuth = createAction(
    '[Auth] save isauth data',
    props<{payload: boolean}>()
);
export const updateCurrentUser = createAction(
    '[Auth] update current user data',
    props<{payload: authType.UserTypes}>()
);