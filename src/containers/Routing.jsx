import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import history from '../utils/history'
import { routes } from './routes'
const Routing = () => {
  return (
    <Router history={history}>
      <Switch>
        {Object.keys(routes).map((route, key)=> <Route {...routes[route]} key={key+1} />)}
      </Switch>
    </Router>
  )
}

export default Routing
