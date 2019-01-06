import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
import store from './redux'
import Routing from './containers/Routing'

ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>, document.getElementById('root'))

serviceWorker.register()
