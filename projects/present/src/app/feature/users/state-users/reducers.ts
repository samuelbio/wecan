import {UsersStateInterface} from "../models/users-state.interface";
import {createFeature, createReducer, on} from "@ngrx/store";
import {usersActions} from "./actions";

const initialSate: UsersStateInterface = {
  isLoading: true,
  users: [],
  userSelected: null,
  userFormValue: null,
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
    on(usersActions.updateUser, (state: UsersStateInterface, {user}): UsersStateInterface => ({
      ...state,
      isLoading: false,
      userSelected: user
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
    on(usersActions.updateUserSelected, (state: UsersStateInterface, {userId, userFormValue}): UsersStateInterface => ({
      ...state,
      isLoading: false,
      userId: userId,
      userFormValue: userFormValue,
      users: state.users.map((userItem) => userItem.id === state.userSelected?.id ? {...userItem, ...state.userSelected} : userItem)
    })),
    on(usersActions.updateUsersSuccess, (state: UsersStateInterface): UsersStateInterface => ({
      ...state,
      isLoading: false,
      userFormValue: null,
      userSelected: null,
      users: state.users.map((userItem) => userItem.id === state.userId ? {...userItem, ...state.userFormValue} : userItem)
    })),
  )
})

export const {
  name: usersFeatureKey,
  reducer: usersReducer,
  selectUserSelected: userSelected,
  selectUsers,
  selectIsLoading,
  selectValidationErrors,
} = usersFeature
