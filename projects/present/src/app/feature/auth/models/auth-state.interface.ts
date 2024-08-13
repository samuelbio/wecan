import {CurrentUserInterface} from "../../../core/auth/types/currentUser.interface";
import {BackendErrorsInterface} from "../../../core/types/backendError.interface";

export interface AuthStateInterface {
  isSubmitted: boolean,
  isLoading: boolean,
  currentUser: CurrentUserInterface | null | undefined,
  validationErrors: BackendErrorsInterface | null
}
