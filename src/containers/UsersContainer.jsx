import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import UserActions from '../redux/UserRedux'

import User from '../components/User'

class UsersContainer extends Component {
  state = {
    edit: false,
    userToUpdate: null
  }

  componentDidMount() {
    const { fetchingUsers } = this.props
    fetchingUsers()
  }

  render() {
    const { users, fetching } = this.props
    const { userToUpdate, edit } = this.state
    return (
      <Container className="user-container">
        {!fetching && users.length !== 0 && this._renderUsers(users)}
        { edit && this._renderEditUser(userToUpdate)}
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
  _onDelete = userId => {
    const { deleteUser, resetDeleteUserError, users } = this.props
    users.filter(user => user.id !== userId)
    deleteUser(userId)
    resetDeleteUserError()
  }

  _onEdit = id => {
    const { users } = this.props
    this.setState({ edit: false })
    users.filter(user => {
      if (user.id === id) {
        this.setState({ userToUpdate: user, edit: true })
      }
    })
  }
  _renderEditUser = userToUpdate => {
    console.log(userToUpdate)
  }

}

const mapStateToProps = state => ({
  fetching: state.users.fetching,
  users: state.users.users,
  fetchingError: state.users.fetchingError
})

const mapDispatchToProps = dispatch => ({
  fetchingUsers: () => dispatch(UserActions.fetchUsersStart()),
  deleteUser: id => dispatch(UserActions.deleteUser(id)),
  resetDeleteUserError: () => dispatch(UserActions.resetDeleteUserError())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)
