import {} from 'seamless-immutable'
import { createActions, createReducer } from 'reduxsauce'

//types
const { Types, Creators } = createActions({
  fetchUsersStart: null,
  fetchUsersSuccess: ['users'],
  fetchUsersFailure: ['error'],
  resetFetchError: null,
})

export const UserTypes = Types
export default Creators
//state
const initial_state = {
  fetching: false,
  users: [],
  fetchingError: null,
}
// actions

export const fetchUsersStart= (state) => state.merge({
  fetching: true,
  users: [],
  fetchingError:null
})
export const fetchUsersSuccess= (state, { users }) => state.merge({
  fetching: false,
  users,
  fetchingError: null,
})
export const fetchUsersFailure= (state, { error }) => state.merge({
  fetching: false,
  fetchingError: error
})
export const resetFetchError = (state) => state.merge({ fetchingError: null })

export const reducer= createReducer(initial_state, {
  [Types.FETCH_USERS_START]: fetchUsersStart,
  [Types.FETCH_USERS_SUCCESS]: fetchUsersSuccess,
  [Types.FETCH_USERS_FAILURE]: fetchUsersFailure,
  [Types.RESET_FETCH_ERROR]: resetFetchError,
})