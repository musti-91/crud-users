import Immutable from 'seamless-immutable'
import { createActions, createReducer } from 'reduxsauce'

// State => create Immutable state.
const INITIAL_STATE = Immutable({
  fetching: false,
  users: [],
  fetchingError: {},
  // get user
  userId: null,
  busyGettingUser: false,
  getUserError: null,
  // add user
  busyAddingUser: false,
  newUser: null,
  addingUserError: null,
  // update User
  updatedUserId: null,
  busyUpdatingUser: false,
  updatingUserError: null,
  // delete user
  busyDeletingUser: false,
  deleteUserError: null,
  deletedUserId: null
})

// Define Actions.
const { Types, Creators } = createActions({
  fetchUsersStart: null,
  fetchUsersSuccess: ['users'],
  fetchUsersFailure: ['error'],
  resetFetchError: null,
  // fetch user
  getUser: ['id'],
  getUserSuccess: ['user'],
  getUserFailure: ['error'],
  resetGetUserError: null,
  // add user
  addUser: ['newUser'],
  addUserSuccess: ['newUser'],
  addUserFailure: ['error'],
  resetAddUserError: null,
  // update user
  updateUser: ['updatedUserId'],
  updateUserSuccess: ['updatedUser'],
  updateUserFailure: ['error'],
  resetUpdateUserError: null,
  // delete user
  deleteUser: ['userId'],
  deleteUserSuccess: ['userId'],
  deleteUserFailure: ['error'],
  resetDeleteUserError: null
})

export const UserTypes = Types
export default Creators
// actions functions
// fetching users
export const fetchUsersStart = state =>
  state.merge({
    fetching: true,
    users: [],
    fetchingError: {}
  })
export const fetchUsersSuccess = (state, { users }) =>
  state.merge({
    fetching: false,
    users,
    fetchingError: {}
  })
export const fetchUsersFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    fetchingError: error
  })
export const resetFetchError = state => state.merge({ fetchingError: null })
// fetch user
export const getUser = (state, { id }) =>
  state.merge({
    busyGettingUser: true,
    userId: id
  })
export const getUserSuccess = (state, { id }) =>
  state.merge({
    busyGettingUser: false,
    userId: INITIAL_STATE.userId,
    getUserError: null
  })
export const getUserFailure = (state, { error }) =>
  state.merge({
    getUserError: error,
    userId: null
  })
export const resetGetUserError = state => state.merge({ getUserError: null })
// add user
export const addUser = (state, { newUser }) =>
  state.merge({
    newUser,
    busyAddingUser: true
  })
export const addUserSuccess = (state, { newUser }) =>
  state.merge({
    newUser,
    busyAddingUser: false,
    addingUserError: null
  })
export const addUserFailure = (state, { error }) =>
  state.merge({
    addingUserError: error,
    newUser: null
  })
export const resetAddUserError = state => state.merge({ addingUserError: null })
// update user
export const updateUser = (state, { updatedUserId }) =>
  state.merge({
    updatedUserId,
    busyUpdatingUser: true
  })
export const updateUserSuccess = (state, { updatedUserId }) =>
  state.merge({
    updatedUserId: updateUser === INITIAL_STATE.updatedUserId && updateUser,
    busyUpdatingUser: false
  })
export const updateUserFailure = (state, { error }) =>
  state.merge({
    busyUpdatingUser: false,
    updatingUserError: error
  })
export const resetUpdateUserError = state =>
  state.merge({ updatingUserError: null })
// delete user
export const deleteUser = (state, { id }) =>
  state.merge({
    busyDeletingUser: true,
    deletedUserId: id
  })
export const deleteUserSuccess = (state, { id }) =>
  state.merge({
    busyDeletingUser: false,
    users: [...state.users.filter(user => user.id !== id)],
    deleteUserError: null,
    deletedUserId: id
  })
export const deleteUserFailure = (state, { error }) =>
  state.merge({
    deleteUserError: error,
    deletedUserId: null
  })
export const resetDeleteUserError = state =>
  state.merge({ deletePostError: null })

// Types
export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_USERS_START]: fetchUsersStart,
  [Types.FETCH_USERS_SUCCESS]: fetchUsersSuccess,
  [Types.FETCH_USERS_FAILURE]: fetchUsersFailure,
  [Types.RESET_FETCH_ERROR]: resetFetchError,
  // get user
  [Types.GET_USER]: getUser,
  [Types.GET_USER_SUCCESS]: getUserSuccess,
  [Types.GET_USER_FAILURE]: getUserFailure,
  [Types.RESET_GET_USER_ERROR]: resetGetUserError,
  // add user
  [Types.ADD_USER]: addUser,
  [Types.ADD_USER_SUCCESS]: addUserSuccess,
  [Types.ADD_USER_FAILURE]: addUserFailure,
  [Types.RESET_ADD_USER_ERROR]: resetAddUserError,
  // update user
  [Types.UPDATE_USER]: updateUser,
  [Types.UPDATE_USER_SUCCESS]: updateUserSuccess,
  [Types.UPDATE_USER_FAILURE]: updateUserFailure,
  [Types.RESET_UPDATE_USER_ERROR]: resetUpdateUserError,
  // delete user
  [Types.DELETE_USER]: deleteUser,
  [Types.DELETE_USER_SUCCESS]: deleteUserSuccess,
  [Types.DELETE_USER_FAILURE]: deleteUserFailure,
  [Types.RESET_DELETE_USER_ERROR]: resetDeleteUserError
})
