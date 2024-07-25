import {delay, Observable, of} from "rxjs";
import { CurrentUserInterface } from "../auth/types/currentUser.interface";
import {AuthGateway} from "../ports/auth.gateway";

export class InMemoryAuthGateway extends AuthGateway {
    user!: CurrentUserInterface;

    withUser(user: CurrentUserInterface): InMemoryAuthGateway {
      this.user = user;
      return this;
    }

    override login(email: string, password: string): Observable<CurrentUserInterface> {
      if (password === '123456') {
        throw 'Passwords do not match';
      }
      return of(this.user).pipe(delay(1000));
    }

    override resetPassword(email: string): Observable<null> {
      if (this.user.email !== email) {
        throw 'Email is not exist';
      }
      return of(null);
    }

}
