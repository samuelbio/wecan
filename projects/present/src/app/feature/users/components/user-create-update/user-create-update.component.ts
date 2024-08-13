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
import {USER_ROLES_DATA} from "../../services/user.mock";
import {NgForOf} from "@angular/common";
import {UserRolePipe} from "../../pipe/user-role/user-role.pipe";
import {UserPayloadInterface} from "../../../../core/users/models/user-payload.interface";

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
  ],
  templateUrl: './user-create-update.component.html',
  styles: ''
})
export class UserCreateUpdateComponent implements OnInit {
  data = inject(NZ_MODAL_DATA);
  private modal = inject(NzModalRef);
  private fb = inject(FormBuilder);

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

  ngOnInit(): void {
    if (
      this.data
      && 'email' in this.data
      && 'id' in this.data
    ) {
      this.form.get('email')?.disable();
      this.form.patchValue(this.data)
    }
  }

  submitForm() {
    if (this.form.valid) {
      const userFormValue: UserPayloadInterface = this.form.getRawValue()
      this.modal.close({userFormValue})
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
