import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {User} from "../../../core/users/models/user.interface";
import {BackendErrorsInterface} from "../../../core/types/backendError.interface";
import {UserPayloadInterface} from "../../../core/users/models/user-payload.interface";
import {NotificationInterface} from "../../../core/types/notification.interface";


export const usersActions = createActionGroup({
  source: 'users',
  events: {
    'Get users': emptyProps(),
    'Get users success': props<{users: User[]}>(),
    'Get users failure': emptyProps(),

    'Add user': props<{userFormValue: UserPayloadInterface}>(),
    'Add user success': props<{user: User}>(),
    'Add user failure': props<{errors: BackendErrorsInterface}>(),

    'Update user': props<{userId: string, userFormValue: UserPayloadInterface}>(),
    'Update users success': props<{userId: string, userUpdateRequest: UserPayloadInterface}>(),
    'Update users failure': props<{errors: BackendErrorsInterface}>(),

    'Send recovery password': props<{email: string}>(),
    'Send recovery password success': props<{notification: NotificationInterface}>(),
    'Send recovery password failure': props<{errors: BackendErrorsInterface, notification: NotificationInterface}>(),

    'Delete user': props<{userId: string}>(),
    'Delete users success': props<{notification: NotificationInterface}>(),
    'Delete users failure': emptyProps(),
  }
})
