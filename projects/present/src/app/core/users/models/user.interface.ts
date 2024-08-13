
export type User = {
  id?: string;
  uid: string;
  role: RoleUnion;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}

export enum Role {
  'DELEGATE'= 'DELEGATE',
  'ADMINISTRATOR' = 'ADMINISTRATOR',
  'SUPERVISOR' = 'SUPERVISOR'
}

export type RoleUnion = keyof typeof Role;

export interface RoleValue {
  color: string;
  label: string;
}
