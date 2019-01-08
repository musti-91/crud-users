import Home from './Home'
import UsersContainer from './UsersContainer'
import User from '../components/User'
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
export const apiConfig = async (url, method, path, data) => {
  const res = await fetch(url + path, {
    method,
    body: JSON.stringify(data),
    headers: {
      Access: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  return await res.json()
}
