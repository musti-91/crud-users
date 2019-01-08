import Home from './Home'
import UsersContainer from './UsersContainer'
import User from '../components/User'

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
  user: {
    path: '/:user',
    exact: true,
    component: User
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