import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NonNullableFormBuilder} from "@angular/forms";

@Component({
  selector: 'wc-auth',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  template: `
    <div class="login-view">
      <div class="card">
        <div class="card-header">
          <a class="fill-current text-center" routerLink="/">
            <img class="logo" src="assets/imgs/logo/logo.svg" alt="logo"/>
          </a>
        </div>
        <div class="card-content">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: `
    .login-view {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .card {
        margin: 0 auto;
        @media(min-width: 300px) {
          width: 300px;
        }
      }

      .card-header {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .logo {
        width: 4rem;
        margin: 2em auto;
      }
    }

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  private fb = inject(NonNullableFormBuilder);
}
