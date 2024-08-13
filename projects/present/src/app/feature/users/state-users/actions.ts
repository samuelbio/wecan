import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {User} from "../../../core/users/models/user.interface";
import {BackendErrorsInterface} from "../../../core/types/backendError.interface";
import {UpdateUserInterface} from "../../../core/users/models/update-user.interface";


export const usersActions = createActionGroup({
  source: 'users',
  events: {
    'Get users': emptyProps(),
    'Get users success': props<{users: User[]}>(),
    'Get users failure': emptyProps(),

    'Add user': emptyProps(),
    'Add user success': props<{user: User}>(),
    'Add user failure': props<{errors: BackendErrorsInterface}>(),

    'Update user': props<{user: User}>(),
    'Update user selected': props<{userId: string, userFormValue: UpdateUserInterface}>(),
    'Update users success': emptyProps(),
    'Update users failure': props<{errors: BackendErrorsInterface}>(),

    'Send recovery password': emptyProps(),
    'Send recovery password success': emptyProps(),
    'Send recovery password failure': props<{errors: BackendErrorsInterface}>(),

    'Delete user': props<{userId: string}>(),
    'Delete users success': emptyProps(),
    'Delete users failure': emptyProps(),
  }
})
