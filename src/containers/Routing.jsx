import React from 'react'
import { Route } from 'react-router-dom'

import { routes } from './routes'

const Routing = () => {
  return (
    <div>
      {Object.keys(routes).map((route, key) => (
        <Route {...routes[route]} key={key + 1} />
      ))}
    </div>
  )
}

export default Routing
