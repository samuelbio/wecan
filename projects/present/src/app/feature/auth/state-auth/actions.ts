import {createActionGroup, props} from "@ngrx/store";
import {LoginRequestInterface} from "../types/loginRequest.interface";
import {BackendErrorsInterface} from "../../../core/auth/types/backendError.interface";
import {CurrentUserInterface} from "../types/currentUser.interface";
import {ForgotPasswordRequestInterface} from "../types/forgotPasswordRequest.interface";


export const authActions = createActionGroup({
  source: 'auth',
  events: {
    'Login': props<{request: LoginRequestInterface}>(),
    'Login success': props<{currentUser: CurrentUserInterface}>(),
    'Login failure': props<{errors: BackendErrorsInterface}>(),

    'Forgot password': props<{request: ForgotPasswordRequestInterface}>(),
    'Forgot password success': props<{currentUser: CurrentUserInterface}>(),
    'Forgot password failure': props<{errors: BackendErrorsInterface}>(),
  }
})
