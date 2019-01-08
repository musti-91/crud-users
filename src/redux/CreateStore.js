import { applyMiddleware, compose, createStore } from 'redux'
//* added
// start
import createSagaMiddleware from 'redux-saga'
// end
import { createLogger } from 'redux-logger'

export default (rootReducer, rootSaga) => {
  const middlewares = []
  const enhancers = []

  const logger = createLogger()
  middlewares.push(logger)

  //* added
  // start
  const sagaMiddleware = createSagaMiddleware()
  middlewares.push(sagaMiddleware)
  //end
  enhancers.push(applyMiddleware(...middlewares))

  const store = createStore(rootReducer, compose(...enhancers))

  //* added
  // start
  sagaMiddleware.run(rootSaga)
  // end
  return store
}
