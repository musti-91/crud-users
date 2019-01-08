import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import Routing from './containers/Routing'
// added
import { Provider } from 'react-redux'
import createStore from './redux'

const store = createStore
// we wrap our main component with provider that comes from 'react-redux'👆
// Proviider takes one prop: which our store,It will inject our store in all components.
ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.register()
