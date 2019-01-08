import Immutable from 'seamless-immutable'
import { createActions, createReducer } from 'reduxsauce'

// State => create Immutable state.
const INITIAL_STATE = Immutable({
  fetching: false,
  users: [],
  fetchingError: {}
})

// Define Actions.
const { Types, Creators } = createActions({
  fetchUsersStart: null,
  fetchUsersSuccess: ['users'],
  fetchUsersFailure: ['error'],
  resetFetchError: null
})

export const UserTypes = Types
export default Creators
// actions functions
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

// Types
export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_USERS_START]: fetchUsersStart,
  [Types.FETCH_USERS_SUCCESS]: fetchUsersSuccess,
  [Types.FETCH_USERS_FAILURE]: fetchUsersFailure,
  [Types.RESET_FETCH_ERROR]: resetFetchError
})
