import React from "react";
import JumbotronFluid from "./elements/JumbotronFluid";
import UserList from "./UserList";
import UserForm from "./UserForm";

const App = ({
  editingUserField,
  error,
  users,
  userToEdit,
  isFetching,
  onAddUser,
  onRemoveUser,
  onEditUser,
  startEditUser
}) => {
  return (
    <div className="App">
      <JumbotronFluid
        heading="User CRUD"
        lead="Using an API for User CRUD operations"
      />
      <UserList
        isFetching={isFetching}
        onRemoveUser={onRemoveUser}
        startEditUser={startEditUser}
        users={users}
      />
      <br />
      <UserForm
        addUser={onAddUser}
        editUser={onEditUser}
        form-type="new"
        userToEdit={userToEdit}
        editField={editingUserField}
      />
    </div>
  );
};

export default App;
