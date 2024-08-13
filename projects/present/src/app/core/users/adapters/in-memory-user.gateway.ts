import {Observable, of} from "rxjs";
import {UserGateway} from "../user.gateway";
import {Role, User} from "../models/user.interface";
import {UserPayloadInterface} from "../models/user-payload.interface";
import {UserBuilder} from "../models/builders/user.builder";

export class InMemoryUsersGateway implements UserGateway {

  users: User[] = [];

  withUsers(users: User[]): InMemoryUsersGateway {
    this.users = users
    return this;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  createUser(payload: UserPayloadInterface): Observable<User> {
    const user: User = new UserBuilder()
      .withId(Math.random().toString(36).substr(2, 10))
      .withFirstName(payload.firstName)
      .withLastName(payload.lastName)
      .withEmail(payload.email)
      .withRole(payload.role as Role)
      .withUpdatedAt('2021-03-03T00:00:00.000')
      .withCreatedAt('2021-03-03T00:00:00.000')
      .build()
    return of(user);
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
