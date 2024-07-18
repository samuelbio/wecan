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
      isSubmitted: true
    })),
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
