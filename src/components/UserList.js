import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users, isFetching, onRemoveUser, startEditUser }) => {
  const userList = users.map(user => (
    <UserCard
      user={user}
      key={user.id}
      onRemoveUser={onRemoveUser}
      startEditUser={startEditUser}
    />
  ));

  return (
    <div className="container">
      <h1>User List</h1>
      <div className="card-group">
        {isFetching ? <p>Loading...</p> : userList}
      </div>
    </div>
  );
};

export default UserList;
