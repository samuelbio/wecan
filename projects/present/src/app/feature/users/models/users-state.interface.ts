import {BackendErrorsInterface} from "../../../core/types/backendError.interface";
import {UpdateUserInterface} from "../../../core/users/models/update-user.interface";
import {User} from "../../../core/users/models/user.interface";

export interface UsersStateInterface {
  users: User[];
  userSelected: User | null;
  userFormValue: UpdateUserInterface | null;
  userId: string | null;
  isLoading: boolean;
  validationErrors: BackendErrorsInterface | null;
}
