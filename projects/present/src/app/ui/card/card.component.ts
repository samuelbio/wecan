import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'wc-card',
  standalone: true,
  imports: [
    AuthComponent,
    AuthComponent
  ],
  templateUrl: './card.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

}
