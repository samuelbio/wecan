import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {UserGateway} from "../../../core/users/user.gateway";
import {usersActions} from "./actions";
import {catchError, map, of, switchMap} from "rxjs";


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
          return userService.updateUser(userId, userFormValue).pipe(
            map(() => usersActions.updateUsersSuccess({userId, userUpdateRequest: userFormValue})),
            catchError(() => of(usersActions.getUsersFailure))
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
            map(() => usersActions.deleteUsersSuccess()),
            catchError(() => of(usersActions.deleteUsersFailure))
          )
        })
      )
    }),
  {functional: true}
)
