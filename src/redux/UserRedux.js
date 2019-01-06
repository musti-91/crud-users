import Immutable from 'seamless-immutable'
import { createActions, createReducer } from 'reduxsauce'

// State => users state
const INITIAL_STATE = Immutable({
  fetching: false,
  users: [],
  fetchingError: null
})

// Actions
const { Types, Creators } = createActions({
  fetchUsersStart: null,
  fetchUsersSuccess: ['users'],
  fetchUsersFailure: ['error'],
  resetFetchError: null
})

export const UserTypes = Types
export default Creators

export const fetchUsersStart = state =>
  state.merge({
    fetching: true,
    users: [],
    fetchingError: null
  })
export const fetchUsersSuccess = (state, { users }) =>
  state.merge({
    fetching: false,
    users,
    fetchingError: null
  })
export const fetchUsersFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    fetchingError: error
  })
export const resetFetchError = state => state.merge({ fetchingError: null })

// Types
export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_USERS_START]: fetchUsersStart,
  [Types.FETCH_USERS_SUCCESS]: fetchUsersSuccess,
  [Types.FETCH_USERS_FAILURE]: fetchUsersFailure,
  [Types.RESET_FETCH_ERROR]: resetFetchError
})
