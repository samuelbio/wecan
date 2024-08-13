import {Component, Input} from '@angular/core';
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzButtonModule} from "ng-zorro-antd/button";

@Component({
  selector: 'wc-user-list-item',
  standalone: true,
  imports: [
    NzButtonModule,
    NzDropDownModule,
  ],
  template: `
    <ng-content></ng-content>
  `,
  styleUrl: './user-list-item.component.less'
})
export class UserListItemComponent {
  @Input() data: any;
}
