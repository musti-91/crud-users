import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import Routing from './containers/Routing'

ReactDOM.render(<Routing />, document.getElementById('root'))

serviceWorker.register()
