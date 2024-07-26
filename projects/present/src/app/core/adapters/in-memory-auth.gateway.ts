import {delay, map, Observable, of, switchMap, throwError} from "rxjs";
import { CurrentUserInterface } from "../auth/types/currentUser.interface";
import {AuthGateway} from "../ports/auth.gateway";

export class InMemoryAuthGateway extends AuthGateway {
    user!: CurrentUserInterface;

    withUser(user: CurrentUserInterface): InMemoryAuthGateway {
      this.user = user;
      return this;
    }

    override login(email: string, password: string): Observable<CurrentUserInterface> {
      return of(password).pipe(
        delay(1000),
        switchMap((password) => {
          return '123456' === password
            ? throwError(() => ({
              email: 'Passwords do not match'
            }))
            : of(this.user)
        })
      )
    }

    override resetPassword(email: string): Observable<null> {
      return of(email).pipe(
        delay(1000),
        switchMap((email) => {
          return this.user.email !== email
            ? throwError(() => ({
              email: 'Email does not exists'
            }))
            : of(null)
        })
      )
    }

}
