import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CardComponent} from "../../../ui/card/card.component";
import {NzFormModule} from "ng-zorro-antd/form";
import {Store} from "@ngrx/store";
import {authActions} from "../state-auth/actions";
import {ForgotPasswordRequestInterface} from "../types/forgotPasswordRequest.interface";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzInputModule} from "ng-zorro-antd/input";
import {combineLatest} from "rxjs";
import {selectIsLoading} from "../state-auth/reducers";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'wc-forget-password',
  standalone: true,
  imports: [
    CardComponent,
    NzInputModule,
    NzFormModule,
    NzGridModule,
    NzButtonModule,
    ReactiveFormsModule,
    NgIf,
    AsyncPipe,
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
  #formBuilder: FormBuilder = inject(FormBuilder);
  #store = inject(Store)

  forgetPasswordForm: FormGroup = this.#formBuilder.nonNullable.group({
    email: [null, [Validators.required, Validators.email]]
  })

  data$ = combineLatest({
    isLoading: this.#store.select(selectIsLoading)
  })

  resetPassword() {
    if (this.forgetPasswordForm.invalid) {
      Object
        .values(this.forgetPasswordForm.controls)
        .forEach(control => {
        if (control.invalid) {
          control.markAllAsTouched();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }
    const request: ForgotPasswordRequestInterface = {
      user: {...this.forgetPasswordForm.getRawValue()}
    }
    return this.#store.dispatch(authActions.forgotPassword({request}))
  }
}
