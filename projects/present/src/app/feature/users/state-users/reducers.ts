import {UsersStateInterface} from "../models/users-state.interface";
import {createFeature, createReducer, on} from "@ngrx/store";
import {usersActions} from "./actions";

const initialSate: UsersStateInterface = {
  isLoading: true,
  users: [],
  userId: null,
  validationErrors: null
}

const usersFeature = createFeature({
  name: 'users',
  reducer: createReducer(
    initialSate,
    on(usersActions.getUsers, (state: UsersStateInterface): UsersStateInterface => ({...state, isLoading: true})),
    on(usersActions.getUsersSuccess, (state: UsersStateInterface, {users}): UsersStateInterface => ({
      ...state,
      isLoading: false,
      users
    })),
    on(usersActions.updateUser, (state: UsersStateInterface): UsersStateInterface => ({
      ...state,
      isLoading: true,
    })),
    on(usersActions.updateUsersSuccess, (state: UsersStateInterface, {userId, userUpdateRequest}): UsersStateInterface => ({
      ...state,
      isLoading: false,
      users: state.users.map((userItem) => userItem.id === userId ? {...userItem, ...userUpdateRequest} : userItem)
    })),
    on(usersActions.deleteUser, (state: UsersStateInterface, {userId}): UsersStateInterface => ({
      ...state,
      isLoading: true,
      userId
    })),
    on(usersActions.deleteUsersSuccess, (state: UsersStateInterface): UsersStateInterface => ({
      ...state,
      isLoading: false,
      users: state.users.filter((userItem) => userItem.id !== state.userId)
    })),
    on(usersActions.addUser, (state: UsersStateInterface): UsersStateInterface => ({
      ...state,
      isLoading: true
    })),
    on(usersActions.addUserSuccess, (state: UsersStateInterface, {user}): UsersStateInterface => ({
      ...state,
      isLoading: false,
      users: [...state.users, user]
    }))
  )
})

export const {
  name: usersFeatureKey,
  reducer: usersReducer,
  selectUsers,
  selectIsLoading,
  selectValidationErrors,
} = usersFeature
