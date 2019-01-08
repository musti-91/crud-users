import { combineReducers } from 'redux'
import { reducer as ReduxForm } from 'redux-form'
import { reducer as UserReducer } from './UserRedux'

import RootSaga from '../saga'
import configureStore from './CreateStore'

export default (() => {
  const rootReducer = combineReducers({
    forms: ReduxForm,
    users: UserReducer
  })
  const rootSaga = RootSaga
  return configureStore(rootReducer, rootSaga)
})()
