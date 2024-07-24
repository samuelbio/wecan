import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {authActions} from "./actions";
import {catchError, delay, of, switchMap, tap} from "rxjs";
import {CurrentUserInterface} from "../types/currentUser.interface";
import {Router} from "@angular/router";
import {NzNotificationService} from "ng-zorro-antd/notification";

export const loginEffect = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(authActions.login),
      switchMap(() => {
          const currentUser: CurrentUserInterface = {
            firstName: "samuel",
            lastName: "BIO",
            email: "biosamuel7@gmail.com"
          }
        return of(authActions.loginSuccess({currentUser})).pipe(delay(1000))
      }),
      catchError((error) => of(authActions.loginFailure({errors: {httpError: error}})))
    )
  },
  {functional: true}
)

export const redirectAfterLoginEffect = createEffect(
  (
    actions$ = inject(Actions),
    router = inject(Router)
    ) => {
    return actions$.pipe(
      ofType(authActions.loginSuccess),
      tap(() => router.navigateByUrl('/'))
    )
  },
  {functional: true, dispatch: false}
)


export const forgotPasswordEffect = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(authActions.forgotPassword),
      switchMap(({request}) => {
        const currentUser: CurrentUserInterface = {
          firstName: "samuel",
          lastName: "BIO",
          email: "biosamuel7@gmail.com"
        }

        if (request.user.email !== "biosamuel7@gmail.com") {
          throw {email:  'Email is not correct'}
        }
        return of(authActions.forgotPasswordSuccess({currentUser})).pipe(delay(1000))
      }),
      catchError((error) => of(authActions.forgotPasswordFailure({errors: error})))
    )
  },
  {functional: true}
)

export const successForgotPasswordEffect = createEffect(
  (
    actions$ = inject(Actions),
    notification = inject(NzNotificationService)
  ) => {
    return actions$.pipe(
      ofType(authActions.forgotPasswordSuccess),
      tap(() => {
        notification.success('Your password reset successully', 'Message has been sent to you for reset passsword')
      })
    )
  },
  {functional: true, dispatch: false}
)

export const failureForgotPasswordEffect = createEffect(
  (
    actions$ = inject(Actions),
    notification = inject(NzNotificationService)
  ) => {
    return actions$.pipe(
      ofType(authActions.forgotPasswordFailure),
      tap(() => {
        notification.error('Your password failure', 'Message has not been sent to you for reset passsword')
      })
    )
  },
  {functional: true, dispatch: false}
)
