import {createFeature, createReducer, on} from "@ngrx/store";
import {AuthStateInterface} from "../types/auth-state.interface";
import {authActions} from "./actions";

const initialState: AuthStateInterface = {
  isSubmitted: false,
  isLoading: false,
  currentUser: undefined,
  validationErrors: null
}

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.login, (state: AuthStateInterface): AuthStateInterface => ({
      ...state,
      isLoading: true,
      isSubmitted: true
    })),
    on(authActions.loginSuccess, (state: AuthStateInterface, {currentUser}): AuthStateInterface => ({
      ...state,
      isLoading: false,
      currentUser,
      validationErrors: null
    })),
    on(authActions.loginFailure, (state: AuthStateInterface, {errors}): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isSubmitted: false,
      validationErrors: errors
    })),
    on(authActions.forgotPassword, (state: AuthStateInterface): AuthStateInterface => ({
      ...state,
      isLoading: true,
      isSubmitted: true
    })),
    on(authActions.forgotPasswordSuccess, (state: AuthStateInterface): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isSubmitted: false,
      validationErrors: null
    })),
    on(authActions.forgotPasswordFailure, (state: AuthStateInterface, {errors}): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isSubmitted: false,
      validationErrors: errors
    }))
  ),
})

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsLoading,
  selectIsSubmitted,
  selectCurrentUser,
  selectValidationErrors,
} = authFeature
