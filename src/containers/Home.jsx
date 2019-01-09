import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Segment, Button, Icon } from 'semantic-ui-react'

import Loader from '../components/Loader'
import UsersContainer from './UsersContainer'

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

export default Loader(Home)
