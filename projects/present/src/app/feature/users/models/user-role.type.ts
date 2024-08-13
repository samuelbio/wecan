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
