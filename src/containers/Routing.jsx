import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserActions from '../redux/UserRedux'

class Routing extends Component {
  componentDidMount() {
    const { fetchUsersStart } = this.props
    fetchUsersStart()
  }

  render() {
    const { users, fetching } = this.props
    return (
      <div>
        {!fetching &&
          users.length !== 0 &&
          users.map(user => <li key={user.id}>{user.name}</li>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  fetching: state.users.fetching,
  users: state.users.users
})

const mapDispatchToProps = dispatch => ({
  fetchUsersStart: () => dispatch(UserActions.fetchUsersStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Routing)
