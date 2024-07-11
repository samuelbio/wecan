import { ChangeDetectionStrategy, Component } from '@angular/core';
import {CardComponent} from "../../../ui/card/card.component";

@Component({
  selector: 'wc-login',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './login.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

}
