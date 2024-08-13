import { Routes } from '@angular/router';
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";

export const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/welcome' },
      { path: 'welcome', loadChildren: () => import('./feature/welcome/welcome.routes') },
      { path: 'users', loadChildren: () => import('./feature/users/user.routes') }
    ]
  },
  { path: 'auth', loadChildren: () => import('./feature/auth/auth.routes') },
];
