import { put, call } from 'redux-saga/effects'

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
