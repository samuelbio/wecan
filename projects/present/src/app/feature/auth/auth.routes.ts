import {Routes} from "@angular/router";

export default <Routes> [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./login/login.component').then((c) => c.LoginComponent)
      }
    ]
  }
]
