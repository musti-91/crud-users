const headers = {
  Access: 'application/json',
  'Content-Type': 'application/json'
}
const url = 'http://localhost:4000/users/'

export const api = {
  GET_ALL: () => fetch(url).then(res => res.json()),

  GET: id => fetch(url + id).then(res => res.json()),

  POST: (newUser) =>
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers
    }).then(res => res.json()),
  DELETE: (id) =>
    fetch(url + id, { method: 'DELETE', headers }).then(res => res.json()),

  PUT: (id, updatesUser) =>
    fetch(url + id, {
      method: 'PUT',
      headers,
      body: JSON.stringify(updatesUser)
    }).then(res => res.json)
}
