import {Observable} from "rxjs";
import {User} from "./models/user.interface";
import {UpdateUserInterface} from "./models/update-user.interface";

export abstract class UserGateway {
  abstract getUsers(): Observable<User[]>;
  abstract deleteUser(id: string): Observable<null>;
  abstract updateUser(id: string, user: UpdateUserInterface): Observable<null>;
}
