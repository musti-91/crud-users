import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Icon } from 'semantic-ui-react'
import InputField from './InputField'

const _renderField = ({ input, meta, icon, placeholder}) => {
  return (
    <div>
      <InputField
        type="text"
        icon={icon}
        placeholder={placeholder}
        error={meta.touched && meta.error && meta.error}
        {...input}
      />
    </div>
  )
}
const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} className="form">
    <Field component={_renderField} name="fullname" type="text" icon="user" placeholder="Full name" className="field"/>
    <Field component={_renderField} name="email" type="text" icon="mail" placeholder="Email"/>
    <Field component={_renderField} name="username" type="text" icon="user circle" placeholder="username"/>
    <Field component={_renderField} name="phone" type="text" icon="mobile" placeholder="Mobile number"/>
    <Button animated="fade" className="add-button" type="submit">
        <Icon name="user plus" />
    </Button>
  </form>
)

export default reduxForm({ form: 'user' })(Form)
