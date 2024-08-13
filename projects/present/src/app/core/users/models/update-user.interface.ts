import {User} from "./user.interface";

export type UpdateUserInterface = Omit<
  User,
  'id'
  | 'uid'
  |'createdAt'
  |'updatedAt'
>
