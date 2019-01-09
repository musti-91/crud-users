import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { Router } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

import './assets/index.css'
import Routing from './containers/Routing'
// added
import { Provider } from 'react-redux'
import createStore from './redux'
import { history } from './utils/history'

const store = createStore
// we wrap our main component with provider that comes from 'react-redux'👆
// Proviider takes one prop: which our store,It will inject our store in all components.
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routing />
    </Router>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.register()
