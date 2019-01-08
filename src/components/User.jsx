import React from 'react'
import PropTypes from 'prop-types'
import { Container, Header, Image,Icon } from 'semantic-ui-react'

import SideList from './SideList'

const User = ({ user, onDelete, onEdit }) => (
  <Container className="user-card">
    <Image
      size="tiny"
      circular
      avatar
      src={require('../assets/iu.png')}
      className="user-logo"
    />
    <Header size='large' className="user-name">{user.name}</Header>
    <Header className="info-user">
      <Header sub>
        <Icon name="mail" />
        {user.email}
      </Header>
      <Header sub>
        <Icon name="user" />
        {user.username}
      </Header>
      <Header sub>
        <Icon name="mobile alternate" />
        {user.phone}
      </Header>
      <Header sub>
        <Icon name="globe" />
        {user.website}
      </Header>
      <Header sub>
        <Icon name="building" />
        {user.company.name}
      </Header>
      <Header sub>
        <Icon name="map" />
        {user.address.street+", "+user.address.suite}
      </Header>
    </Header>
    <SideList onDelete={onDelete} onEdit={onEdit} />
  </Container>
)

User.propTypes = {
  user: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func
}
export default User
