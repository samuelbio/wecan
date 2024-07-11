import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'wc-auth',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
    <router-outlet/>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {

}
