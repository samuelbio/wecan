import {Component, inject, OnInit} from '@angular/core';
import {NZ_MODAL_DATA, NzModalModule, NzModalRef} from "ng-zorro-antd/modal";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
import {AsyncPipe, NgForOf} from "@angular/common";
import {UserRolePipe} from "../../pipe/user-role/user-role.pipe";
import {USER_ROLES_DATA} from "../../services/user.mock";
import {Store} from "@ngrx/store";
import {selectUsers, userSelected} from "../../state-users/reducers";
import {tap} from "rxjs";
import {User} from "../../../../core/users/models/user.interface";
import {UpdateUserInterface} from "../../../../core/users/models/update-user.interface";
import {usersActions} from "../../state-users/actions";

@Component({
  selector: 'wc-user-create-update',
  standalone: true,
  imports: [
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzGridModule,
    ReactiveFormsModule,
    NzModalModule,
    NzSelectModule,
    NgForOf,
    UserRolePipe,
    AsyncPipe,
  ],
  templateUrl: './user-create-update.component.html',
  styles: ''
})
export class UserCreateUpdateComponent {
  private modal = inject(NzModalRef);
  private fb = inject(FormBuilder);

  private store = inject(Store)

  data$ = this.store.select(userSelected).pipe(tap((user) => {
    this.setForm(user!)
  }));

  private userId!: string;

  roles = USER_ROLES_DATA
  requiredText: string = 'Champ obligatoire';
  form: FormGroup = this.fb.group({
    email: ['', [
      Validators.compose([Validators.required, Validators.email]),
      // Validators.composeAsync([userEmailValidator(this.userService)])
    ]],
    lastName: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    role: [this.roles.at(0), [Validators.required]],
  });


  setForm(user: User) {
    this.form.get('email')?.disable();
    this.form.patchValue(user)
    this.userId = user.id!;
  }

  submitForm() {
    if (this.form.valid) {
      this.store.dispatch(usersActions.updateUserSelected({userId: this.userId, userFormValue: this.form.value}))
      this.modal.close()
    } else {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAllAsTouched();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  close() {
    this.modal.close(null);
  }
}
