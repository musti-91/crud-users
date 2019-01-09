import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { Icon } from 'semantic-ui-react'

const SideList = ({ onDelete, onEdit }) => (
  <ul className="side-list">
    <li onClick={onEdit}>
      <Link to="/add-user">
        <Icon name="edit" size="large" color="grey" />
      </Link>
    </li>
    <li onClick={onDelete}>
      <Icon name="remove" color="red" size="large" />
    </li>
  </ul>
)

SideList.propTypes = {
  onDelete: PropTypes.func,
  onEdit: PropTypes.func
}

export default SideList
