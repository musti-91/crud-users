import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'semantic-ui-react'

const InputField = ({ onChange, placeholder, icon, label, error, loading, iconPosition }) => (
  <div>
    <Input
      icon={icon && icon}
      placeholder={placeholder && placeholder}
      onChange={onChange}
      label={label && label}
      loading={loading && loading}
    />
    {error && <span className="error">{error}</span>}
  </div>
)

InputField.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  iconPosition: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.any
}
InputField.defaultProps = {
  placeholder: '',
  iconPosition: 'left',
  loading: false,
  error: null
}
export default InputField
