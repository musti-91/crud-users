import React, { Component } from 'react'
import { Loader as Loading, Container, Icon } from 'semantic-ui-react'

const Loader = WrappedComponent => {
  return class Loader extends Component {
    state = {
      loading: true
    }
    componentDidMount() {
      setTimeout(() => this.setState({ loading: false }), 1000)
    }
    render() {
      const { loading } = this.state
      return !loading ? (
        <WrappedComponent />
      ) : (
        <Container className="no-content">
          <Loading active inline="centered">
            <Icon name="users" />
          </Loading>
        </Container>
      )
    }
  }
}

export default Loader
