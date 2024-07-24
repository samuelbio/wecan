import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzButtonModule} from "ng-zorro-antd/button";
import {authActions} from "../state-auth/actions";
import {LoginRequestInterface} from "../types/loginRequest.interface";
import {selectIsLoading, selectIsSubmitted} from "../state-auth/reducers";
import {Observable} from "rxjs";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {Store} from "@ngrx/store";

@Component({
  selector: 'wc-login',
  standalone: true,
  imports: [
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzGridModule,
    NzCheckboxModule,
    NzButtonModule,
    RouterModule,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './login.component.html',
  styles: `
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  private formBuilder = inject(NonNullableFormBuilder);
  #store = inject(Store)

  isLoading: Observable<boolean> = this.#store.select(selectIsLoading);
  isSubmitted: Observable<boolean> = this.#store.select(selectIsSubmitted);

  form: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }> = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  submitForm() {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAllAsTouched();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }

    const request: LoginRequestInterface = {
      user: this.form.getRawValue()
    }
    this.#store.dispatch(authActions.login({request}))
  }
}
