import Home from './Home'
import UsersContainer from './UsersContainer'
import User from '../components/User'

export const routes = {
  Home: {
    path: "/",
    exact: true,
    component: Home,
  },
  Users: {
    path: '/users',
    exact: true,
    component: UsersContainer
  },
  user: {
    path: "/:user",
    exact: true,
    component: User
  }
}
