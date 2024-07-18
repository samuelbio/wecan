import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'wc-forget-password',
  standalone: true,
  imports: [],
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
