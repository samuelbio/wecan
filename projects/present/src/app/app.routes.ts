import { Routes } from '@angular/router';
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";

export const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/welcome' },
      { path: 'welcome', loadChildren: () => import('./feature/welcome/welcome.routes') }
    ]
  },
  { path: 'login', loadChildren: () => import('./feature/auth/auth.routes') }
];
