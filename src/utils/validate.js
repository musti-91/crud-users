function validateEmail(email) {
  var re = /^(([^<>(),;:\s@"]+(\.[^<>(),;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
const validate = ({ name, email, username }) => {
  const errors = []
  const messages = []
  if (
    (name && username && name.length <= 2) &&
    username.length <= 2
  ) {
    errors.push('min email length')
    messages.push(`you're name should be more than 2 characters`)
  }
  if (email !== undefined && !validateEmail(email)) {
    errors.push('invalid email')
    messages.push('ex: [someone@me.com]')
  }
  return { errors, messages }
}
export default validate
