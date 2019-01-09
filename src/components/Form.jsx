import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Icon } from 'semantic-ui-react'
import InputField from './InputField'

const _renderField = ({ input, meta, icon, label}) => {
  return (
    <div>
      <InputField type="text" icon={icon} placeholder={label} error={meta.touched && meta.error && meta.error} {...input} />
    </div>
  )
}
const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} className="form">
    <Field component={_renderField} name="name" type="text" icon="user" label="Full name"/>
    <Field component={_renderField} name="email" type="text" icon="mail" label="Email"/>
    <Field component={_renderField} name="username" type="text" icon="user circle" label="username"/>
    <Field component={_renderField} name="phone" type="text" icon="mobile" label="Mobile number"/>
    <Button animated="fade" className="add-button" type="submit">
        <Icon name="user plus" />
    </Button>
  </form>
)

export default reduxForm({ form: 'user' })(Form)

