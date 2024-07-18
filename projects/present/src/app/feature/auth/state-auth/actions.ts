import {createActionGroup, props} from "@ngrx/store";
import {LoginRequestInterface} from "../types/loginRequest.interface";
import {BackendErrorsInterface} from "../../../core/types/backendError.interface";
import {CurrentUserInterface} from "../types/currentUser.interface";


export const authActions = createActionGroup({
  source: 'auth',
  events: {
    'Login': props<{request: LoginRequestInterface}>(),
    'Login success': props<{current: CurrentUserInterface}>(),
    'Login failure': props<{errors: BackendErrorsInterface}>()
  }
})
