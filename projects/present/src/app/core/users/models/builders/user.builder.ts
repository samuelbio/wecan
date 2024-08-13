import {Role, RoleUnion, User} from "../user.interface";

export class UserBuilder {
  protected id!: string;
  protected uid!: string;
  protected role!: RoleUnion;
  protected email!: string;
  protected firstName!: string;
  protected lastName!: string;
  protected createdAt!: string;
  protected updatedAt!: string;

  withId(id: string): UserBuilder {
    this.id = id;
    return this;
  }

  withUid(uid: string): UserBuilder {
    this.uid = uid;
    return this;
  }

  withRole(role: Role): UserBuilder {
    this.role = role;
    return this;
  }

  withEmail(email: string): UserBuilder {
    this.email = email;
    return this;
  }

  withFirstName(firstName: string): UserBuilder {
    this.firstName = firstName;
    return this;
  }

  withLastName(lastName: string): UserBuilder {
    this.lastName = lastName;
    return this;
  }

  withCreatedAt(createdAt: string): UserBuilder {
    this.createdAt = createdAt;
    return this;
  }

  withUpdatedAt(updatedAt: string): UserBuilder {
    this.updatedAt = updatedAt;
    return this;
  }

  build(): User {
    return  {
      id: this.id,
      uid: this.uid,
      role: this.role,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    }
  }
}

export class StubUserBuilder extends UserBuilder {
  protected override id: string = 'id';
  protected override email: string = 'exemplo@example.com';
  protected override firstName: string = 'John'
  protected override lastName: string = 'Doe';
  protected override uid: string = '3333-4444-3333-5555';
  protected override role: RoleUnion = 'ADMINISTRATOR';
  protected override createdAt: string = '2021-03-03T00:00:00.000Z';
  protected override updatedAt: string = '2021-03-03T00:00:00.000Z';
}
