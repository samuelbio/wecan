import {Observable, of} from "rxjs";
import {UserGateway} from "../user.gateway";
import {User} from "../models/user.interface";

export class InMemoryUsersGateway implements UserGateway {

  users: User[] = [];

  withUsers(users: User[]): InMemoryUsersGateway {
    this.users = users
    return this;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  deleteUser(id: string): Observable<null> {
    this.users = this.users.filter(user => user.id !== id)
    return of(null);
  }

  updateUser(id: string, user: User): Observable<null> {
    this.users = this.users.map((userItem) => userItem.id === id ? userItem : user);
    return of(null)
  }
}
