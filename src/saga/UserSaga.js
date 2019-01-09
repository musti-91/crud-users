import { put, call } from 'redux-saga/effects'

import addTitleError from '../utils/errorHelper'
// import Actions from 'redux' files where we can trigger automatically any action.
import UserActions from '../redux/UserRedux'

// function generator,
export function* fetchUsers(api) {
  // call api with yield keyword that returns res.json()
  const res = yield call(api.GET_ALL)
  if (Array.isArray(res) && res.length !== 0) {
    // if my response is array, than trigger this actions.
    yield put(UserActions.fetchUsersSuccess(res))
  } else {
    // otherwise put any thing we return from the server as error, trigger failure with this error
    const error = res
    yield put(UserActions.fetchUsersFailure(error))
  }
}
// getpost
export function* getUser(api, actions) {
  const { id } = actions
  const data = yield call(api.GET, id)
  if (data.name) {
    yield put(UserActions.getUserSuccess(data))
  } else {
    const error = addTitleError(data, 'Get user failed')
    yield put(UserActions.getUserFailure(error))
  }
}
// add user
export function* addUser(api, actions) {
  const { newUser } = actions
  const data = yield call(api.POST, newUser)

  console.log(newUser)
  if (data.hasOwnProperty('id')) {
    yield put(UserActions.addUserSuccess(newUser))
  } else {
    const error = addTitleError(data, 'add user failed')
    yield put(UserActions.addUserFailure(error))
  }
}

// update user
export function* updateUser(api, actions) {
  const { id, updatedUser } = actions
  const data = yield call(api.PUT, id, updatedUser)
  if (data.title) {
    yield put(UserActions.updateUserSuccess(id))
  } else {
    const error = addTitleError(data, 'update user failed')
    yield put(UserActions.updateUserFailure(error))
  }
}
// delete user
export function* deleteUser(api, actions) {
  const { userId } = actions
  const data = yield call(api.DELETE, userId)
  if (data) {
    yield put(UserActions.deleteUserSuccess(data))
  } else {
    const error = addTitleError(data, 'delete user failed')
    yield put(UserActions.deleteUserFailure(error))
  }
}
