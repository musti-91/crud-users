import Home from './Home'
import UsersContainer from './UsersContainer'
import AddUserContainer from './AddUserContainer'

export const routes = {
  Home: {
    path: '/',
    exact: true,
    component: Home
  },
  Users: {
    path: '/users',
    exact: true,
    component: UsersContainer
  },
  addUser: {
    path: '/add-user',
    exact: true,
    component: AddUserContainer
  }
}