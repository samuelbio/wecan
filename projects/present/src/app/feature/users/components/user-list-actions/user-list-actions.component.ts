import {Component, EventEmitter, Output} from '@angular/core';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";

@Component({
  selector: 'wc-user-list-actions',
  standalone: true,
  imports: [
    NzButtonModule,
    NzDropDownModule,
    NzIconModule
  ],
  template: `
    <button nz-button nz-dropdown [nzDropdownMenu]="menu4">
      Actions
      <span nz-icon nzType="down"></span>
    </button>
    <nz-dropdown-menu #menu4="nzDropdownMenu">
      <ul nz-menu>
        <li nz-menu-item (click)="send.emit()">Renvoyer mail</li>
        <li nz-menu-item (click)="edit.emit()">Modification</li>
        <li nz-menu-item (click)="delete.emit()">Supprimer</li>
        <ng-content></ng-content>
      </ul>
    </nz-dropdown-menu>
  `,
  styleUrl: './user-list-actions.component.less'
})
export class UserListActionsComponent {
  @Output() delete = new EventEmitter();
  @Output() send = new EventEmitter();
  @Output() edit = new EventEmitter();
}
