import { ChangeDetectionStrategy, Component } from '@angular/core';
import {CardComponent} from "@ui/card/card.component";

@Component({
  selector: 'wc-forget-password',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './forget-password.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgetPasswordComponent {

}
