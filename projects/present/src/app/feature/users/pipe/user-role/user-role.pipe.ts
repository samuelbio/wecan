import { Pipe, PipeTransform } from '@angular/core';
import {RoleUnion, RoleValue} from "../../../../core/users/models/user.interface";
import {getRole} from "../../models/user-role.interface";

@Pipe({
  name: 'userRole',
  standalone: true
})
export class UserRolePipe implements PipeTransform {

  transform(value: RoleUnion): RoleValue {
    return getRole(value);
  }

}
