import { createAction, props } from "@ngrx/store"; 
import * as authType from '../auth.types';

export const saveLogin = createAction(
    '[Auth] save login data',
    props<{payload: authType.LoginTypes}>()
);