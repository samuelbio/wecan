import {Routes} from "@angular/router";
import {AuthComponent} from "./auth.component";

export default <Routes> [
  {
    path: '', component: AuthComponent,
    children: [
      { path: '', pathMatch: 'full' , redirectTo: 'login' },
      {
        path: 'login',
        loadComponent: () => import('./login/login.component').then((c) => c.LoginComponent)
      },
      {
        path: 'forget-password',
        loadComponent: () => import('./forget-password/forget-password.component').then((c) => c.ForgetPasswordComponent)
      }
    ]
  }
]
