import React from "react";
import Button from "./elements/Button";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Alert from "./elements/Alert";
import Showable from "./elements/Showable.jsx";

const UserForm = ({ onAddUser, onEditUser, error, userToEdit, editField }) => {
  const form = userToEdit ? (
    <form className="container" onSubmit={onEditUser}>
      <Showable error={error}>
        <Alert type="danger">There was a problem</Alert>
      </Showable>
      <h1>Edit user</h1>
      <InputGroup name="first_name" labelText="First Name">
        <Input
          type="text"
          name="first_name"
          value={userToEdit.first_name}
          onChange={e => editField("first_name", e.target.value)}
        />
      </InputGroup>
      <InputGroup name="last_name" labelText="Last Name">
        <Input
          type="text"
          name="last_name"
          value={userToEdit.last_name}
          onChange={e => editField("first_name", e.target.value)}
        />
      </InputGroup>
      <InputGroup name="avatar" labelText="Photo Link">
        <Input
          type="text"
          name="avatar"
          value={userToEdit.avatar}
          onChange={e => editField("first_name", e.target.value)}
        />
      </InputGroup>
      <Button type="submit" color="primary">
        Save User
      </Button>
    </form>
  ) : (
    <form className="container" onSubmit={onAddUser}>
      <Showable error={error}>
        <Alert type="danger">There was a problem</Alert>
      </Showable>
      <h1>Add a new user</h1>
      <InputGroup name="first_name" labelText="First Name">
        <Input name="first_name" />
      </InputGroup>
      <InputGroup name="last_name" labelText="Last Name">
        <Input name="last_name" />
      </InputGroup>
      <InputGroup name="avatar" labelText="Photo Link">
        <Input name="avatar" />
      </InputGroup>
      <Button type="submit" color="primary">
        Save User
      </Button>
    </form>
  );

  return <div>{form}</div>;
};

export default UserForm;
