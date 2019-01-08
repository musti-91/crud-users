import React, { Component } from 'react'
import { Segment, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

import Form from '../components/Form'

class AddUserContainer extends Component {
  _onSubmit = e => {
    e.preventDefault()
  }
  render() {
    return (
      <Segment className="add-user">
        <Header>Add User</Header>
        <Form handleSubmit={this._onSubmit} />
      </Segment>
    )
  }
}
const mapStateToProps = state => ({
  forms: state.forms
})

export default connect(mapStateToProps)(AddUserContainer)
