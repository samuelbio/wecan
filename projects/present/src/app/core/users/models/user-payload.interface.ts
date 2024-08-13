import {User} from "./user.interface";

export type UserPayloadInterface = Omit<
  User,
  'id'
  | 'uid'
  |'createdAt'
  |'updatedAt'
>
