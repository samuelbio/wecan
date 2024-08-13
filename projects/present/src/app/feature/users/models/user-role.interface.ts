import {RoleUnion, RoleValue} from "../../../core/users/models/user.interface";


export const ROLES_VALUE: Record<RoleUnion, RoleValue> = {
  DELEGATE: {
    color: 'purple',
    label: 'Délégué'
  },
  ADMINISTRATOR: {
    color: 'orange',
    label: 'Administrateur'
  },
  SUPERVISOR: {
    color: 'green',
    label: 'Superviseur'
  }
}

export const getRole = (userRole: RoleUnion): RoleValue => {
  return ROLES_VALUE[userRole]
}
