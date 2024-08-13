import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {LoginRequestInterface} from "../models/loginRequest.interface";
import {BackendErrorsInterface} from "../../../core/types/backendError.interface";
import {CurrentUserInterface} from "../../../core/auth/types/currentUser.interface";
import {ForgotPasswordRequestInterface} from "../models/forgotPasswordRequest.interface";


export const authActions = createActionGroup({
  source: 'auth',
  events: {
    'Login': props<{request: LoginRequestInterface}>(),
    'Login success': props<{currentUser: CurrentUserInterface}>(),
    'Login failure': props<{errors: BackendErrorsInterface}>(),

    'Forgot password': props<{request: ForgotPasswordRequestInterface}>(),
    'Forgot password success': emptyProps(),
    'Forgot password failure': props<{errors: BackendErrorsInterface}>(),
  }
})
