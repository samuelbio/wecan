import {Observable} from "rxjs";
import {CurrentUserInterface} from "../auth/types/currentUser.interface";

export abstract class AuthGateway {
  abstract login(email: string, password: string): Observable<CurrentUserInterface>;
  abstract resetPassword(email: string): Observable<null>;
}
