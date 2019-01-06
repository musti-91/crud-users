import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'

import { reducer as UserReducer } from './UserRedux'

export default (() => {
  const middlewares = []
  const enhancers = []

  const rootReducer = combineReducers({
    users: UserReducer
  })

  const logger = createLogger()
  middlewares.push(logger)

  enhancers.push(applyMiddleware(...middlewares))

  const store = createStore(rootReducer, compose(...enhancers))

  return store
})()
