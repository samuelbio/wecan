import {Routes} from "@angular/router";
import {AuthComponent} from "./auth.component";
import {provideState} from "@ngrx/store";
import {authFeatureKey, authReducer} from "./state-auth/reducers";
import {provideEffects} from "@ngrx/effects";
import * as authEffects from "./state-auth/effects";

export default <Routes> [
  {
    path: '', component: AuthComponent,
    providers: [
      provideState(authFeatureKey, authReducer),
      provideEffects(authEffects)
    ],
    children: [
      { path: '', pathMatch: 'full' , redirectTo: 'login' },
      {
        path: 'login',
        loadComponent: () => import('./login/login.component').then((c) => c.LoginComponent)
      },
      {
        path: 'forgot-password',
        loadComponent: () => import('./forget-password/forget-password.component').then((c) => c.ForgetPasswordComponent)
      }
    ]
  }
]
