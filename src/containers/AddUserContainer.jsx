import React, { Component } from 'react'
import { Segment, Header, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import UserActions from '../redux/UserRedux'
import Form from '../components/Form'
import Loader from '../components/Loader'
class AddUserContainer extends Component {
  _onSubmit = e => {
    e.preventDefault()
    const { values } = this.props.forms.user
    if (values !== undefined) {
      this._setUser(values)
    } else {
      return
    }
  }
  render() {
    return (
      <Segment className="add-user">
        <Link to="/">
          <Button size="small" className="light-coral">
            <Icon name="arrow left" />
            Back
          </Button>
        </Link>
        <Header>Add User</Header>
        <Form handleSubmit={this._onSubmit} />
        {/* {errors && this._renderError(errors)}
        {messages && this._renderMessages(messages)} */}
      </Segment>
    )
  }
  // _renderError = errors =>
  //   errors.map((error, index) => (
  //     <Header sub key={index}>
  //       {error}
  //     </Header>
  //   ))

  // _renderMessages = messages =>
  //   messages.map((message, index) => (
  //     <Header sub key={index}>
  //       {message}
  //     </Header>
  //   ))

  _setUser = values => {
    let randomNr = Math.floor(Math.random() * 50)
    const user = {
      email: values.email,
      name: values.name,
      username: values.username,
      phone: values.phone,
      picture: {
        medium: `https://randomuser.me/api/portraits/med/women/${randomNr}.jpg`
      },
      company: {
        name: '-'
      },
      website: '-',
      address: {
        street: '-',
        suite: '-'
      }
    }
    const { addUser } = this.props
    addUser(user)
  }
}
const mapStateToProps = state => ({
  forms: state.forms
})
const mapDispatchToProps = dispatch => ({
  addUser: newUser => dispatch(UserActions.addUser(newUser))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loader(AddUserContainer))
