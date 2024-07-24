import {CurrentUserInterface} from "./currentUser.interface";
import {BackendErrorsInterface} from "../../../core/auth/types/backendError.interface";

export interface AuthStateInterface {
  isSubmitted: boolean,
  isLoading: boolean,
  currentUser: CurrentUserInterface | null | undefined,
  validationErrors: BackendErrorsInterface | null
}
