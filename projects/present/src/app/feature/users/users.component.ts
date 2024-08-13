import { ChangeDetectionStrategy, Component } from '@angular/core';
import {UserListComponent} from "./components/user-list/user-list.component";

@Component({
  selector: 'wc-users',
  standalone: true,
  imports: [
    UserListComponent
  ],
  template: `
    <wc-user-list></wc-user-list>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {

}
