import {BackendErrorsInterface} from "../../../core/types/backendError.interface";
import {User} from "../../../core/users/models/user.interface";

export interface UsersStateInterface {
  users: User[];
  userId: string | null;
  isLoading: boolean;
  validationErrors: BackendErrorsInterface | null;
}
