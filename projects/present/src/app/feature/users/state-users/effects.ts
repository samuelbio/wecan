import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {UserGateway} from "../../../core/users/user.gateway";
import {usersActions} from "./actions";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {AuthGateway} from "../../../core/auth/auth.gateway";
import {NzNotificationService} from "ng-zorro-antd/notification";


export const getUsersEffect = createEffect((
  (
    $actions = inject(Actions),
    userService = inject(UserGateway)
  ) => {
    return $actions.pipe(
      ofType(usersActions.getUsers),
      switchMap(() => {
        return userService.getUsers().pipe(
          map((users) => usersActions.getUsersSuccess({users})),
          catchError(() => of(usersActions.getUsersFailure))
        )
      })
    )
  }),
  {functional: true}
)

export const createUserEffect = createEffect((
  (
    $actions = inject(Actions),
    userService = inject(UserGateway)
  ) => {
    return $actions.pipe(
      ofType(usersActions.addUser),
      switchMap(({userFormValue}) => {
        return userService.createUser(userFormValue).pipe(
          map((user) => usersActions.addUserSuccess({user})),
          catchError(() => of(usersActions.addUserFailure))
        )
      })
    )
  }),
  {functional: true}
)


export const updateUserEffect = createEffect((
    (
      $actions = inject(Actions),
      userService = inject(UserGateway)
    ) => {
      return $actions.pipe(
        ofType(usersActions.updateUser),
        switchMap(({userId, userFormValue}) => {
          return userService.updateUser(userId, userFormValue)
            .pipe(
              map(() => usersActions.updateUsersSuccess({
                userId,
                userUpdateRequest: userFormValue
              })),
              catchError(() => of(usersActions.getUsersFailure))
          )
        })
      )
    }),
  {functional: true}
)

export const recoveryPasswordEffect = createEffect((
  (
    $actions = inject(Actions),
    authService = inject(AuthGateway)
  ) => {
    return $actions.pipe(
      ofType(usersActions.sendRecoveryPassword),
      switchMap(({email}) => {
        return authService.resetPassword(email)
          .pipe(
            map(() => usersActions.sendRecoveryPasswordSuccess({
              notification: {
                title: 'Send recovery email',
                message: 'Email has been well sent !'
              }
            })),
            catchError((error) => of(usersActions.sendRecoveryPasswordFailure({
              errors: error,
              notification: {
                title: 'Email Recovery Password',
                message: 'Something was wrong'
              }
            })))
          )
      })
    )
  }),
  {functional: true}
)


export const deleteUserEffect = createEffect((
    (
      $actions = inject(Actions),
      userService = inject(UserGateway)
    ) => {
      return $actions.pipe(
        ofType(usersActions.deleteUser),
        switchMap(({userId}) => {
          return userService.deleteUser(userId).pipe(
            map(() => usersActions.deleteUsersSuccess({
              notification: {
                title: 'Delete User',
                message: 'User has been well deleted !'
              }
            })),
            catchError(() => of(usersActions.deleteUsersFailure))
          )
        })
      )
    }),
  {functional: true}
)

export const userGroupActionsSuccessEffect = createEffect((
  (
    $actions = inject(Actions),
    notificationService = inject(NzNotificationService)
  ) => {
    return $actions.pipe(
      ofType(
        usersActions.sendRecoveryPasswordSuccess,
        usersActions.deleteUsersSuccess
      ),
      tap(({notification}) => notificationService.success(notification.title, notification.message)),
    )
  }
  ),
  {functional: true, dispatch: false}
)

export const userGroupActionsFailureEffect = createEffect((
    (
      $actions = inject(Actions),
      notificationService = inject(NzNotificationService)
    ) => {
      return $actions.pipe(
        ofType(
          usersActions.sendRecoveryPasswordFailure,
        ),
        tap(({notification}) => notificationService.error(notification.title, notification.message)),
      )
    }
  ),
  {functional: true, dispatch: false}
)
