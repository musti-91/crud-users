import { all, takeLatest } from 'redux-saga/effects'

import {
  fetchUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser
} from './UserSaga'
import { UserTypes } from '../redux/UserRedux'

import { api as apiConfig } from '../utils/apiConfig'

export default (() => {
  return function* rootSaga() {
    yield all([
      // fetching
      /**
       * takeLatest takes:
       * 1.ActionsTypes:which will trigger our Types;
       * 2.function generator or any function to trigger,
       * 3,any: which are any arguments you want to pass as extra,
       * ** because our saga has takes one argument:api, we pass this to takeLatest as three argument
       * saga will take this and passed it to our saga.
       * Doc's: https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
       */
      takeLatest(UserTypes.FETCH_USERS_START, fetchUsers, apiConfig),
      takeLatest(UserTypes.GET_USER, getUser, apiConfig),
      takeLatest(UserTypes.ADD_USER, addUser, apiConfig),
      takeLatest(UserTypes.UPDATE_USER, updateUser, apiConfig),
      takeLatest(UserTypes.DELETE_USER, deleteUser, apiConfig)
    ])
  }
})()
