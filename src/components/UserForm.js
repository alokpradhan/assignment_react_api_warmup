import React from 'react'
import Button from './elements/Button'
import Input from './elements/Input'
import InputGroup from './elements/InputGroup'
import Alert from './elements/Alert'
import Showable from './elements/Showable.jsx'

const UserForm = ({onSubmit, error}) => {

  return(
    <form className="container" onSubmit={onSubmit}>
      <h1>Add a new user</h1>

      <Showable error={error}>
        <Alert type="danger">There was a problem</Alert>
      </Showable>

      <InputGroup name="first_name" labelText="First Name">
        <Input name="first_name" />
      </InputGroup>
      <InputGroup name="last_name" labelText="Last Name">
        <Input name="last_name" />
      </InputGroup>
      <InputGroup name="avatar" labelText="Photo Link">
        <Input name="avatar" />
      </InputGroup>

      <Button type='submit' color='primary'>
        Save User
      </Button>
    </form>
  )

}

export default UserForm