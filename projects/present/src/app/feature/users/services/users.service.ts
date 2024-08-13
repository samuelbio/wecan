import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "../../../core/users/models/user.interface";
import {UserGateway} from "../../../core/users/user.gateway";

@Injectable({
  providedIn: 'root'
})
export class UsersService implements UserGateway {

  getUsers(): Observable<User[]>{
    return of() as Observable<User[]>;
  }

  updateUser(id: string, data: User) {
    console.log(id, data);
    return of(null);
  }

  deleteUser(id: string) {
    console.log(id)
    return of(null);
  }
}
