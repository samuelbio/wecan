import {Observable} from "rxjs";
import {User} from "./models/user.interface";
import {UserPayloadInterface} from "./models/user-payload.interface";

export abstract class UserGateway {
  abstract getUsers(): Observable<User[]>;
  abstract createUser(user: UserPayloadInterface): Observable<User>;
  abstract deleteUser(id: string): Observable<null>;
  abstract updateUser(id: string, user: UserPayloadInterface): Observable<null>;
}
