import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import UserActions from '../redux/UserRedux'

import User from '../components/User'

class UsersContainer extends Component {
  componentDidMount() {
    const { fetchingUsers } = this.props
    fetchingUsers()
  }
  render() {
    const { users, fetching } = this.props
    return (
      <Container className="user-container">
        {!fetching && users.length !== 0 && this._renderUsers(users)}
      </Container>
    )
  }

  _renderUsers = users =>
    users.map(user => (
      <User
        user={user}
        key={user.id}
        onDelete={() => this._onDelete(user.id)}
        onEdit={() => this._onEdit(user.id)}
      />
    ))
  _onDelete = id => {
    console.log(id)
  }
  _onEdit = id => {
    console.log(id)
  }
}

const mapStateToProps = state => ({
  fetching: state.users.fetching,
  users: state.users.users,
  fetchingError: state.users.fetchingError
})

const mapDispatchToProps = dispatch => ({
  fetchingUsers: () => dispatch(UserActions.fetchUsersStart())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)
