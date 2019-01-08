import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Segment, Button, Icon } from 'semantic-ui-react'

import UsersContainer from './UsersContainer'
import AddUserContainer from './AddUserContainer'

const Home = () => {
  return (
    <Container className="container">
      <Link to="/add-user">
        <Button>
          Add User <Icon name="user plus" />
        </Button>
      </Link>
      <Segment>
        <UsersContainer />
      </Segment>
    </Container>
  )
}

export default Home
