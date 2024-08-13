import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {CommonModule, NgFor} from "@angular/common";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";
import {UserListActionsComponent} from "../user-list-actions/user-list-actions.component";
import {NzModalModule, NzModalService} from "ng-zorro-antd/modal";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzMessageModule, NzMessageService} from "ng-zorro-antd/message";
import {NzTagModule} from "ng-zorro-antd/tag";
import {UserCreateUpdateComponent} from "../user-create-update/user-create-update.component";
import {filter, Observable, Subject, takeUntil} from "rxjs";
import {NzAvatarComponent} from "ng-zorro-antd/avatar";
import {UserRolePipe} from "../../pipe/user-role/user-role.pipe";
import {User} from "../../../../core/users/models/user.interface";
import {Store} from "@ngrx/store";
import {selectUsers} from "../../state-users/reducers";
import {usersActions} from "../../state-users/actions";
import {UpdateUserInterface} from "../../../../core/users/models/update-user.interface";

@Component({
  selector: 'wc-user-list',
  standalone: true,
  imports: [
    NzTableModule,
    NzDividerModule,
    NzDropDownModule,
    NzIconModule,
    NzButtonModule,
    NgFor,
    NzModalModule,
    NzGridModule,
    NzMessageModule,
    CommonModule,
    NzTagModule,
    UserRolePipe,
    UserListActionsComponent,
    NzAvatarComponent
  ],
  templateUrl: './user-list.component.html',
  styles: ''
})
export class UserListComponent implements OnDestroy, OnInit {

  private store = inject(Store)

  users$: Observable<User[]> = this.store.select(selectUsers);

  private message = inject(NzMessageService);

  private onDestroy$: Subject<void> = new Subject();

  modal = inject(NzModalService)

  ngOnInit() {
    this.store.dispatch(usersActions.getUsers())
  }

  delete(userId: string) {
    this.store.dispatch(usersActions.deleteUser({userId}))
    // this.modal.confirm({
    //   nzTitle: '<i>Voulez vous supprimer cet utilisateur?</i>',
    //   nzContent: '<b>Cette action est definitve</b>',
    //   nzOnOk: () => this.userService.deleteUser(id)
    // })
  }

  createUser() {
    this.store.dispatch(usersActions.addUser())
    this.modal.create({
      nzTitle: 'Création',
      nzContent: UserCreateUpdateComponent,
    }).afterClose
      .pipe(
        takeUntil(this.onDestroy$),
        filter((result) => !!result),
      //   switchMap(async (user: User) => {
      //     const authResult = await this.authservice.createUser(user.email)
      //     return from([
      //       this.userService.addUser({...user, uid: authResult.user.uid}),
      //       this.authservice.resetPassword(user.email)
      //     ]);
      // })
      ).subscribe()
  }

  edit(user: User) {
    this.store.dispatch(usersActions.updateUser({user: user}))
    this.modal.create({
      nzTitle: 'Modification',
      nzContent: UserCreateUpdateComponent,
    }).afterClose.subscribe()
  }

  sendEmail(email: string) {
    this.store.dispatch(usersActions.sendRecoveryPassword())
    // this.modal.confirm({
    //   nzTitle: '<i>Voulez vous reinitialiser le mot de passe?</i>',
    //   nzContent: '<b>Cette action est definitve</b>',
    //   nzOnOk: async () => await this.authservice.resetPassword(email)
    // })
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
