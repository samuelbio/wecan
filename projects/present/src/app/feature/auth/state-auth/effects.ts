import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {authActions} from "./actions";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {Router} from "@angular/router";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {AuthGateway} from "../../../core/auth/auth.gateway";

export const loginEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthGateway)
  ) => {
    return actions$.pipe(
      ofType(authActions.login),
      switchMap(({request}) => authService
        .login(request.user.email, request.user.password)
        .pipe(
          map((currentUser) => authActions.loginSuccess({currentUser})),
          catchError((error) => of(authActions.loginFailure({errors: {httpError: error}})))
        )
      )
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
  (
    actions$ = inject(Actions),
    authService = inject(AuthGateway)
  ) => {
    return actions$.pipe(
      ofType(authActions.forgotPassword),
      switchMap(({request}) => {
        return authService.resetPassword(request.user.email).pipe(
          map(() => authActions.forgotPasswordSuccess()),
          catchError((error) =>  of(authActions.forgotPasswordFailure({errors: error})))
        )
      })
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
